
"use strict";

// ============================================================
// 🌌 1. 記事データ
// ============================================================

let articlesData = [];

// 記事ファイルを追加するときは、この配列に番号を追加する
// 例：3話目を追加 → 'articles/3.json'
const articleFiles = [
    'articles/1.json',
    'articles/2.json'
];

// ============================================================
// ⭐ 2. お気に入り管理
// ============================================================

// お気に入りの記事IDを保存する
// 同じブラウザ内に保存され、ページを再読み込みしても残る
const FAVORITES_STORAGE_KEY = 'uchu-zatugaku-favorites';

let favoriteArticleIds = loadFavoriteIds();

/* =========================================
   📖 読了記事の保存
========================================= */

const READ_STORAGE_KEY = 'uchu-zatugaku-read';

let readArticleIds = loadReadIds();

function loadReadIds() {
    try {
        const saved = localStorage.getItem(READ_STORAGE_KEY);
        const parsed = saved ? JSON.parse(saved) : [];

        if (!Array.isArray(parsed)) {
            return [];
        }

        return [...new Set(
            parsed.filter(Number.isInteger)
        )];

    } catch (error) {
        console.error('読了状態の読み込みに失敗しました:', error);
        return [];
    }
}

function saveReadIds() {
    try {
        localStorage.setItem(
            READ_STORAGE_KEY,
            JSON.stringify(readArticleIds)
        );
    } catch (error) {
        console.error('読了状態の保存に失敗しました:', error);
    }
}

function isRead(articleId) {
    return readArticleIds.includes(Number(articleId));
}

function markArticleAsRead(articleId) {
    const id = Number(articleId);

    if (!Number.isInteger(id) || isRead(id)) {
        return;
    }

    readArticleIds.push(id);
    saveReadIds();
}


function loadFavoriteIds() {
    try {
        const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);

        if (!saved) {
            return [];
        }

        const parsed = JSON.parse(saved);

        if (!Array.isArray(parsed)) {
            return [];
        }

        return parsed.filter(function (id) {
            return Number.isInteger(id);
        });

    } catch (error) {
        console.error('お気に入りの読み込みに失敗しました:', error);
        return [];
    }
}

function saveFavoriteIds() {
    try {
        localStorage.setItem(
            FAVORITES_STORAGE_KEY,
            JSON.stringify(favoriteArticleIds)
        );

        return true;

    } catch (error) {
        console.error('お気に入りの保存に失敗しました:', error);
        return false;
    }
}

// お気に入りに登録されているか確認
function isFavorite(articleId) {
    return favoriteArticleIds.includes(Number(articleId));
}

// お気に入りを登録・解除
function toggleFavorite(articleId) {
    const id = Number(articleId);

    if (!Number.isInteger(id)) {
        return;
    }

    if (isFavorite(id)) {
        // 登録済みなら解除
        favoriteArticleIds = favoriteArticleIds.filter(function (savedId) {
            return savedId !== id;
        });
    } else {
        // 未登録なら追加
        favoriteArticleIds.push(id);
    }

    saveFavoriteIds();

    // 一覧を更新して星の状態を反映
    refreshArticleViews();
}

// ============================================================
// 🔄 3. 状態管理
// ============================================================

let activeArticleId = null;

let currentQuestionIndex = 0;

let quizScore = 0;

let isSoundOn = true;

let currentQuizData = [];

let highlightObserver = null;

// お気に入りだけを表示するモード
let showingFavoritesOnly = false;

// ============================================================
// 📚 4. JSONファイルから記事を読み込む
// ============================================================

