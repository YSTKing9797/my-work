// ============================================================
// 🌌 1. 記事のデータベース
// ============================================================

let articlesData = [];


// ============================================================
// 💡 2. 状態管理
// ============================================================

let activeArticleId = null;

let currentQuestionIndex = 0;

let quizScore = 0;

let isSoundOn = true;

let currentQuizData = [];

let highlightObserver = null;

let _prevFocus = null;


// ============================================================
// 🔊 効果音
// ============================================================

function playSound(type) {

    if (!isSoundOn) {
        return;
    }

    const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;

    if (!AudioContext) {
        return;
    }

    // AudioContext を使い回すための簡易実装
    if (!window._appAudioCtx) {
        window._appAudioCtx = new AudioContext();
    }

    const ctx = window._appAudioCtx;

    const osc = ctx.createOscillator();

    const gain = ctx.createGain();

    osc.connect(gain);

    gain.connect(ctx.destination);


    if (type === 'click') {

        osc.type = 'sine';

        osc.frequency.setValueAtTime(
            600,
            ctx.currentTime
        );

        gain.gain.setValueAtTime(
            0.1,
            ctx.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.01,
            ctx.currentTime + 0.1
        );

        osc.start();

        osc.stop(
            ctx.currentTime + 0.1
        );

    }


    else if (type === 'correct') {

        osc.type = 'triangle';

        osc.frequency.setValueAtTime(
            523.25,
            ctx.currentTime
        );

        osc.frequency.setValueAtTime(
            659.25,
            ctx.currentTime + 0.1
        );

        gain.gain.setValueAtTime(
            0.15,
            ctx.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.01,
            ctx.currentTime + 0.3
        );

        osc.start();

        osc.stop(
            ctx.currentTime + 0.3
        );

    }


    else if (type === 'wrong') {

        osc.type = 'sawtooth';

        osc.frequency.setValueAtTime(
            150,
            ctx.currentTime
        );

        gain.gain.setValueAtTime(
            0.15,
            ctx.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.01,
            ctx.currentTime + 0.4
        );

        osc.start();

        osc.stop(
            ctx.currentTime + 0.4
        );

    }

}


// ============================================================
// 🔤 文字サイズ変更
// ============================================================

function changeTextSize(size) {

    document.body.classList.remove(
        'text-small',
        'text-normal',
        'text-large'
    );

    document.body.classList.add(
        'text-' + size
    );


    const buttons =
        document.querySelectorAll(
            '.setting-row .setting-btn'
        );


    const textButtons = [
        buttons[0],
        buttons[1],
        buttons[2]
    ];


    textButtons.forEach(function(btn) {

        if (btn) {
            btn.classList.remove('active');
        }

    });


    if (size === 'small' && textButtons[0]) {
        textButtons[0].classList.add('active');
    }

    if (size === 'normal' && textButtons[1]) {
        textButtons[1].classList.add('active');
    }

    if (size === 'large' && textButtons[2]) {
        textButtons[2].classList.add('active');
    }

    try {
        localStorage.setItem('textSize', size);
    }
    catch (e) {
        // noop
    }

}


// ============================================================
// 🔊 効果音ON/OFF
// ============================================================

function setSound(status) {

    isSoundOn = status;


    document
        .getElementById('sound-on-btn')
        .classList.toggle(
            'active',
            status
        );


    document
        .getElementById('sound-off-btn')
        .classList.toggle(
            'active',
            !status
        );

    try {
        localStorage.setItem('soundOn', status ? '1' : '0');
    }
    catch (e) {
        // noop
    }

    if (isSoundOn) {
        playSound('click');
    }

}


// ============================================================
// 🔄 記事並び替え
// ============================================================

function sortArticles(type) {

    let sorted =
        [...articlesData];


    if (type === 'new') {

        sorted.sort(
            function(a, b) {

                return new Date(b.date) -
                       new Date(a.date);

            }
        );

    }


    else if (type === 'old') {

        sorted.sort(
            function(a, b) {

                return new Date(a.date) -
                       new Date(b.date);

            }
        );

    }


    renderArticlesList(sorted);

    toggleSidebar();

}


// ============================================================
// 📦 記事一覧を作成
// ============================================================

