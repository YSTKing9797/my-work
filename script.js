// ============================================================
// 🌌 articles.json から記事を読み込む
// ============================================================
let articlesData = [];

const fallbackArticlesData = [
    {
        id: 1,
        episode: 1,
        title: '地球の文明レベルは「0.7」しかない？',
        summary: '地球の文明は「0.7」。文明レベルをどうやって数値化したかが面白いのでご紹介します。',
        badge: '宇宙文明',
        badgeColor: '#805ad5',
        date: '2026-09-30',
        views: 0,
        text: '<p><span class="red-marker">★地球の文明レベルは0.7</span></p><p>文明レベルは3段階中で表されることが多く、拡張案として7段階の見方もあります。これは宇宙にいる高度な文明を分類するためのアイデアです。</p><p>地球では、利用できるエネルギーが星全体の総量に対してどれほど大きいかをもとに、文明レベルを数値化します。これは非常に興味深い指標です。</p><p>人類はまだ惑星全体で使えるエネルギーを十分に活用できていません。そのため、地球の文明レベルは1未満と見なされます。</p><p><span class="red-marker">★タイプI〜III</span></p><p><strong>タイプI：</strong>惑星全体で使えるエネルギーをほぼすべて使い、自然現象をコントロールできる段階。</p><p><strong>タイプII：</strong>恒星から出るエネルギー全体を利用できる段階。ダイソン球のような巨大構造が想定されます。</p><p><strong>タイプIII：</strong>銀河系全体のエネルギーを利用・制御できる段階。</p><p>現時点で地球は「0.7」に近いとされ、まだまだタイプIには達していません。</p>',
        quiz: [
            { question: '現在の地球の文明レベルはどのように表されますか？', choices: ['約1.0', '約0.7', '約1.7'], correctIndex: 1 },
            { question: '文明レベルの目安として重視されるのは何ですか？', choices: ['惑星が使えるエネルギーの総量', '天気の予報精度', '人類の人口数'], correctIndex: 0 },
            { question: 'タイプIの文明はどのような段階ですか？', choices: ['惑星全体のエネルギーを使いこなす段階', '一つの恒星だけを使う段階', '銀河系を超える段階'], correctIndex: 0 }
        ]
    },
    {
        id: 2,
        episode: 2,
        title: '何百億キロ彼方を飛び続ける「ボイジャー」',
        summary: '人類が宇宙へ放ったメッセージ。ボイジャーは今も地球から遠く離れて飛び続けています。',
        badge: '宇宙探査',
        badgeColor: '#3182ce',
        date: '2026-10-01',
        views: 0,
        text: '<p>人類が宇宙へ放った「手紙」があります。それがボイジャーです。</p><p>1977年に打ち上げられたボイジャー1号と2号は、今も地球から何百億キロも離れた場所を飛び続けています。</p><p>ボイジャーは古いコンピューターが使われていて、総メモリ容量もわずかです。しかし、そこで宇宙の知的生命体へのメッセージが作られています。</p><p>金メッキされたレコードには、地球の写真や音声、挨拶が記録されています。宇宙にいる誰かが見つけたときのためのタイムカプセルです。</p><p>長年の宇宙線や長時間運用による劣化が原因で、ボイジャーは何度もトラブルに見舞われました。それでも、今なお通信を続けているのは驚きです。</p>',
        quiz: [
            { question: 'ボイジャー1号と2号が打ち上げられた年はいつですか？', choices: ['1969年', '1977年', '1984年'], correctIndex: 1 },
            { question: 'ボイジャーが宇宙に残したものとして説明されているのは何ですか？', choices: ['ゴールデンレコード', '巨大ロケット', '宇宙港'], correctIndex: 0 },
            { question: 'ボイジャーの大きな課題は何ですか？', choices: ['長年の劣化と宇宙線の影響', '重力に引き戻されること', '地球に落ちること'], correctIndex: 0 }
        ]
    }
];

async function loadArticles() {
    try {
        const response = await fetch('articles.json', { cache: 'no-store' });
        if (!response.ok) {
            throw new Error('articles.json read failed');
        }
        const data = await response.json();
        const loaded = data && Array.isArray(data.articles) ? data.articles : (Array.isArray(data) ? data : null);
        if (loaded) {
            articlesData = loaded;
            return;
        }
        throw new Error('articles.json format is invalid');
    } catch (error) {
        console.warn('articles.json を読めなかったため、ローカルのフォールバックを使用します。', error);
        articlesData = fallbackArticlesData;
    }
}

let activeArticleId = null;
let currentQuestionIndex = 0;
let quizScore = 0;
let isSoundOn = true;
let currentQuizData = [];
let highlightObserver = null;

function playSound(type) {
    if (!isSoundOn) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    } else if (type === 'correct') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, ctx.currentTime);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
    }
}

