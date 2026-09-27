// ============================================================
// 💡 1. 記事のデータベース
// ============================================================

const articlesData = [

    {
        id: 1,

        title: "「とんでもございません」文法的にはおかしいけれど、現代では使用OK？",

        summary:
            "ビジネスシーンでもよく耳にする「とんでもございません」という言葉。実は文法的には間違いだと言われてきましたが、現代では変化が起きているようです。",

        text:
            "<p>「とんでもない」という言葉は, それ自体で1つの単語（形容詞）です。そのため、お尻の「ない」の部分だけを「ございません」に変えるのは、本来の文法からすると不自然だとされてきました。</p>" +

            "<p>しかし、相手の褒め言葉を謙遜して否定する際に使い勝手が良いことから広く使われるようになりました。</p>" +

            "<p>その結果、文化庁が2007年に発表した「敬語の指針」において, " +

            "<span class='highlight-marker'>" +
            "「とんでもございません（ありません）」の使用は、現在では全く問題がない" +
            "</span>" +

            "と公式に認められています！</p>",

        badge: "最新話",

        badgeColor: "#e53e3e",

        imageText: "📸 敬語の画像",

        date: "2026-09-26",

        views: 120,

        quiz: [

            {
                question:
                    "文化庁が「とんでもございません」を問題ないと認めたのは西暦何年？",

                choices: [
                    "2000年",
                    "2007年",
                    "2015年"
                ],

                correctIndex: 1
            },

            {
                question:
                    "「とんでもない」の本来の正しい丁寧な言い方として適切なのはどっち？",

                choices: [
                    "とんでもございません",
                    "とんでもないことでございます"
                ],

                correctIndex: 1
            },

            {
                question:
                    "「ない」の部分を「ありません」に変えることについて、仲間外れはどれ？",

                choices: [
                    "みっともない",
                    "おもしろくない",
                    "美しくない"
                ],

                correctIndex: 0
            },

            {
                question:
                    "文化庁が正しい敬語の使い方をまとめた、2007年の報告書のタイトルは何？",

                choices: [
                    "敬語の指針",
                    "敬語の教科書",
                    "日本の敬語ルール"
                ],

                correctIndex: 0
            },

            {
                question:
                    "「とんでもない」という言葉の、元々の意味に近いものはどれ？",

                choices: [
                    "とんだことない",
                    "とんでもねぇ",
                    "思いもよらない・途方もない"
                ],

                correctIndex: 2
            }

        ]

    },


    // ============================================================
    // 🚦 信号機の記事
    // ============================================================

    {
        id: 2,

        title: "信号機の「緑色」をなぜ「青信号」と呼ぶの？",

        summary:
            "誰が見ても緑色に見える信号機のランプ。なぜ私たちは「緑信号」ではなく「青信号」と呼ぶのでしょうか？そこには日本語の歴史が関係していました。",

        text:
            "<p>日本の法令上、信号機の色は「緑色」と定められています。しかし、日本では昔から「青葉」や「青リンゴ」のように、緑色のものも「青」と呼ぶ文化がありました。</p>" +

            "<p>昭和初期に信号機が初めて導入された際、新聞などで「青信号」と広く報道されたことで、国民の間でその呼び名が定着しました。</p>" +

            "<p>あまりにも青信号という呼び名が広まったため, " +

            "<span class='highlight-marker'>" +
            "国はのちに法律を書き換えて正式に「青信号」と呼ぶように変更した" +
            "</span>" +

            "のです！</p>",

        badge: "過去話",

        badgeColor: "#4a5568",

        imageText: "📸 信号機の画像",

        date: "2026-09-15",

        views: 45,

        quiz: [

            {
                question:
                    "日本の信号機で、一般的に「青信号」と呼ばれているランプの実際の色は？",

                choices: [
                    "緑色",
                    "青色",
                    "黄色"
                ],

                correctIndex: 0
            },

            {
                question:
                    "日本では、緑色のものを「青」と表現することがあります。次のうち、その例として使われるものは？",

                choices: [
                    "青葉",
                    "赤葉",
                    "白葉"
                ],

                correctIndex: 0
            },

            {
                question:
                    "「青信号」という呼び方が日本で広まった背景として関係が深いものは？",

                choices: [
                    "新聞などによる報道",
                    "外国の法律",
                    "テレビゲーム"
                ],

                correctIndex: 0
            },

            {
                question:
                    "現在、日本で「青信号」と呼ばれている信号のランプは、法令上では何色とされていますか？",

                choices: [
                    "青色",
                    "緑色",
                    "水色"
                ],

                correctIndex: 1
            },

            {
                question:
                    "「青信号」という呼び方について、この記事で説明されている主な理由は？",

                choices: [
                    "日本語では昔から緑色を青と表現することがあったから",
                    "信号機のランプが昔は全部青色だったから",
                    "外国から青色という名前が輸入されたから"
                ],

                correctIndex: 0
            }

        ]

    },


    // ============================================================
    // 🆕 最新話：エレベーターの「4階」がないことがある理由
    // ============================================================

    {
        id: 3,

        title: "なぜエレベーターには「4階」がないことがあるの？",

        summary:
            "ホテルや病院などで、エレベーターの階数表示を見ると「4階」が見当たらないことがあります。いったいなぜなのでしょうか？",

        text:
            "<p>建物によっては、エレベーターの階数表示で「4階」を避けていることがあります。</p>" +

            "<p>その大きな理由の一つが、日本では「4」という数字が「死」を連想させることがあるためです。「死」と「四」の読み方が同じ「し」になることから、特に病院などでは縁起を気にして4を避ける場合があります。</p>" +

            "<p>ただし、すべての建物で4階がなくなるわけではありません。建物の所有者や設計方針などによって対応は異なります。</p>" +

            "<p><span class='highlight-marker'>つまり「4階がない」のは、建物そのものに4階が存在しないという意味ではなく、表示上4階を避けている場合があるのです。</span></p>",

        badge: "最新話",

        badgeColor: "#e53e3e",

        imageText: "📸 エレベーターの画像",

        date: "2026-09-27",

        views: 0,

        // ====================================================
        // 🆕 エレベーター記事専用クイズ
        // ====================================================

        quiz: [

            {
                question:
                    "建物によって「4階」の表示を避ける理由として知られているものは？",

                choices: [
                    "「死」を連想させるため",
                    "階段が長くなるため",
                    "エレベーターが止まれないため"
                ],

                correctIndex: 0
            },

            {
                question:
                    "「四」と「死」に共通する読み方はどれ？",

                choices: [
                    "よん",
                    "し",
                    "ご"
                ],

                correctIndex: 1
            },

            {
                question:
                    "「4階がない」建物では、実際にはどうなっている場合がある？",

                choices: [
                    "4階そのものが必ず存在しない",
                    "4階を作ることが法律で禁止されている",
                    "4階は存在するが、表示上避けている"
                ],

                correctIndex: 2
            },

            {
                question:
                    "4階を避けることが特に意識される場合がある建物はどれ？",

                choices: [
                    "病院",
                    "駐車場だけの建物",
                    "公園"
                ],

                correctIndex: 0
            },

            {
                question:
                    "4階を表示するかどうかについて正しい説明はどれ？",

                choices: [
                    "すべての建物で必ず4階がなくなる",
                    "建物によって対応が異なる",
                    "日本では法律で必ず4階を隠すことになっている"
                ],

                correctIndex: 1
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
            '.setting-row:nth-of-type(1) .setting-btn'
        );

    buttons.forEach(function(btn) {

        btn.classList.remove('active');

    });

    if (size === 'small') {

        buttons[0].classList.add('active');

    }

    if (size === 'normal') {

        buttons[1].classList.add('active');

    }

    if (size === 'large') {

        buttons[2].classList.add('active');

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

                <div class="article-image-area">

                    <span
                        class="badge"
                        style="background-color: ${article.badgeColor};"
                    >
                        ${article.badge}
                    </span>

                    <div class="article-image-placeholder">
                        ${article.imageText}
                    </div>

                </div>

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
        .getElementById('detail-image')
        .innerText =
        article.imageText;

    document
        .getElementById('detail-text')
        .innerHTML =
        article.text;


    // ★ 記事ごとに違うクイズを自動セット
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


    setTimeout(function() {

        const marker =
            document.querySelector(
                '.highlight-marker'
            );

        if (marker) {

            marker.classList.add(
                'active'
            );

        }

    }, 500);

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

    const marker =
        document.querySelector(
            '.highlight-marker'
        );

    if (marker) {

        marker.classList.remove(
            'active'
        );

    }

    currentQuizData = [];

    currentQuestionIndex = 0;

    quizScore = 0;

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
// 🚀 最初の起動
// ============================================================

window.onload =
    function() {

        renderArticlesList(
            articlesData
        );

    };
