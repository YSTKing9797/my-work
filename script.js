// ============================================================
// 🌌 1. 記事のデータベース
// ============================================================

const articlesData = [

    {
        id: 1,

        title: "地球の文明レベルは「0.7」しかない？",

        summary:
            "地球の文明は「0.7」。文明レベルをどうやって数値化したのかが面白すぎるのでご紹介します。",

        text:

            "<p><span class='highlight-marker'>★地球の文明レベルは0.7</span></p>" +

            "<p>地球の文明は3段階中（拡張案として7段階もあります）0.7程度とされていて、これは、宇宙に存在するかもしれない高度な文明を分類するために、科学者が考案した基準です。</p>" +

            "<p>文明を数値化するのはいろんな観点があり、難しいです。しかし文明のレベルは、その星が「どれだけのエネルギーを使いこなせているか」というもので決まっています。</p>" +

            "<p>例えば、車がどれだけ移動したかを知りたいなら使った燃料を見ればわかります。なので地球はどれだけのエネルギーを必要としているかで文明を数値化する方法です。</p>" +

            "<p>地球ではこの星のエネルギーをすべて必要とするほどではありませんので、1以下になるのです。</p>" +

            "<p><span class='highlight-marker'>★タイプ以上の文明について</span></p>" +

            "<p><strong>タイプⅠ：</strong>惑星全体で利用可能なすべてのエネルギー（気候や地震の制御、全地表のエネルギーなど）を使用・制御できる段階。</p>" +

            "<p><strong>タイプⅡ：</strong>太陽などの恒星から発せられるすべてのエネルギーを利用できる段階。ダイソン球（恒星を囲む巨大構造物）などでエネルギーを回収するレベルです。</p>" +

            "<p><strong>タイプⅢ：</strong>銀河系全体のエネルギーを利用・制御できる段階。銀河内の無数の星々やブラックホールなどのエネルギーを活用します。</p>" +

            "<p>現在の地球は、まだ太陽や地球のエネルギーを完全に使いこなせていないため、たったの「0.7」と評価されています。</p>" +

            "<p><span class='highlight-marker'>ここから先は、観測可能な宇宙や複数の銀河系にわたるエネルギーを利用する段階や、複数の宇宙（マルチバース）や次元を超え、物理法則や宇宙そのものを創造・制御する神の領域に近い段階になります。</span></p>" +

            "<p>ここまで来ると想像もできない世界です。</p>" +

            "<p>しかしまだ、タイプⅢ以上のものは見つかっておらず、地球はタイプⅠになるのも数百後年と予想されています。</p>" +

            "<p><span class='highlight-marker'>★まとめ</span></p>" +

            "<p>私たちが暮らす地球の文明は、宇宙規模で見るとまだ「0.7」程度。さらに上のタイプへ進むには、惑星、恒星、そして銀河全体のエネルギーを利用できるほどの文明が必要になります。</p>",

        badge: "宇宙文明",

        badgeColor: "#805ad5",

        date: "2026-09-30",

        views: 0,

        quiz: [

            {
                question:
                    "現在の地球の文明レベルは、およそいくつとされていますか？",

                choices: [
                    "0.7",
                    "1.5",
                    "3.0"
                ],

                correctIndex: 0
            },

            {
                question:
                    "文明レベルは主に何をどれだけ利用できるかによって分類されますか？",

                choices: [
                    "人口",
                    "エネルギー",
                    "惑星の大きさ"
                ],

                correctIndex: 1
            },

            {
                question:
                    "タイプⅡの文明が利用するとされるものは？",

                choices: [
                    "恒星から発せられるエネルギー",
                    "地球上の水だけ",
                    "一つの都市の電力だけ"
                ],

                correctIndex: 0
            },

            {
                question:
                    "タイプⅢの文明が利用・制御できるとされる範囲は？",

                choices: [
                    "一つの都市",
                    "一つの惑星",
                    "銀河系全体"
                ],

                correctIndex: 2
            },

            {
                question:
                    "記事で紹介されている、恒星を囲んでエネルギーを回収する巨大構造物は？",

                choices: [
                    "ダイソン球",
                    "スペースエレベーター",
                    "宇宙ステーション"
                ],

                correctIndex: 0
            }

        ]

    }

];