function renderArticlesList(list) {

    const mainPage =
        document.getElementById('main-page');

    mainPage.innerHTML = '';


    list.forEach(function(article) {

        const box =
            document.createElement('div');


        box.classList.add(
            'zatugaku-box'
        );


        box.innerHTML = `

            <div class="article-top">

                <div class="article-info-area">

                    <div class="episode-label">
                        第${article.episode}話
                    </div>

                    <h2>
                        ${article.title}
                    </h2>


                    <p class="article-summary">
                        ${article.summary}
                    </p>


                    <div class="btn-wrapper">

                        <button
                            class="more-btn"
                            onclick="playSound('click'); goToDetailPage(${article.id});"
                        >
                            続きを見る
                        </button>

                    </div>

                </div>

            </div>

        `;


        mainPage.appendChild(box);

    });

}


// ============================================================
// ☰ サイドバー
// ============================================================

function toggleSidebar() {

    const sidebar = document.getElementById('sidebar-menu');
    const overlay = document.getElementById('sidebar-overlay');
    const menuBtn = document.getElementById('menu-trigger');
    const closeBtn = document.getElementById('close-sidebar-btn');

    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');

    const open = sidebar.classList.contains('open');

    // aria 管理
    if (menuBtn) menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (sidebar) sidebar.setAttribute('aria-hidden', open ? 'false' : 'true');

    if (open) {
        // フォーカス管理
        _prevFocus = document.activeElement;
        // 最初に閉じるボタンへフォーカス
        if (closeBtn) closeBtn.focus();
        // Esc で閉じる
    }
    else {
        // 閉じたら前の要素へフォーカスを戻す
        try {
            if (_prevFocus && typeof _prevFocus.focus === 'function') _prevFocus.focus();
        }
        catch (e) {
            // noop
        }
        _prevFocus = null;
    }

}

// Esc キーでサイドバーを閉じる
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const sidebar = document.getElementById('sidebar-menu');
        if (sidebar && sidebar.classList.contains('open')) {
            toggleSidebar();
        }
    }
});


// ============================================================
// 📖 詳細ページを開く
// ============================================================

function goToDetailPage(id) {

    activeArticleId = id;


    const article =
        articlesData.find(
            function(a) {
                return a.id === id;
            }
        );


    if (!article) {

        console.error(
            '記事が見つかりません。ID:',
            id
        );

        return;

    }


    // --------------------------------------------
    // 話数
    // --------------------------------------------

    document
        .getElementById('detail-episode')
        .innerText =
        `第${article.episode}話`;


    // --------------------------------------------
    // タイトル
    // --------------------------------------------

    document
        .getElementById('detail-title')
        .innerText =
        article.title;


    // --------------------------------------------
    // 本文（サニタイズして挿入）
    // --------------------------------------------
    const detailTextEl = document.getElementById('detail-text');
    if (typeof DOMPurify !== 'undefined') {
        detailTextEl.innerHTML = DOMPurify.sanitize(article.text);
    }
    else {
        // フォールバックでタグをエスケープして表示
        detailTextEl.textContent = article.text.replace(/<[^>]*>/g, '');
    }


    // --------------------------------------------
    // クイズ
    // --------------------------------------------

    currentQuizData =
        article.quiz || [];


    document
        .getElementById('quiz-start-view')
        .style.display =
        'block';


    document
        .getElementById('quiz-game-view')
        .style.display =
        'none';


    document
        .getElementById('quiz-result-view')
        .style.display =
        'none';


    document
        .getElementById('quiz-feedback')
        .innerText =
        '';


    document
        .getElementById('quiz-feedback')
        .className =
        'quiz-feedback';


    // --------------------------------------------
    // ページ切り替え
    // --------------------------------------------

    document
        .getElementById('main-page')
        .style.display =
        'none';


    document
        .getElementById('detail-page')
        .style.display =
        'block';


    // --------------------------------------------
    // 記事ページでは宇宙背景を消す
    // --------------------------------------------

    document.body.classList.add(
        'article-view'
    );


    // --------------------------------------------
    // ページ上部へ
    // --------------------------------------------

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });


    // --------------------------------------------
    // マーカーをリセット
    // --------------------------------------------

    resetHighlightMarkers();


    // --------------------------------------------
    // 少し待ってから監視開始
    // --------------------------------------------

    setTimeout(function() {

        setupHighlightObserver();

    }, 100);

}


// ============================================================
// ⬅️ 一覧に戻る
// ============================================================

function goToMainPage() {

    document
        .getElementById('detail-page')
        .style.display =
        'none';


    document
        .getElementById('main-page')
        .style.display =
        'block';


    document.body.classList.remove(
        'article-view'
    );


    resetHighlightMarkers();


    if (highlightObserver) {

        highlightObserver.disconnect();

        highlightObserver = null;

    }


    currentQuizData = [];

    currentQuestionIndex = 0;

    quizScore = 0;


    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}