async function loadArticles() {
    const mainPage = document.getElementById('main-page');

    try {
        const responses = await Promise.all(
            articleFiles.map(function (file) {
                return fetch(file);
            })
        );

        // ファイルが見つからない場合はエラー
        for (let i = 0; i < responses.length; i++) {
            if (!responses[i].ok) {
                throw new Error(
                    articleFiles[i] + ' の読み込みに失敗しました'
                );
            }
        }

        const articles = await Promise.all(
            responses.map(function (response) {
                return response.json();
            })
        );

        // JSONの内容をチェック
        articles.forEach(function (article, index) {
            if (
                !article ||
                typeof article.id !== 'number' ||
                typeof article.title !== 'string'
            ) {
                throw new Error(
                    articleFiles[index] + ' の記事データが正しくありません'
                );
            }
        });

        // IDの重複をチェック
        const ids = articles.map(function (article) {
            return article.id;
        });

        if (new Set(ids).size !== ids.length) {
            throw new Error('記事IDが重複しています');
        }

        articlesData = articles;

        // 削除された記事のお気に入りを整理
        const existingIds = articlesData.map(function (article) {
            return article.id;
        });

        favoriteArticleIds = favoriteArticleIds.filter(function (id) {
            return existingIds.includes(id);
        });

        saveFavoriteIds();

        // 新しい順に表示
        sortArticles('new', false);

    } catch (error) {
        console.error('記事の読み込みエラー:', error);

        if (mainPage) {
            mainPage.innerHTML = `
                <p style="color: red;">
                    記事を読み込めませんでした。
                    articlesフォルダ内のJSONファイル名と形式を確認してください。
                    詳細はブラウザの開発者ツールのConsoleで確認できます。
                </p>
            `;
        }
    }
}

// ============================================================
// 🔊 5. 効果音
// ============================================================

function playSound(type) {
    if (!isSoundOn) {
        return;
    }

    const AudioContextClass =
        window.AudioContext ||
        window.webkitAudioContext;

    if (!AudioContextClass) {
        return;
    }

    try {
        const ctx = new AudioContextClass();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        if (type === 'click') {
            osc.type = 'sine';

            osc.frequency.setValueAtTime(600, ctx.currentTime);

            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(
                0.01,
                ctx.currentTime + 0.1
            );

            osc.start();
            osc.stop(ctx.currentTime + 0.1);

        } else if (type === 'correct') {
            osc.type = 'triangle';

            osc.frequency.setValueAtTime(523.25, ctx.currentTime);
            osc.frequency.setValueAtTime(
                659.25,
                ctx.currentTime + 0.1
            );

            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(
                0.01,
                ctx.currentTime + 0.3
            );

            osc.start();
            osc.stop(ctx.currentTime + 0.3);

        } else if (type === 'wrong') {
            osc.type = 'sawtooth';

            osc.frequency.setValueAtTime(150, ctx.currentTime);

            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(
                0.01,
                ctx.currentTime + 0.4
            );

            osc.start();
            osc.stop(ctx.currentTime + 0.4);
        }

        osc.onended = function () {
            ctx.close();
        };

    } catch (error) {
        console.warn('効果音を再生できませんでした:', error);
    }
}

// ============================================================
// 🔤 6. 文字サイズ変更
// ============================================================

function changeTextSize(size) {
    if (!['small', 'normal', 'large'].includes(size)) {
        return;
    }

    document.body.classList.remove(
        'text-small',
        'text-normal',
        'text-large'
    );

    document.body.classList.add('text-' + size);

    const buttons = document.querySelectorAll(
        '.sidebar-content .setting-row'
    );

    const textButtons = buttons[0]
        ? buttons[0].querySelectorAll('.setting-btn')
        : [];

    textButtons.forEach(function (button) {
        button.classList.remove('active');
    });

    const index = {
        small: 0,
        normal: 1,
        large: 2
    }[size];

    if (textButtons[index]) {
        textButtons[index].classList.add('active');
    }
}

// ============================================================
// 🔊 7. 効果音 ON / OFF
// ============================================================

function setSound(status) {
    isSoundOn = Boolean(status);

    const onButton = document.getElementById('sound-on-btn');
    const offButton = document.getElementById('sound-off-btn');

    if (onButton) {
        onButton.classList.toggle('active', isSoundOn);
    }

    if (offButton) {
        offButton.classList.toggle('active', !isSoundOn);
    }

    if (isSoundOn) {
        playSound('click');
    }
}

// ============================================================
// 📚 8. お気に入り表示の切り替え
// ============================================================

// HTML側のボタンから呼び出せる
function showAllArticles() {
    showingFavoritesOnly = false;
    sortArticles('new', false);
}

