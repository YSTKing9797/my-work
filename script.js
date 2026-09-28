// ============================================================
// 💧 1. 記事のデータベース
// ============================================================

const articlesData = [

    {
        id: 1,

        title: "1番身近な液体「水」――実は、現代科学でも謎だらけ？",

        summary:
            "毎日飲んでいる「水」。実は、水は地球上でも特に謎の多い液体の一つです。地球には大量の水がありますが、人類が実際に利用できる水は、そのほんの一部にすぎません。さらに、水には私たちが普段あまり意識しない、不思議な性質が数多くあります。そんな身近な「水」の知られざる真実をまとめました。",

        text:

            "<p>毎日飲んでいる「水」。実は、水は地球上でも特に謎の多い液体の一つです。地球には大量の水がありますが、人類が実際に利用できる水は、そのほんの一部にすぎません。さらに、水には私たちが普段あまり意識しない、不思議な性質が数多くあります。そんな身近な「水」の知られざる真実をまとめました。</p>" +

            "<p><span class='highlight-marker'>★人類が使える水は「お風呂1杯に対して、わずか大さじ1杯」</span></p>" +

            "<p>地球は「水の惑星」と言われています。地球には、おおよそ14億km³の水があり、地球表面の約7割が海に覆われています。しかし、その水のほとんどは海水です。人間が飲むことのできる川や湖などの淡水（真水）は、地球上の水の約2.5%しかありません。</p>" +

            "<p>そして、その淡水のほとんどは南極や北極などの雪や氷として存在しています。そのため、人間が実際に生活に利用できる水の量は、地球全体の水の約0.01%ほどしかないのです。<span class='highlight-marker'>地球上のすべての水を200Lのお風呂1杯分にたとえると、人間が利用できる水は、わずか大さじ1杯（約20mL）ほどになります。</span></p>" +

            "<p>日本では、1日に約300Lもの水が使われています。また、日本の1日あたりの水道使用量は約400億Lにもなります。</p>" +

            "<p><span class='highlight-marker'>★身近な液体だけど、謎だらけの「水」</span></p>" +

            "<p>水には、ほかの物質とは違う不思議な性質がたくさんあります。</p>" +

            "<p>・普通、物質は冷えると体積が小さくなります。しかし、水は4℃のときに密度が最大になります。</p>" +

            "<p>・氷になると逆に体積が増えて、水に浮くという珍しい性質を持っています。この性質のおかげで、水が凍ると水面に氷ができ、その下には液体の水が残ります。こうなると水に住む生物が生き残ることができます。</p>" +

            "<p>・水は砂糖や塩など、さまざまな物質を溶かしやすいという性質も持っています。</p>" +

            "<p>・水は非常に圧縮されにくい物質でもあります。数千トンもの圧力をかけても、体積は1%程度しか減らないとされるほどです。これは、水分子同士が密に存在しているため、水を圧縮することが難しいからです。</p>" +

            "<p><span class='highlight-marker'>★超高圧の世界で変化する水</span></p>" +

            "<p>先ほど水は圧縮されにくい物質だと説明しましたが、水が耐えられないほど圧縮するとどうなるのでしょう。水圧は、水深が深くなるほど大きくなります。たとえば、深さ1万mを超えるマリアナ海溝では、非常に大きな水圧がかかります。これは、スマートフォンの画面にゾウが100頭乗っているほどの力にたとえられることがあります。しかし、これほどの水圧がかかっても、水の体積はほとんど変化しません。</p>" +

            "<p>では、さらに圧力をかけていったら、水はどうなるのでしょうか？地球の表面から約300kmを超えたあたりでは、温度が1000℃を超え、圧力も10万気圧を超えるとされています。ここまでくると、水にも変化が起こります。このような高温・高圧の環境では、水は普通の液体として存在することができなくなります。しかし、単純に水蒸気になるわけではありません。</p>" +

            "<p><span class='highlight-marker'>水は「アイスⅦ」と呼ばれる、特別な構造を持った氷へと変化します。</span>このアイスⅦは、ダイヤモンドの中にも存在することが確認されています。この発見は、地球内部のマントルに水が存在する可能性を示すものでもあります。</p>" +

            "<p>現在では、レーザーを使った実験によって、直接見ることのできない地球内部のような環境を再現する研究も行われています。このようなレーザーを使った実験では、圧力は1億気圧以上、温度は1万K以上に達することがあります。私たちが毎日見ている太陽の表面温度は約5500℃なので、1万K（約9727℃）という温度は、太陽の表面温度よりも約1.7倍高い温度です。このような極限環境では、地球内部だけでなく、木星の内部環境の一部を再現できると考えられています。</p>" +

            "<p>このように実験を進めて行く中で新たにアイスXVIIIという新しい氷も発見されています。これは一定の条件変化では普通の氷にはない電気を通す性質もあり、これは氷でできた惑星の海王星や天王星にも存在する可能性があると考えられています。</p>" +

            "<p><span class='highlight-marker'>★金属水素とは？そして活用できる未来</span></p>" +

            "<p>さらに、木星の内部などの過酷な環境では、「金属水素」と呼ばれる物質も存在すると考えられています。金属水素とは、水素が超高圧環境で圧縮され、電子が自由に動ける状態になったものです。</p>" +

            "<p>これは実際に、1996年にアメリカで発見されたとされています。金属水素には、将来の技術に利用できる可能性も考えられています。たとえば、水素は超高圧の環境で金属化すると、超伝導、つまり電気抵抗がゼロになる状態になる可能性があります。普通の電線では、電気が流れるときに熱が発生し、エネルギーの一部が失われます。しかし、超伝導が実現すれば、このエネルギー損失を理論上ほとんどなくすことができます。</p>" +

            "<p>また、水素は非常に軽い物質です。そのため、金属水素を燃料として活用できれば、飛行機やロケットなどに大量の燃料を積むことができる可能性があります。さらに、宇宙探査機や人工衛星にも、より多くの機材を搭載できるようになれば、これまで以上に長距離の宇宙ミッションが可能になるかもしれません。</p>" +

            "<p><span class='highlight-marker'>★まとめ</span></p>" +

            "<p>私たちの身近にある「水」しかし、その正体を深く探っていくと、地球内部や宇宙、そして未来の技術にもつながる、驚くほど奥深い物質なのです。これからの研究に期待しましょう。</p>",

        badge: "最新話",

        badgeColor: "#e53e3e",

        // ✨ こう書き換えます！
image: "water.jpg",


        date: "2026-09-27",

        views: 0,

        quiz: [

            {
                question:
                    "地球上のすべての水を200Lのお風呂1杯分にたとえた場合、人間が利用できる水はどのくらい？",

                choices: [
                    "大さじ1杯ほど",
                    "バケツ1杯ほど",
                    "お風呂半分ほど"
                ],

                correctIndex: 0
            },

            {
                question:
                    "水の密度が最大になる温度は？",

                choices: [
                    "0℃",
                    "4℃",
                    "10℃"
                ],

                correctIndex: 1
            },

            {
                question:
                    "高圧環境で水が変化する「アイスⅦ」は何？",

                choices: [
                    "特別な構造を持った氷",
                    "金属になった水",
                    "水蒸気の一種"
                ],

                correctIndex: 0
            },

            {
                question:
                    "記事中で、金属水素について説明されている性質はどれ？",

                choices: [
                    "電気をまったく通さない",
                    "超高圧環境で超伝導になる可能性がある",
                    "常温で必ず液体になる"
                ],

                correctIndex: 1
            },

            {
                question:
                    "記事で紹介されている新しい氷の名前は？",

                choices: [
                    "アイスXVIII",
                    "アイスX",
                    "アイスXX"
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
                        <img
                            src="${article.image}"
                            alt="記事の画像"
                        >
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
        .innerHTML =
        `<img src="${article.image}" alt="記事の画像">`;

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


    setTimeout(function() {

        const markers =
            document.querySelectorAll(
                '.highlight-marker'
            );

        markers.forEach(function(marker) {

            marker.classList.add(
                'active'
            );

        });

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

    const markers =
        document.querySelectorAll(
            '.highlight-marker'
        );

    markers.forEach(function(marker) {

        marker.classList.remove(
            'active'
        );

    });

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

    };