// ============================================================
// 🖍️ マーカーをリセット
// ============================================================

function resetHighlightMarkers() {

    const markers =
        document.querySelectorAll(
            '.red-marker, .highlight-marker'
        );


    markers.forEach(function(marker) {

        marker.classList.remove(
            'active'
        );

    });

}


// ============================================================
// 🖍️ スクロール連動マーカー
// ============================================================

function setupHighlightObserver() {

    if (highlightObserver) {

        highlightObserver.disconnect();

        highlightObserver = null;

    }


    const markers =
        document.querySelectorAll(
            '#detail-text .red-marker, #detail-text .highlight-marker'
        );


    if (markers.length === 0) {
        return;
    }


    highlightObserver =
        new IntersectionObserver(

            function(entries) {

                entries.forEach(function(entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            'active'
                        );

                    }

                });

            },

            {
                root: null,

                rootMargin:
                    '-15% 0px -20% 0px',

                threshold: 0
            }

        );


    markers.forEach(function(marker) {

        highlightObserver.observe(
            marker
        );

    });

}


// ============================================================
// 💡 クイズ開始
// ============================================================

function startQuizGame() {

    if (
        !currentQuizData ||
        currentQuizData.length === 0
    ) {

        alert(
            'このページにはクイズが登録されていません。'
        );

        return;

    }


    currentQuestionIndex = 0;

    quizScore = 0;


    document
        .getElementById('quiz-start-view')
        .style.display =
        'none';


    document
        .getElementById('quiz-result-view')
        .style.display =
        'none';


    document
        .getElementById('quiz-game-view')
        .style.display =
        'block';


    showQuestion();

}


// ============================================================
// 🔄 クイズをもう一度
// ============================================================

function restartQuizGame() {

    startQuizGame();

}


// ============================================================
// ❓ 問題を表示
// ============================================================

function showQuestion() {

    const currentQuiz =
        currentQuizData[
            currentQuestionIndex
        ];


    if (!currentQuiz) {

        endQuizGame();

        return;

    }


    document
        .getElementById('quiz-progress')
        .innerText =
        `第 ${currentQuestionIndex + 1} 問 / 全 ${currentQuizData.length} 問`;


    document
        .getElementById('quiz-question')
        .innerText =
        currentQuiz.question;


    const feedback =
        document.getElementById(
            'quiz-feedback'
        );


    feedback.innerText = '';

    feedback.className =
        'quiz-feedback';


    const container =
        document.getElementById(
            'quiz-options-container'
        );


    container.innerHTML = '';


    currentQuiz.choices.forEach(
        function(choice, index) {

            const btn =
                document.createElement(
                    'button'
                );


            btn.className =
                'more-btn';


            btn.innerText =
                choice;


            btn.onclick =
                function() {

                    checkAnswer(index);

                };


            container.appendChild(
                btn
            );

        }
    );

}


// ============================================================
// ⭕❌ 答え合わせ
// ============================================================

function checkAnswer(selectedIndex) {

    const currentQuiz =
        currentQuizData[
            currentQuestionIndex
        ];


    if (!currentQuiz) {
        return;
    }


    const buttons =
        document.querySelectorAll(
            '#quiz-options-container .more-btn'
        );


    buttons.forEach(function(btn) {

        btn.disabled = true;

        btn.style.opacity = '0.7';

    });


    if (
        selectedIndex ===
        currentQuiz.correctIndex
    ) {

        quizScore++;

        playSound('correct');


        showQuizFeedback(
            '⭕ 正解！',
            'correct'
        );

    }


    else {

        playSound('wrong');


        showQuizFeedback(
            '❌ 不正解！',
            'wrong'
        );

    }


    setTimeout(function() {

        currentQuestionIndex++;


        if (
            currentQuestionIndex <
            currentQuizData.length
        ) {

            showQuestion();

        }

        else {

            endQuizGame();

        }

    }, 900);

}


// ============================================================
// ⭕❌ 正誤メッセージ表示
// ============================================================

function showQuizFeedback(
    message,
    type
) {

    const feedback =
        document.getElementById(
            'quiz-feedback'
        );


    feedback.innerText =
        message;


    feedback.className =
        'quiz-feedback show ' +
        type;

}


// ============================================================
// 🏁 クイズ終了
// ============================================================