function showFavoriteArticles() {
    showingFavoritesOnly = true;
    sortArticles('new', false);
}

// ============================================================
// 🔄 9. 記事の並び替え
// ============================================================


function sortArticles(type, closeMenu) {
    let sorted = [...articlesData];

    if (type === 'new') {
        sorted.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        });

    } else if (type === 'old') {
        sorted.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date);

        });

    } else if (type === 'unread') {
        sorted.sort(function (a, b) {
            return Number(isRead(a.id)) - Number(isRead(b.id));
        });

    } else if (type === 'read') {
        sorted.sort(function (a, b) {
            return Number(isRead(b.id)) - Number(isRead(a.id));
        });
    }

    if (showingFavoritesOnly) {
        sorted = sorted.filter(function (article) {
            return isFavorite(article.id);
        });
    }

    renderArticlesList(sorted);

    if (closeMenu !== false) {
        const sidebar = document.getElementById('sidebar-menu');
        const overlay = document.getElementById('sidebar-overlay');

        if (sidebar && sidebar.classList.contains('open')) {
            toggleSidebar();
        } else if (overlay) {
            overlay.classList.remove('open');
        }
    }
}


// ============================================================
// 📋 10. お気に入り状態の更新
// ============================================================

function refreshArticleViews() {
    sortArticles('new', false);

    // 記事の詳細画面を開いている場合も更新
    if (activeArticleId !== null) {
        const article = articlesData.find(function (item) {
            return item.id === activeArticleId;
        });

        if (article) {
            renderDetailFavoriteButton(article);
        }
    }
}

// ============================================================
// ⭐ 11. お気に入りボタンを作る
// ============================================================

function createFavoriteButton(article, location) {
    const button = document.createElement('button');

    button.type = 'button';
    button.className = 'favorite-btn';
    button.dataset.articleId = String(article.id);

    button.setAttribute(
        'aria-label',
        isFavorite(article.id)
            ? 'お気に入りを解除'
            : 'お気に入りに登録'
    );

    button.setAttribute(
        'aria-pressed',
        String(isFavorite(article.id))
    );

    button.innerHTML = `
        <span class="favorite-icon" aria-hidden="true">
            ${isFavorite(article.id) ? '★' : '☆'}
        </span>
        <span class="favorite-label">
            ${isFavorite(article.id) ? 'お気に入り登録済み' : 'お気に入り'}
        </span>
    `;

    button.classList.toggle(
        'is-favorite',
        isFavorite(article.id)
    );

    button.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        playSound('click');
        toggleFavorite(article.id);
    });

    button.dataset.location = location;

    return button;
}

// ============================================================
// ⭐ 12. 詳細画面のお気に入りボタン
// ============================================================

function renderDetailFavoriteButton(article) {
    const detailTitle = document.getElementById('detail-title');

    if (!detailTitle) {
        return;
    }

    let container = document.getElementById(
        'detail-favorite-container'
    );

    if (!container) {
        container = document.createElement('div');
        container.id = 'detail-favorite-container';
        container.className = 'detail-favorite-container';

        detailTitle.insertAdjacentElement('afterend', container);
    }

    container.innerHTML = '';

const button = createFavoriteButton(article, 'detail');

// 詳細画面のボタンにも登録状態を反映
button.classList.remove('favorite-btn');
button.classList.add('favorite-toggle-btn');

button.querySelector('.favorite-label').textContent =
    isFavorite(article.id)
        ? 'お気に入り登録済み'
        : 'お気に入りに登録';

container.appendChild(button);
}
// ============================================================
// 📦 13. 記事一覧を作成
// ============================================================

