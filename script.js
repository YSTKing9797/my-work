// ============================================================
// 🌌 1. 記事のデータベース
// ============================================================

const articlesData = [

    // ========================================================
    // 第1話
    // ========================================================

    {
        id: 1,

        episode: 1,

        title: "地球の文明レベルは「0.7」しかない？",

        summary:
            "地球の文明は「0.7」。文明レベルをどうやって数値化したかが面白いのでご紹介します。",

        text:

            `<p><span class="red-marker">★地球の文明レベルは0.7</span></p>

            <p>文明レベルは3段階中（拡張案として7段階もあります）とされていて、これは、宇宙に存在するかもしれない高度な文明を分類するために、科学者が考案した基準です。地球はタイプIに達する前の段階で、セーガンの式では約0.7と表されます。</p>

            <p>文明を数値化するのはいろんな観点があり、難しいです。しかし文明のレベルは、その星が「<span class="highlight-marker">どれだけのエネルギーを利用できるか</span>」という規模で決まっています。</p>

            <p>例えば、車がどれだけの距離を走ったのかを知りたいとき、「どれだけ燃料を使ったか」に注目することができます。同じように文明の規模を考えるときも、「<span class="highlight-marker">どれだけのエネルギーを利用しているか</span>」に注目する方法があります。地球がどれだけのエネルギーを利用しているかで文明を数値化する方法です。</p>

            <p>地球では、この星のエネルギーをすべて利用するほどではありません。そのため、1以下になるのです。</p>

            <p><span class="red-marker">★地球以上の文明について</span></p>

            <p><strong>タイプI：</strong>惑星全体で利用可能なすべてのエネルギーを使用し、地震などの自然現象を制御できる段階。</p>

            <p><strong>タイプII：</strong>太陽などの恒星から発せられるすべてのエネルギーを利用できる段階。ダイソン球（恒星を囲む巨大構造物）などでエネルギーを回収するレベルです。</p>

            <p><strong>タイプIII：</strong>銀河系全体のエネルギーを利用・制御できる段階。銀河内の無数の星々やブラックホールなどのエネルギーを活用します。</p>

            <p>地球の文明レベルはカール・セーガンがこの間を細かく表せるように数値化しました。そして現在の地球は、まだ太陽や地球のエネルギーを完全に使いこなせていないため、たったの「<span class="highlight-marker">0.7</span>」と評価されています。</p>

            <p><span class="red-marker">★さらにその先は？</span></p>

            <p>ここから先の文明は架空も混じりますが紹介します。</p>

            <p>観測可能な宇宙や複数の銀河系にわたるエネルギーを利用する段階や、さらに想像を広げれば、複数の宇宙（マルチバース）や次元を超え、全てを操れるようになるかもしれません。</p>

            <p>人類には想像もできないレベルになってくるでしょう。</p>

            <p>しかし、現在までにタイプIIやタイプIIIに相当する文明は見つかっていません。</p>

            <p>地球がタイプIになる時期については、エネルギー利用量が今後も増え続けると仮定すると、数百年程度と試算されることもあります。</p>`,

        badge: "宇宙文明",

        badgeColor: "#805ad5",

        date: "2026-09-30",

        views: 0,

        quiz: [

            {
                question:
                    "記事では、現在の地球の文明レベルはどのように表されていますか？",

                choices: [
                    "タイプIに達した約1.0",
                    "タイプIに達する前の約0.7",
                    "タイプIIに近い約1.7"
                ],

                correctIndex: 1
            },

            {
                question:
                    "この記事で説明されている文明レベルの数値化で、特に注目しているものは何ですか？",

                choices: [
                    "文明が利用できるエネルギーの規模",
                    "文明が存在する惑星の大きさ",
                    "文明を構成する人口の多さ"
                ],

                correctIndex: 0
            },

            {
                question:
                    "タイプIの文明について、記事ではどのような段階と説明されていますか？",

                choices: [
                    "銀河系全体のエネルギーを利用する段階",
                    "恒星から発せられるすべてのエネルギーを利用する段階",
                    "惑星全体で利用可能なすべてのエネルギーを使用する段階"
                ],

                correctIndex: 2
            },

            {
                question:
                    "タイプIIの文明が利用できるとされているものは何ですか？",

                choices: [
                    "恒星から発せられるすべてのエネルギー",
                    "銀河系にあるすべての惑星の資源",
                    "一つの惑星の地下にあるエネルギーだけ"
                ],

                correctIndex: 0
            },

            {
                question:
                    "記事では、タイプIIIの文明についてどのように説明されていますか？",

                choices: [
                    "一つの惑星の自然現象だけを制御する文明",
                    "一つの恒星のエネルギーだけを利用する文明",
                    "銀河系全体のエネルギーを利用・制御する文明"
                ],

                correctIndex: 2
            },

            {
                question:
                    "記事によると、地球が1以下になる理由として説明されているのはどれですか？",

                choices: [
                    "地球の人口がまだ少ないから",
                    "地球のエネルギーをすべて利用するほどではないから",
                    "太陽との距離が遠すぎるから"
                ],

                correctIndex: 1
            },

            {
                question:
                    "記事で紹介されている、恒星を囲んでエネルギーを回収する巨大構造物は何ですか？",

                choices: [
                    "スペースエレベーター",
                    "ダイソン球",
                    "宇宙ステーション"
                ],

                correctIndex: 1
            },

            {
                question:
                    "記事では、タイプIIやタイプIIIに相当する文明について現在どうなっていると説明されていますか？",

                choices: [
                    "すでに複数発見されている",
                    "地球の近くで確認されている",
                    "現在までに見つかっていない"
                ],

                correctIndex: 2
            }

        ]

    },


    // ========================================================
    // 第2話
    // ========================================================

    {
        id: 2,

        episode: 2,

        title:
            "何百億キロ彼方を飛び続ける「ボイジャー」――人類が宇宙に残した存在証明とは？",

        summary:
            "人類が宇宙へ放った「メッセージ」があります。1977年に打ち上げられ、半世紀近く飛び続けるボイジャー、その小さな探査機には、もし人類がいつかいなくなっても宇宙に漂い「メッセージ」を届けてくれるでしょう",

        text:

            `<p>人類が宇宙へ放った「手紙」があります。1977年に打ち上げられ、半世紀近く飛び続けるボイジャー、その小さな探査機には、もし人類がいつかいなくなっても、宇宙のどこかで「<span class="highlight-marker">私たちはここにいた</span>」と伝え続けるものが積まれています。</p>

            <p><span class="red-marker">★ ボイジャーとは？</span></p>

            <p>1977年、人類は2機の探査機「<span class="highlight-marker">ボイジャー1号」と「ボイジャー2号」</span>を宇宙へ送り出しました。</p>

            <p>それから40年以上が経った今も、ボイジャーは地球から何百億キロも離れた場所を飛び続けています。しかも現在も地球と通信していて、情報を送っています。</p>

            <p>NASAによると、ボイジャー1号が「1光日(光が1日で進む距離)」にあたる259億kmに到達するのは2026年11月18日の見込みです。現在、<span class="highlight-marker">人類が作った人工物の中で最も遠くにある探査機</span>です。ギネス世界記録にも認定されています。</p>

            <p>ボイジャー1号は時速約6万1000kmで飛行していて、ボイジャー2号は時速5万6000kmです。</p>

            <p><span class="red-marker">★実は部品が古すぎる</span></p>

            <p>40年以上前のものなので、ボイジャーが積んでいる3つのコンピューターシステムの総メモリ容量は、<span class="highlight-marker">約68キロバイト</span>しかありません。(今のスマホの写真1枚にも満たないほどです)</p>

            <p>ボイジャーのプログラムは、「<span class="highlight-marker">アセンブリ言語</span>」という、コンピューターの機械語に最も近い古い言語で直接書かれています。</p>

            <p>当時の技術者の多くが現場を離れる中、現在の若い技術者たちは、古い技術資料やソースコードを手がかりに、半世紀近く前のシステムを解析しています。</p>

            <p><span class="red-marker">★ ボイジャーは何度も壊れそうになった</span></p>

            <p>ボイジャーは宇宙空間で何度もトラブルが起きています。</p>

            <p>2023年11月14日には、ボイジャー1号から送られてくるデータが意味のある正常な形式ではなく、壊れたようなデータになっていました。</p>

            <p>原因は「<span class="highlight-marker">FDS」というコンピューターのメモリの一部が壊れたこと</span>です。FDSは、探査機が集めたデータを地球へ送れる形式に変換する装置です。</p>

            <p>FDSのメモリの約3%が破損していて、その部分に入っていたプログラムが正常に動かなくなりました。</p>

            <p>メモリが壊れた原因は、宇宙線の影響や約47年に及ぶ長期間の使用による劣化などが考えられています。壊れたメモリ部分そのものを修理することはできません。</p>

            <p>そこで技術チームは、壊れた場所に入っていたプログラムを、まだ正常なメモリへ移すという方法を取りました。</p>

            <p>ただし、正常なメモリにはプログラム全体を入れられるほどの連続した空き領域がありませんでした。</p>

            <p>そのため、<span class="highlight-marker">プログラムを小さく分割して複数の場所に配置し、それに合わせてプログラム内の参照先も変更しました。</span></p>

            <p>そして2024年4月22日に、<span class="highlight-marker">正常なテレメトリデータが約5か月ぶりに受信できるようになった</span>ことが確認されました。</p>

            <p>この他にも40年以上前の打ち上げからもトラブルが続出していました。しかし、まだ飛んでいるのです。</p>

            <p><span class="red-marker">★ 人類がいなくなっても宇宙を漂って人類の証拠を残す「ゴールデンレコード」</span></p>

            <p>金メッキされた銅製の「ゴールデンレコード」は宇宙のどこかにいる知的生命体へのメッセージが入っています。</p>

            <p>非常に頑丈に作られていて、レコードのアルミ製カバーの表面には、「<span class="highlight-marker">超高純度のウラン238</span>」が塗られており、その劣化具合（半減期）を調べることで、これが「いつ作られたか」まである程度推測できるようになっています。</p>

            <p>レコードは知的生命体がこれを見つけたときに解読できるように、地球を説明する「<span class="highlight-marker">115枚の写真・図版</span>」、世界「55種類の言語」による挨拶、地球の「自然と生命の音」、世界中から集められた「音楽」（約90分）などが入っています。</p>

            <p><span class="red-marker">★ いつまでボイジャーは飛べるのか</span></p>

            <p>今は、ボイジャーを移動させるためのエネルギーは使っておらず、微調整するのに使われている程度です。</p>

            <p>しかし、どんなに工夫しても、<span class="highlight-marker">電気が切れると、アンテナを地球に向けることも、電波を飛ばすこともできなくなります。</span>つまり今どこにいるかなどはわからなくなります。</p>

            <p>しかし、旅そのものが終わるわけではありません。</p>

            <p>ボイジャーは機能停止した後も、人類の記憶を乗せた「<span class="highlight-marker">巨大なタイムカプセル（レコード）</span>」として、いずれ太陽系を出て、その後も長い時間をかけて銀河系を旅し続けると考えられています。</p>`,

        badge: "宇宙探査",

        badgeColor: "#3182ce",

        date: "2026-10-01",

        views: 0,

        quiz: [

            {
                question:
                    "ボイジャー1号と2号が打ち上げられた年はいつですか？",

                choices: [
                    "1969年",
                    "1977年",
                    "1984年"
                ],

                correctIndex: 1
            },

            {
                question:
                    "記事によると、ボイジャー1号が1光日に相当する距離へ到達する見込みはいつですか？",

                choices: [
                    "2024年4月22日",
                    "2026年11月18日",
                    "2030年11月18日"
                ],

                correctIndex: 1
            },

            {
                question:
                    "ボイジャーが積んでいる3つのコンピューターシステムの総メモリ容量は、およそどれくらいですか？",

                choices: [
                    "約68キロバイト",
                    "約68メガバイト",
                    "約68ギガバイト"
                ],

                correctIndex: 0
            },

            {
                question:
                    "ボイジャーのプログラムが直接書かれている古い言語は何ですか？",

                choices: [
                    "Python",
                    "JavaScript",
                    "アセンブリ言語"
                ],

                correctIndex: 2
            },

            {
                question:
                    "2023年11月にボイジャー1号で問題が発生した原因として記事で説明されているものは何ですか？",

                choices: [
                    "アンテナが完全に折れたこと",
                    "FDSのメモリの一部が破損したこと",
                    "太陽電池がすべて破壊されたこと"
                ],

                correctIndex: 1
            },

            {
                question:
                    "FDSは記事の中で、どのような役割を持つ装置として説明されていますか？",

                choices: [
                    "探査機が集めたデータを地球へ送れる形式に変換する",
                    "探査機を物理的に加速させる",
                    "太陽光から電力を作り出す"
                ],

                correctIndex: 0
            },

            {
                question:
                    "壊れたメモリを修理できなかったため、技術チームが行った方法はどれですか？",

                choices: [
                    "探査機を地球へ戻した",
                    "壊れたメモリそのものを交換した",
                    "プログラムを分割して正常なメモリへ配置した"
                ],

                correctIndex: 2
            },

            {
                question:
                    "2024年4月22日に確認されたことは何ですか？",

                choices: [
                    "ボイジャー2号が新たに打ち上げられたこと",
                    "正常なテレメトリデータが約5か月ぶりに受信できたこと",
                    "ゴールデンレコードが発見されたこと"
                ],

                correctIndex: 1
            },

            {
                question:
                    "ゴールデンレコードのアルミ製カバーに塗られているものは何ですか？",

                choices: [
                    "超高純度のウラン238",
                    "純金",
                    "液体窒素"
                ],

                correctIndex: 0
            },

            {
                question:
                    "ゴールデンレコードには、記事によると何枚の写真・図版が収録されていますか？",

                choices: [
                    "55枚",
                    "90枚",
                    "115枚"
                ],

                correctIndex: 2
            },

            {
                question:
                    "ゴールデンレコードには、世界何種類の言語による挨拶が収録されていますか？",

                choices: [
                    "約25種類",
                    "55種類",
                    "115種類"
                ],

                correctIndex: 1
            },

            {
                question:
                    "ボイジャーの電気が切れた場合、記事では何ができなくなると説明されていますか？",

                choices: [
                    "アンテナを地球に向けることや電波を飛ばすこと",
                    "探査機そのものが宇宙空間から消えること",
                    "太陽系がなくなること"
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

let highlightObserver = null;


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
    // 本文
    // --------------------------------------------

    document
        .getElementById('detail-text')
        .innerHTML =
        article.text;


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
        behavior: 'instant'
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
        behavior: 'instant'
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


        // 星を作る

        createStars();


        // 約3〜7秒ごとに流れ星

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