function endQuizGame() {

    document
        .getElementById('quiz-game-view')
        .style.display =
        'none';


    document
        .getElementById('quiz-result-view')
        .style.display =
        'block';


    document
        .getElementById('quiz-result-score')
        .innerText =
        `${quizScore} / ${currentQuizData.length}`;


    if (
        quizScore ===
        currentQuizData.length
    ) {

        document
            .getElementById('quiz-result-icon')
            .innerText =
            '🎉';


        document
            .getElementById('quiz-result-title')
            .innerText =
            '全問正解！おめでとう！';


        document
            .getElementById(
                'celebration-overlay'
            )
            .style.display =
            'flex';


        for (
            let i = 0;
            i < 30;
            i++
        ) {

            createParticle();

        }

    }


    else {

        document
            .getElementById('quiz-result-icon')
            .innerText =
            '📝';


        document
            .getElementById('quiz-result-title')
            .innerText =
            'クイズ終了！';

    }

}


// ============================================================
// 🎊 紙吹雪生成
// ============================================================

function createParticle() {

    const overlay =
        document.getElementById(
            'celebration-overlay'
        );


    const p =
        document.createElement(
            'div'
        );


    p.className =
        'particle';


    p.innerText =
        [
            '🌸',
            '✨',
            '🎉',
            '🌟',
            '🎨'
        ][
            Math.floor(
                Math.random() * 5
            )
        ];


    p.style.left =
        '50%';


    p.style.top =
        '50%';


    const x =
        (Math.random() - 0.5) *
        window.innerWidth *
        0.8;


    const y =
        (Math.random() - 0.5) *
        window.innerHeight *
        0.8;


    p.style.setProperty(
        '--x',
        `${x}px`
    );


    p.style.setProperty(
        '--y',
        `${y}px`
    );


    overlay.appendChild(
        p
    );


    setTimeout(
        function() {

            p.remove();

        },
        1500
    );

}


// ============================================================
// 🎉 お祝い画面を閉じる
// ============================================================

function closeCelebration() {

    document
        .getElementById(
            'celebration-overlay'
        )
        .style.display =
        'none';


    const particles =
        document.querySelectorAll(
            '.particle'
        );


    particles.forEach(
        function(p) {

            p.remove();

        }
    );

}


// ============================================================
// 🌟 Canvas ベースの星を生成（既存）
// ============================================================

let starsCanvas, starsCtx;
let starParticles = [];
let shootingStars = [];
let starAnimationId = null;
const MAX_STARS = 220;
const MAX_SHOOTING = 3;

function initStarsCanvas() {
    starsCanvas = document.getElementById('stars-canvas');
    if (!starsCanvas) return;

    starsCtx = starsCanvas.getContext('2d');

    function resize() {
        const ratio = window.devicePixelRatio || 1;
        starsCanvas.width = Math.floor(window.innerWidth * ratio);
        starsCanvas.height = Math.floor(window.innerHeight * ratio);
        starsCanvas.style.width = window.innerWidth + 'px';
        starsCanvas.style.height = window.innerHeight + 'px';
        if (starsCtx) starsCtx.setTransform(ratio, 0, 0, ratio, 0, 0);

        // 星の数をウィンドウ幅に応じて調整
        const count = window.innerWidth < 600 ? Math.floor(MAX_STARS * 0.5) : MAX_STARS;
        if (starParticles.length === 0) {
            for (let i = 0; i < count; i++) {
                starParticles.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    r: Math.random() * 1.8 + 0.4,
                    twinkle: Math.random() * Math.PI * 2,
                    speed: 0.002 + Math.random() * 0.006,
                    isBig: Math.random() < 0.12
                });
            }
        }
    }

    resize();
    window.addEventListener('resize', resize);
}