function renderArticlesList(list) {
    const mainPage = document.getElementById('main-page');
const articleList = document.getElementById('article-list');

if (!mainPage || !articleList) return;

articleList.innerHTML = '';
    

    if (showingFavoritesOnly) {
        const backButton = document.createElement('button');
        backButton.type = 'button';
        backButton.className = 'more-btn';
        backButton.textContent = 'すべての記事を見る';

        backButton.addEventListener('click', function () {
            playSound('click');
            showAllArticles();
        });

        articleList.appendChild(backButton);
    }

    if (list.length === 0) {
        const message = document.createElement('p');

        message.textContent = showingFavoritesOnly
            ? 'お気に入りの記事はまだありません。記事の☆ボタンを押して登録しよう！'
            : '記事がまだありません。';

        mainPage.appendChild(message);
        return;
    }

    list.forEach(function (article) {
        const box = document.createElement('div');
        box.className = 'zatugaku-box';

        const top = document.createElement('div');
top.className = 'article-top';


if (article.image) {
    const thumbnail = document.createElement('img');

    thumbnail.className = 'article-thumbnail';
    thumbnail.src = article.image;
    thumbnail.alt = '';
    thumbnail.loading = 'lazy';
    thumbnail.decoding = 'async';

    top.appendChild(thumbnail);
}

const info = document.createElement('div');
info.className = 'article-info-area';

        const episode = document.createElement('div');
        episode.className = 'episode-label';
        episode.textContent = `第${article.episode}話`;
        
const readStatus = document.createElement('span');

readStatus.className = 'read-status ' +
    (isRead(article.id) ? 'is-read' : 'is-unread');

readStatus.textContent = isRead(article.id)
    ? '✓ 読んだ'
    : '未読';


        const title = document.createElement('h2');
        title.textContent = article.title;

        const summary = document.createElement('p');
        summary.className = 'article-summary';
        summary.textContent = article.summary || '';

        const actions = document.createElement('div');
        actions.className = 'article-actions';

        actions.appendChild(createFavoriteButton(article, 'list'));

        const buttonWrapper = document.createElement('div');
        buttonWrapper.className = 'btn-wrapper';

        const moreButton = document.createElement('button');
        moreButton.type = 'button';
        moreButton.className = 'more-btn';
        moreButton.textContent = '続きを読む';

        moreButton.addEventListener('click', function () {
            playSound('click');
            goToDetailPage(article.id);
        });

        buttonWrapper.appendChild(moreButton);
        actions.appendChild(buttonWrapper);

        info.appendChild(episode);
        info.appendChild(readStatus);
        info.appendChild(title);
        info.appendChild(summary);
        info.appendChild(actions);

        top.appendChild(info);
        box.appendChild(top);

        articleList.appendChild(box);
    });
}

// ============================================================
// ☰ 14. サイドバー
// ============================================================

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar-menu');
    const overlay = document.getElementById('sidebar-overlay');

    if (!sidebar || !overlay) return;

    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
}

// ============================================================
// 📖 15. 詳細ページを開く
// ============================================================