// ============================================================
// 💡 2. 状態管理
// ============================================================

let activeArticleId = null;

let currentQuestionIndex = 0;

let quizScore = 0;

let isSoundOn = true;

let currentQuizData = [];


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

    const ctx = new AudioContext();

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

    document
        .getElementById('sidebar-menu')
        .classList.toggle('open');

    document
        .getElementById('sidebar-overlay')
        .classList.toggle('open');

}


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


    document
        .getElementById('detail-title')
        .innerText =
        article.title;


    document
        .getElementById('detail-text')
        .innerHTML =
        article.text;


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


    document
        .getElementById('main-page')
        .style.display =
        'none';


    document
        .getElementById('detail-page')
        .style.display =
        'block';


    /*
     * 記事ページでは
     * 宇宙背景とホームのヘッダーを消す
     */

    document.body.classList.add(
        'article-view'
    );


    /*
     * ページ上部へ移動
     */

    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });


    /*
     * マーカーをいったん全部OFF
     */

    resetHighlightMarkers();


    /*
     * 少し待ってからスクロール監視開始
     */

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


    currentQuizData = [];

    currentQuestionIndex = 0;

    quizScore = 0;


    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });

}


// ============================================================
// 🖍️ マーカーをリセット
// ============================================================

function resetHighlightMarkers() {

    const markers =
        document.querySelectorAll(
            '.highlight-marker'
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

let highlightObserver = null;


function setupHighlightObserver() {

    if (highlightObserver) {

        highlightObserver.disconnect();

        highlightObserver = null;

    }


    const markers =
        document.querySelectorAll(
            '#detail-text .highlight-marker'
        );


    if (markers.length === 0) {
        return;
    }


    /*
     * マーカーが画面の中央付近まで来たら
     * 線を引く
     */

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
// 🌟 星を生成
// ============================================================

function createStars() {

    const starsContainer =
        document.getElementById(
            'stars'
        );


    if (!starsContainer) {
        return;
    }


    starsContainer.innerHTML = '';


    const starCount =
        window.innerWidth < 600
            ? 100
            : 180;


    for (
        let i = 0;
        i < starCount;
        i++
    ) {

        const star =
            document.createElement(
                'div'
            );


        star.className =
            'space-star';


        if (Math.random() < 0.15) {

            star.classList.add(
                'big'
            );

        }


        star.style.left =
            Math.random() * 100 +
            '%';


        star.style.top =
            Math.random() * 100 +
            '%';


        star.style.setProperty(
            '--twinkle-time',
            (2 + Math.random() * 4) +
            's'
        );


        star.style.animationDelay =
            (-Math.random() * 5) +
            's';


        starsContainer.appendChild(
            star
        );

    }

}


// ============================================================
// 🌠 流れ星を生成
// ============================================================

function createShootingStar() {

    const container =
        document.getElementById(
            'shooting-stars'
        );


    if (!container) {
        return;
    }


    const star =
        document.createElement(
            'div'
        );


    star.className =
        'shooting-star';


    star.style.left =
        (20 + Math.random() * 100) +
        '%';


    star.style.top =
        Math.random() * 70 +
        '%';


    container.appendChild(
        star
    );


    setTimeout(function() {

        star.remove();

    }, 1800);

}


// ============================================================
// 🚀 最初の起動
// ============================================================

window.addEventListener(
    'load',
    function() {

        const sortedArticles =
            [...articlesData].sort(
                function(a, b) {

                    return new Date(b.date) -
                           new Date(a.date);

                }
            );


        renderArticlesList(
            sortedArticles
        );


        /*
         * 星を作る
         */

        createStars();


        /*
         * 約3〜7秒ごとに流れ星
         */

        setInterval(
            function() {

                if (
                    !document.body.classList.contains(
                        'article-view'
                    )
                ) {

                    createShootingStar();

                }

            },

            3000 + Math.random() * 4000
        );

    }
);


// ============================================================
// 🌟 画面サイズ変更時に星を再配置
// ============================================================

window.addEventListener(
    'resize',
    function() {

        createStars();

    }
);
