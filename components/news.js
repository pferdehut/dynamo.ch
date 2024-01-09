const newsTemplate = document.createElement('template');

class News extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div class="component newsOuter active">
            <h2>News</h2>
            <div class="newsNav">
                <button onclick="currentNews(1)" class="navDot newsDot active"></button>
                <button onclick="currentNews(2)" class="navDot newsDot"></button>
                <button onclick="currentNews(3)" class="navDot newsDot"></button>
                <button onclick="currentNews(4)" class="navDot newsDot"></button>
            </div>
            <div class="newsWrap">
                <div class="news active"><a href="detail.html">
                    <div class="date">08/01/2023</div>
                    <div class="title">Come Closer</div>
                    <div class="description">Das Dynamo gehört der Jugend! Und genau diese steht bei uns im Herbst besonders im Vordergrund.</div>
                    <div class="image"><img src="img/comecloser.png"></div>
                </a></div>
                <div class="news"><a href="detail.html">
                    <div class="date">07/01/2023</div>
                    <div class="title">ABGESAGT: Teens Days</div>
                    <div class="description">Die Teens Days 2023 sind leider abgesagt :( Personen, welche sich bereits angemeldet haben, kriegen von uns eine E-Mail mit allen weiteren Informationen!</div>
                    <div class="image"><img src="img/teens_days.jpeg"></div>
                </a></div>
                <div class="news"><a href="detail.html">
                    <div class="date">06/01/2023</div>
                    <div class="title">Kursleiter*in Virtual Reality gesucht</div>
                    <div class="description">Du kennst dich mit VR-Brillen aus und willst dein Wissen weitergeben?</div>
                    <div class="image"><img src="img/vr.jpeg"></div>
                </a></div>
                <div class="news"><a href="detail.html">
                    <div class="date">05/01/2023</div>
                    <div class="title">ABGESAGT: Teens Days</div>
                    <div class="description">Die Teens Days 2023 sind leider abgesagt :( Personen, welche sich bereits angemeldet haben, kriegen von uns eine E-Mail mit allen weiteren Informationen!</div>
                    <div class="image"><img src="img/comecloser.png"></div>
                </a></div>
            </div>
        </div>
    `;
    }
}
  
customElements.define('news-component', News);

/*News Gallery*/
let newsIndex = 1;
showNews(newsIndex);

// Thumbnail image controls
function currentNews(n) {
    showNews(newsIndex = n);
}

function showNews(n){
    let i;

    const newsDots = document.getElementsByClassName("newsDot");
    const news = document.getElementsByClassName("news");

    if (n > news.length) {newsIndex = 1}

    for (i = 0; i < newsDots.length; i++) {
        newsDots[i].classList.remove("active");
    }

    for (i = 0; i < news.length; i++) {
        news[i].classList.remove("active");
    }

    news[newsIndex-1].classList.add("active");
    newsDots[newsIndex-1].classList.add("active");
}

setInterval(newsTimer, 6000);

function newsTimer() {
    const newsDots = document.getElementsByClassName("newsDot");
    const news = document.getElementsByClassName("news");

    newsIndex++;
    if (newsIndex > news.length) {newsIndex = 1}

    for (i = 0; i < newsDots.length; i++) {
        newsDots[i].classList.remove("active");
    }

    for (i = 0; i < news.length; i++) {
        news[i].classList.remove("active");
    }

    news[newsIndex-1].classList.add("active");
    newsDots[newsIndex-1].classList.add("active");
}