function goToDetailPage(id) {
    const article = articlesData.find(function (item) {
        return item.id === Number(id);
    });

    if (!article) {
        console.error('記事が見つかりません。ID:', id);
        return;
    }

    activeArticleId = article.id;
    markArticleAsRead(article.id);

    document.getElementById('detail-episode').textContent =
        `第${article.episode}話`;

    document.getElementById('detail-title').textContent =
        article.title;
        

const detailImage = document.getElementById('detail-image');
const detailImageCredit = document.getElementById('detail-image-credit');

if (article.image) {
    detailImage.src = article.image;
    detailImage.alt = article.title;
    detailImage.hidden = false;
} else {
    detailImage.removeAttribute('src');
    detailImage.alt = '';
    detailImage.hidden = true;
}

// 画像の出典情報を表示する
if (
    article.imageCredit ||
    article.imageSource ||
    article.imageTitle ||
    article.imageLicense
) {
    detailImageCredit.replaceChildren();

    // 出典
    const creditText = document.createElement('p');
    creditText.textContent =
        '出典：' + (article.imageCredit || '画像提供元');
    detailImageCredit.appendChild(creditText);

    // 画像タイトル
    if (article.imageTitle) {
        const titleText = document.createElement('p');
        titleText.textContent =
            '画像タイトル：' + article.imageTitle;
        detailImageCredit.appendChild(titleText);
    }

    // 元ページへのリンク
    if (article.imageSource) {
        const sourceLink = document.createElement('a');
        sourceLink.href = article.imageSource;
        sourceLink.textContent = '元のページを確認する';
        sourceLink.target = '_blank';
        sourceLink.rel = 'noopener noreferrer';
        detailImageCredit.appendChild(sourceLink);
    }

    // 利用条件
    if (article.imageLicense) {
        const licenseText = document.createElement('p');
        licenseText.textContent =
            '利用条件：' + article.imageLicense;
        detailImageCredit.appendChild(licenseText);
    }

    detailImageCredit.hidden = false;
} else {
    detailImageCredit.replaceChildren();
    detailImageCredit.hidden = true;
}



    document.getElementById('detail-text').innerHTML =
        article.text || '';

    

    currentQuizData = Array.isArray(article.quiz)
        ? article.quiz
        : [];

    currentQuestionIndex = 0;
    quizScore = 0;

    document.getElementById('quiz-start-view').style.display = 'block';
    document.getElementById('quiz-game-view').style.display = 'none';
    document.getElementById('quiz-result-view').style.display = 'none';

    document.getElementById('quiz-feedback').textContent = '';
    document.getElementById('quiz-feedback').className = 'quiz-feedback';

    document.getElementById('quiz-options-container').innerHTML = '';

    document.getElementById('main-page').style.display = 'none';
    document.getElementById('detail-page').style.display = 'block';

    document.body.classList.add('article-view');

    closeCelebration();

    window.scrollTo({
        top: 0,
        behavior: 'auto'
    });

    resetHighlightMarkers();

    if (highlightObserver) {
        highlightObserver.disconnect();
        highlightObserver = null;
    }

    setTimeout(function () {
        setupHighlightObserver();
    }, 100);
}

// ============================================================
// ⬅️ 16. 一覧に戻る
// ============================================================

function goToMainPage() {
    document.getElementById('detail-page').style.display = 'none';
    document.getElementById('main-page').style.display = 'block';

    document.body.classList.remove('article-view');

    resetHighlightMarkers();

    if (highlightObserver) {
        highlightObserver.disconnect();
        highlightObserver = null;
    }

    activeArticleId = null;
    currentQuizData = [];
    currentQuestionIndex = 0;
    quizScore = 0;

    closeCelebration();
    refreshArticleViews();

    window.scrollTo({
        top: 0,
        behavior: 'auto'
    });
}

// ============================================================
// 🖍️ 17. マーカーをリセット
// ============================================================

function resetHighlightMarkers() {
    document.querySelectorAll(
        '.red-marker.active, .highlight-marker.active'
    ).forEach(function (marker) {
        marker.classList.remove('active');
    });
}

// ============================================================
// 🖍️ 18. スクロール連動マーカー
// ============================================================

function setupHighlightObserver() {
    if (highlightObserver) {
        highlightObserver.disconnect();
        highlightObserver = null;
    }

    const markers = document.querySelectorAll(
        '#detail-text .red-marker, #detail-text .highlight-marker'
    );

    if (markers.length === 0) return;

    if (!('IntersectionObserver' in window)) {
        markers.forEach(function (marker) {
            marker.classList.add('active');
        });
        return;
    }

    highlightObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    highlightObserver.unobserve(entry.target);
                }
            });
        },
        {
            root: null,
            rootMargin: '-15% 0px -20% 0px',
            threshold: 0
        }
    );

    markers.forEach(function (marker) {
        highlightObserver.observe(marker);
    });
}

// ============================================================
// 💡 19. クイズ開始
// ============================================================

function startQuizGame() {
    if (!currentQuizData || currentQuizData.length === 0) {
        alert('この記事にはクイズが登録されていません。');
        return;
    }

    currentQuestionIndex = 0;
    quizScore = 0;

    document.getElementById('quiz-start-view').style.display = 'none';
    document.getElementById('quiz-result-view').style.display = 'none';
    document.getElementById('quiz-game-view').style.display = 'block';

    showQuestion();
}

// ============================================================
// 🔄 20. クイズをもう一度
// ============================================================

function restartQuizGame() {
    closeCelebration();
    startQuizGame();
}