function changeTextSize(size) {
    document.body.classList.remove('text-small', 'text-normal', 'text-large');
    document.body.classList.add('text-' + size);

    const buttons = document.querySelectorAll('.setting-row .setting-btn');
    const textButtons = [buttons[0], buttons[1], buttons[2]];
    textButtons.forEach(function (btn) {
        if (btn) btn.classList.remove('active');
    });

    if (size === 'small' && textButtons[0]) textButtons[0].classList.add('active');
    if (size === 'normal' && textButtons[1]) textButtons[1].classList.add('active');
    if (size === 'large' && textButtons[2]) textButtons[2].classList.add('active');
}

function setSound(status) {
    isSoundOn = status;
    document.getElementById('sound-on-btn').classList.toggle('active', status);
    document.getElementById('sound-off-btn').classList.toggle('active', !status);
    if (isSoundOn) playSound('click');
}

function sortArticles(type) {
    let sorted = [...articlesData];
    if (type === 'new') {
        sorted.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        });
    } else if (type === 'old') {
        sorted.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date);
        });
    }
    renderArticlesList(sorted);
    toggleSidebar();
}

function getFilteredArticles() {
    const input = document.getElementById('article-search');
    const keyword = (input ? input.value : '').trim().toLowerCase();
    if (!keyword) {
        return [...articlesData].sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        });
    }

    return articlesData.filter(function (article) {
        const haystack = [
            article.title,
            article.summary,
            article.text || '',
            article.badge || '',
            article.episode != null ? `第${article.episode}話` : ''
        ].join(' ').toLowerCase();
        return haystack.includes(keyword);
    });
}

function renderArticlesList(list) {
    const mainPage = document.getElementById('main-page');
    mainPage.innerHTML = '';

    if (!list || list.length === 0) {
        mainPage.innerHTML = `
            <div class="empty-result-box">
                <p>該当する記事が見つかりませんでした。</p>
                <button class="more-btn" onclick="document.getElementById('article-search').value=''; renderArticlesList(getFilteredArticles());">検索をクリア</button>
            </div>
        `;
        return;
    }

    list.forEach(function (article) {
        const box = document.createElement('div');
        box.classList.add('zatugaku-box');
        box.innerHTML = `
            <div class="article-top">
                <div class="article-info-area">
                    <div class="episode-label">第${article.episode}話</div>
                    <h2>${article.title}</h2>
                    <p class="article-summary">${article.summary}</p>
                    <div class="btn-wrapper">
                        <button class="more-btn" onclick="playSound('click'); goToDetailPage(${article.id});">続きを見る</button>
                    </div>
                </div>
            </div>
        `;
        mainPage.appendChild(box);
    });
}

function handleSearchInput() {
    renderArticlesList(getFilteredArticles());
}

function toggleSidebar() {
    document.getElementById('sidebar-menu').classList.toggle('open');
    document.getElementById('sidebar-overlay').classList.toggle('open');
}

function goToDetailPage(id) {
    activeArticleId = id;
    const article = articlesData.find(function (a) {
        return a.id === id;
    });

    if (!article) {
        console.error('記事が見つかりません。ID:', id);
        return;
    }

    document.getElementById('detail-episode').innerText = `第${article.episode}話`;
    document.getElementById('detail-title').innerText = article.title;
    document.getElementById('detail-text').innerHTML = article.text || '';

    currentQuizData = article.quiz || [];
    document.getElementById('quiz-start-view').style.display = 'block';
    document.getElementById('quiz-game-view').style.display = 'none';
    document.getElementById('quiz-result-view').style.display = 'none';
    document.getElementById('quiz-feedback').innerText = '';
    document.getElementById('quiz-feedback').className = 'quiz-feedback';

    document.getElementById('main-page').style.display = 'none';
    document.getElementById('detail-page').style.display = 'block';
    document.body.classList.add('article-view');
    window.scrollTo({ top: 0, behavior: 'instant' });

    resetHighlightMarkers();
    setTimeout(function () {
        setupHighlightObserver();
    }, 100);
}

function goToMainPage() {
    document.getElementById('detail-page').style.display = 'none';
    document.getElementById('main-page').style.display = 'block';
    document.body.classList.remove('article-view');
    resetHighlightMarkers();

    if (highlightObserver) {
        highlightObserver.disconnect();
        highlightObserver = null;
    }

    currentQuizData = [];
    currentQuestionIndex = 0;
    quizScore = 0;
    window.scrollTo({ top: 0, behavior: 'instant' });
}

function resetHighlightMarkers() {
    const markers = document.querySelectorAll('.red-marker, .highlight-marker');
    markers.forEach(function (marker) {
        marker.classList.remove('active');
    });
}

function setupHighlightObserver() {
    if (highlightObserver) {
        highlightObserver.disconnect();
        highlightObserver = null;
    }

    const markers = document.querySelectorAll('#detail-text .red-marker, #detail-text .highlight-marker');
    if (markers.length === 0) return;

    highlightObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        root: null,
        rootMargin: '-15% 0px -20% 0px',
        threshold: 0
    });

    markers.forEach(function (marker) {
        highlightObserver.observe(marker);
    });
}

