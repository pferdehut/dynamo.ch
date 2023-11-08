const bereicheTemplate = document.createElement('template');

class Bereiche extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div class="component bereiche active">
            <h2>Werkstätten</h2>
            <div class="newsNav">
                <button onclick="currentNews(1)" class="navDot newsDot active"></button>
                <button onclick="currentNews(2)" class="navDot newsDot"></button>
                <button onclick="currentNews(3)" class="navDot newsDot"></button>
                <button onclick="currentNews(4)" class="navDot newsDot"></button>
            </div>
            <div class="newsWrap">
                <div class="news active"><a href="werkstatt.html">
                    <div class="title">Werkbereich 13 – Medien</div>
                    <div class="description">Papierstau und leere Druckerpatrone, aber dein Portfolio muss morgen abgegeben werden? Keine Panik, bei uns kannst du ohne Pannen drucken, kopieren und gestalten.</div>
                    <div class="image"><img src="img/medien.jpeg"></div>
                </a></div>
                <div class="news"><a href="werkstatt.html">
                    <div class="title">Werkbereich 15 – Metall</div>
                    <div class="description">Der Rückspiegel deiner Vespa ist abgebrochen und der Auspuff lottert auch? Hier bringst du dein Lieblingsteil wieder zum Glänzen.</div>
                    <div class="image"><img src="img/metall.jpeg"></div>
                </a></div>
                <div class="news"><a href="werkstatt.html">
                    <div class="title">Werkbereich 17 – Digital</div>
                    <div class="description">Tauche in virtuelle Sphären ein, modelliere mit Computern, verwirkliche deine audiovisuellen Visionen und verwandle PLA-Filament in Fantasiefiguren oder Präzisionsteile. Im Digitalwerk dreht sich alles um das digitale Universum.</div>
                    <div class="image"><img src="img/digital.jpeg"></div>
                </a></div>
                <div class="news"><a href="werkstatt.html">
                    <div class="title">Werkbereich 21 – Textil</div>
                    <div class="description">Den Lieblingspulli ist beim Waschen geschrumpft? In der Textilbearbeitung findest du verschiedenste Stoffe, ausgefallene Schnittmuster und allerlei Maschinen, um dir dein nächstes Lieblingskleidungsstück selbst zu machen.</div>
                    <div class="image"><img src="img/textil_raum.jpeg"></div>
                </a></div>
            </div>
        </div>
    `;
    }
}
  
customElements.define('bereiche-component', Bereiche);

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

setInterval(bereicheTimer, 6000);

function bereicheTimer() {
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