// ============================================================
// ❓ 21. 問題を表示
// ============================================================

function showQuestion() {
    const currentQuiz = currentQuizData[currentQuestionIndex];

    if (!currentQuiz) {
        endQuizGame();
        return;
    }

    document.getElementById('quiz-progress').textContent =
        `第 ${currentQuestionIndex + 1} 問 / 全 ${currentQuizData.length} 問`;

    document.getElementById('quiz-question').textContent =
        currentQuiz.question;

    const feedback = document.getElementById('quiz-feedback');
    feedback.textContent = '';
    feedback.className = 'quiz-feedback';

    const container = document.getElementById('quiz-options-container');
    container.innerHTML = '';

    currentQuiz.choices.forEach(function (choice, index) {
        const button = document.createElement('button');

        button.type = 'button';
        button.className = 'more-btn';
        button.textContent = choice;

        button.addEventListener('click', function () {
            checkAnswer(index);
        });

        container.appendChild(button);
    });
}

// ============================================================
// ⭕❌ 22. 答え合わせ
// ============================================================

function checkAnswer(selectedIndex) {
    const currentQuiz = currentQuizData[currentQuestionIndex];

    if (!currentQuiz) return;

    const buttons = document.querySelectorAll(
        '#quiz-options-container .more-btn'
    );

    if ([...buttons].some(function (button) {
        return button.disabled;
    })) {
        return;
    }

    buttons.forEach(function (button) {
        button.disabled = true;
        button.style.opacity = '0.7';
    });

    if (selectedIndex === currentQuiz.correctIndex) {
        quizScore++;
        playSound('correct');
        showQuizFeedback('⭕ 正解！', 'correct');
    } else {
        playSound('wrong');
        showQuizFeedback('❌ 不正解！', 'wrong');
    }

    setTimeout(function () {
        currentQuestionIndex++;

        if (currentQuestionIndex < currentQuizData.length) {
            showQuestion();
        } else {
            endQuizGame();
        }
    }, 900);
}

// ============================================================
// ⭕❌ 23. 正誤メッセージ
// ============================================================

function showQuizFeedback(message, type) {
    const feedback = document.getElementById('quiz-feedback');

    feedback.textContent = message;
    feedback.className = 'quiz-feedback show ' + type;
}

// ============================================================
// 🏁 24. クイズ終了
// ============================================================

function endQuizGame() {
    document.getElementById('quiz-game-view').style.display = 'none';
    document.getElementById('quiz-result-view').style.display = 'block';

    document.getElementById('quiz-result-score').textContent =
        `${quizScore} / ${currentQuizData.length}`;

    if (
        currentQuizData.length > 0 &&
        quizScore === currentQuizData.length
    ) {
        document.getElementById('quiz-result-icon').textContent = '🎉';

        document.getElementById('quiz-result-title').textContent =
            '全問正解！おめでとう！';

        document.getElementById('celebration-overlay').style.display = 'flex';

        for (let i = 0; i < 30; i++) {
            createParticle();
        }
    } else {
        document.getElementById('quiz-result-icon').textContent = '📝';
        document.getElementById('quiz-result-title').textContent =
            'クイズ終了！';
    }
}

// ============================================================
// 🎊 25. 紙吹雪
// ============================================================

function createParticle() {
    const overlay = document.getElementById('celebration-overlay');

    if (!overlay) return;

    const particle = document.createElement('div');
    particle.className = 'particle';

    const symbols = ['🌸', '✨', '🎉', '🌟', '🎨'];

    particle.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    particle.style.left = '50%';
    particle.style.top = '50%';

    const x = (Math.random() - 0.5) * window.innerWidth * 0.8;
    const y = (Math.random() - 0.5) * window.innerHeight * 0.8;

    particle.style.setProperty('--x', `${x}px`);
    particle.style.setProperty('--y', `${y}px`);

    overlay.appendChild(particle);

    setTimeout(function () {
        particle.remove();
    }, 1500);
}

// ============================================================
// 🎉 26. お祝い画面を閉じる
// ============================================================