function drawStars(timestamp) {
    if (!starsCtx) return;

    // 記事閲覧中は背景アニメを止める（読みやすさ重視）
    if (document.body.classList.contains('article-view')) {
        if (starAnimationId) {
            cancelAnimationFrame(starAnimationId);
            starAnimationId = null;
        }
        // 静的描画（1フレームだけ）
        starsCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for (let s of starParticles) {
            const a = 0.4; // 静的で薄め
            starsCtx.beginPath();
            const size = s.isBig ? s.r * 1.4 : s.r;
            starsCtx.fillStyle = `rgba(255,255,255,${a})`;
            starsCtx.arc(s.x, s.y, size, 0, Math.PI * 2);
            starsCtx.fill();
        }
        return;
    }

    const time = timestamp || performance.now();
    starsCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let s of starParticles) {
        s.twinkle += s.speed;
        const a = 0.15 + 0.85 * (0.5 + 0.5 * Math.sin(s.twinkle));
        starsCtx.beginPath();
        const size = s.isBig ? s.r * 1.6 : s.r;
        starsCtx.fillStyle = `rgba(255,255,255,${a})`;
        starsCtx.arc(s.x, s.y, size, 0, Math.PI * 2);
        starsCtx.fill();

        if (s.isBig) {
            const grad = starsCtx.createRadialGradient(s.x, s.y, 0, s.x, s.y, size * 6);
            grad.addColorStop(0, `rgba(180,220,255,${a * 0.18})`);
            grad.addColorStop(1, 'rgba(180,220,255,0)');
            starsCtx.fillStyle = grad;
            starsCtx.beginPath();
            starsCtx.arc(s.x, s.y, size * 6, 0, Math.PI * 2);
            starsCtx.fill();
        }
    }

    for (let i = shootingStars.length - 1; i >= 0; i--) {
        const sh = shootingStars[i];
        sh.x += sh.vx;
        sh.y += sh.vy;
        sh.life -= 1;
        const len = sh.len;
        starsCtx.save();
        starsCtx.globalCompositeOperation = 'lighter';
        const grd = starsCtx.createLinearGradient(sh.x, sh.y, sh.x - sh.vx * len, sh.y - sh.vy * len);
        grd.addColorStop(0, 'rgba(255,255,255,1)');
        grd.addColorStop(1, 'rgba(130,210,255,0)');
        starsCtx.strokeStyle = grd;
        starsCtx.lineWidth = 2;
        starsCtx.beginPath();
        starsCtx.moveTo(sh.x, sh.y);
        starsCtx.lineTo(sh.x - sh.vx * len, sh.y - sh.vy * len);
        starsCtx.stroke();
        starsCtx.restore();

        if (sh.life <= 0) shootingStars.splice(i, 1);
    }

    starAnimationId = requestAnimationFrame(drawStars);
}

function spawnShootingStar() {
    if (shootingStars.length >= MAX_SHOOTING) return;
    const startX = Math.random() * window.innerWidth * 0.9 + window.innerWidth * 0.05;
    const startY = Math.random() * window.innerHeight * 0.35;
    const speed = 10 + Math.random() * 18;
    const angle = (Math.PI / 180) * (200 + Math.random() * 40);
    shootingStars.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed * -1,
        vy: Math.sin(angle) * speed,
        len: 30 + Math.random() * 80,
        life: 50 + Math.floor(Math.random() * 60)
    });
}


// ============================================================
// 🌟 星を生成（旧DOM方式の関数は廃止）
// ============================================================

// ============================================================
// 🚀 最初の起動
// ============================================================

function loadSettings() {
    try {
        const textSize = localStorage.getItem('textSize') || 'normal';
        changeTextSize(textSize);
    }
    catch (e) {}

    try {
        const soundOn = localStorage.getItem('soundOn');
        if (soundOn === null) {
            setSound(true);
        }
        else {
            setSound(soundOn === '1');
        }
    }
    catch (e) {
        setSound(true);
    }
}

window.addEventListener(
    'load',
    function() {

        // 設定の復元
        loadSettings();

        // articles.json を fetch して記事を読み込む
        fetch('articles.json')
            .then(function(res) { return res.json(); })
            .then(function(data) {
                if (Array.isArray(data) && data.length > 0) {
                    articlesData = data;
                }
                else if (data && data.articles) {
                    // もし構造が { articles: [...] } の場合
                    articlesData = data.articles;
                }

                const sortedArticles =
                    [...articlesData].sort(
                        function(a, b) {

                            return new Date(b.date) -
                                   new Date(a.date);

                        }
                    );

                renderArticlesList(sortedArticles);
            })
            .catch(function(err) {
                console.warn('articles.json の読み込みに失敗しました。既存の articlesData を使用します。', err);
                const sortedArticles =
                    [...articlesData].sort(
                        function(a, b) {

                            return new Date(b.date) -
                                   new Date(a.date);

                        }
                    );

                renderArticlesList(sortedArticles);
            });


        // Canvasベースの星を初期化
        initStarsCanvas();
        // アニメーション開始（prefers-reduced-motion を尊重）
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            drawStars();
        }

        // 約3〜7秒ごとに流れ星（Canvas上で描画）
        setInterval(
            function() {

                if (
                    !document.body.classList.contains(
                        'article-view'
                    ) && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
                ) {

                    spawnShootingStar();

                }

            },

            3000 + Math.random() * 4000
        );

    }
);


// ============================================================
// 🌟 画面サイズ変更時に星を再配置（Canvas 側で処理）
// ============================================================

// 以前は window.addEventListener('resize', createStars) でしたが
// initStarsCanvas 内で resize をリスンしているため不要です。