function startQuizGame() {
    if (!currentQuizData || currentQuizData.length === 0) {
        alert('このページにはクイズが登録されていません。');
        return;
    }

    currentQuestionIndex = 0;
    quizScore = 0;
    document.getElementById('quiz-start-view').style.display = 'none';
    document.getElementById('quiz-result-view').style.display = 'none';
    document.getElementById('quiz-game-view').style.display = 'block';
    showQuestion();
}

function restartQuizGame() { startQuizGame(); }

function showQuestion() {
    const currentQuiz = currentQuizData[currentQuestionIndex];
    if (!currentQuiz) {
        endQuizGame();
        return;
    }

    document.getElementById('quiz-progress').innerText = `第 ${currentQuestionIndex + 1} 問 / 全 ${currentQuizData.length} 問`;
    document.getElementById('quiz-question').innerText = currentQuiz.question;

    const feedback = document.getElementById('quiz-feedback');
    feedback.innerText = '';
    feedback.className = 'quiz-feedback';

    const container = document.getElementById('quiz-options-container');
    container.innerHTML = '';

    currentQuiz.choices.forEach(function (choice, index) {
        const btn = document.createElement('button');
        btn.className = 'more-btn';
        btn.innerText = choice;
        btn.onclick = function () {
            checkAnswer(index);
        };
        container.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuiz = currentQuizData[currentQuestionIndex];
    if (!currentQuiz) return;

    const buttons = document.querySelectorAll('#quiz-options-container .more-btn');
    buttons.forEach(function (btn) {
        btn.disabled = true;
        btn.style.opacity = '0.7';
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

function showQuizFeedback(message, type) {
    const feedback = document.getElementById('quiz-feedback');
    feedback.innerText = message;
    feedback.className = 'quiz-feedback show ' + type;
}

function endQuizGame() {
    document.getElementById('quiz-game-view').style.display = 'none';
    document.getElementById('quiz-result-view').style.display = 'block';
    document.getElementById('quiz-result-score').innerText = `${quizScore} / ${currentQuizData.length}`;

    if (quizScore === currentQuizData.length) {
        document.getElementById('quiz-result-icon').innerText = '🎉';
        document.getElementById('quiz-result-title').innerText = '全問正解！おめでとう！';
        document.getElementById('celebration-overlay').style.display = 'flex';
        for (let i = 0; i < 30; i++) {
            createParticle();
        }
    } else {
        document.getElementById('quiz-result-icon').innerText = '📝';
        document.getElementById('quiz-result-title').innerText = 'クイズ終了！';
    }
}

function createParticle() {
    const overlay = document.getElementById('celebration-overlay');
    const p = document.createElement('div');
    p.className = 'particle';
    p.innerText = ['🌸', '✨', '🎉', '🌟', '🎨'][Math.floor(Math.random() * 5)];
    p.style.left = '50%';
    p.style.top = '50%';

    const x = (Math.random() - 0.5) * window.innerWidth * 0.8;
    const y = (Math.random() - 0.5) * window.innerHeight * 0.8;
    p.style.setProperty('--x', `${x}px`);
    p.style.setProperty('--y', `${y}px`);

    overlay.appendChild(p);
    setTimeout(function () {
        p.remove();
    }, 1500);
}

function closeCelebration() {
    document.getElementById('celebration-overlay').style.display = 'none';
    const particles = document.querySelectorAll('.particle');
    particles.forEach(function (p) {
        p.remove();
    });
}

function createStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;
    starsContainer.innerHTML = '';
    const starCount = window.innerWidth < 600 ? 100 : 180;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'space-star';
        if (Math.random() < 0.15) star.classList.add('big');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--twinkle-time', (2 + Math.random() * 4) + 's');
        star.style.animationDelay = (-Math.random() * 5) + 's';
        starsContainer.appendChild(star);
    }
}

function createShootingStar() {
    const container = document.getElementById('shooting-stars');
    if (!container) return;

    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.left = (20 + Math.random() * 100) + '%';
    star.style.top = Math.random() * 70 + '%';
    container.appendChild(star);

    setTimeout(function () { star.remove(); }, 1800);
}

window.addEventListener('load', async function () {
    await loadArticles();
    renderArticlesList(getFilteredArticles());
    createStars();

    const searchInput = document.getElementById('article-search');
    const clearButton = document.getElementById('clear-search-btn');

    if (searchInput) {
        searchInput.addEventListener('input', handleSearchInput);
    }

    if (clearButton) {
        clearButton.addEventListener('click', function () {
            if (searchInput) {
                searchInput.value = '';
                renderArticlesList(getFilteredArticles());
            }
        });
    }

    setInterval(function () {
        if (!document.body.classList.contains('article-view')) {
            createShootingStar();
        }
    }, 3000 + Math.random() * 4000);
});

window.addEventListener('resize', function () {
    createStars();
});