function closeCelebration() {
    const overlay = document.getElementById('celebration-overlay');

    if (!overlay) return;

    overlay.style.display = 'none';

    overlay.querySelectorAll('.particle').forEach(function (particle) {
        particle.remove();
    });
}

// ============================================================
// ⭐ 27. 星を生成
// ============================================================

function createStars() {
    const container = document.getElementById('stars');

    if (!container) return;

    container.innerHTML = '';

    const starCount = window.innerWidth < 600 ? 100 : 180;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');

        star.className = 'space-star';

        if (Math.random() < 0.15) {
            star.classList.add('big');
        }

        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';

        star.style.setProperty(
            '--twinkle-time',
            (2 + Math.random() * 4) + 's'
        );

        star.style.animationDelay = (-Math.random() * 5) + 's';

        fragment.appendChild(star);
    }

    container.appendChild(fragment);
}

// ============================================================
// 🌠 28. 流れ星を生成
// ============================================================

function createShootingStar() {
    if (document.body.classList.contains('article-view')) return;

    const container = document.getElementById('shooting-stars');

    if (!container) return;

    const star = document.createElement('div');
    star.className = 'shooting-star';

    star.style.left = (20 + Math.random() * 100) + '%';
    star.style.top = Math.random() * 70 + '%';

    container.appendChild(star);

    setTimeout(function () {
        star.remove();
    }, 1800);
}


/* =========================================
   🔭 記事タイトル検索
========================================= */

let currentSearchQuery = '';

function normalizeSearchText(text) {
    return String(text || '')
        .normalize('NFKC')
        .trim()
        .toLocaleLowerCase('ja');
}

function searchArticles(query) {
    currentSearchQuery = query.trim();

    const normalizedQuery = normalizeSearchText(query);

    // 空欄なら通常の並び順に戻す
    if (!normalizedQuery) {
        sortArticles('new', false);
        updateSearchMessage('');
        return;
    }

    // タイトルだけを検索対象にする
    const results = articlesData.filter(function (article) {
        return normalizeSearchText(article.title)
            .includes(normalizedQuery);
    });

    // お気に入りのみの表示中なら、その条件も維持
    const filteredResults = showingFavoritesOnly
        ? results.filter(function (article) {
            return isFavorite(article.id);
        })
        : results;

    renderArticlesList(filteredResults);

    updateSearchMessage(
        '「' + currentSearchQuery + '」の検索結果：' +
        filteredResults.length + '件'
    );

    if (filteredResults.length === 0) {
        const articleList = document.getElementById('article-list');

        if (articleList) {
            const empty = document.createElement('div');
            empty.className = 'search-empty';

            const title = document.createElement('h3');
            title.textContent = '🌌 該当する記事が見つかりません';

            const message = document.createElement('p');
            message.textContent =
                '記事のタイトルを変えて、もう一度探索してみてください。';

            empty.appendChild(title);
            empty.appendChild(message);
            articleList.appendChild(empty);
        }
    }
}

function updateSearchMessage(message) {
    const element = document.getElementById('article-search-message');

    if (element) {
        element.textContent = message;
    }
}

function setupArticleSearch() {
    const form = document.getElementById('article-search-form');
    const input = document.getElementById('article-search-input');
    const clearButton = document.getElementById('article-search-clear');

    if (!form || !input || !clearButton) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        playSound('click');
        searchArticles(input.value);
    });

    clearButton.addEventListener('click', function () {
        input.value = '';
        currentSearchQuery = '';

        clearButton.hidden = true;

        updateSearchMessage('');
        sortArticles('new', false);
        input.focus();
    });

    input.addEventListener('input', function () {
        clearButton.hidden = input.value.length === 0;

        if (input.value.trim() === '') {
            currentSearchQuery = '';
            updateSearchMessage('');
            sortArticles('new', false);
        }
    });
}


// ============================================================
// 🚀 29. 最初の起動
// ============================================================

window.addEventListener('load', function () {
    setupArticleSearch();
    loadArticles();

    createStars();

    setInterval(function () {
        if (
            !document.hidden &&
            !document.body.classList.contains('article-view')
        ) {
            createShootingStar();
        }
    }, 5000);
});