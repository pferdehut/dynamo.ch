const bereicheTemplate = document.createElement('template');

class Bereiche extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div class="component bereiche active">
            <h2>Werkstätten</h2>
            <div class="bereich"><a href="werkstatt.html">
                <div class="location">Haus 13</div>
                <div class="title">Medienwerkstatt</div>
                <div class="link">Details</div>
            </a></div>
            <div class="bereich"><a href="werkstatt.html">
                <div class="location">Haus 15</div>
                <div class="title">Metallwerkstatt</div>
                <div class="link">Details</div>
            </a></div>
            <div class="bereich"><a href="werkstatt.html">
                <div class="location">Haus 17</div>
                <div class="title">Digitalwerk</div>
                <div class="link">Details</div>
            </a></div>
            <div class="bereich"><a href="werkstatt.html">
                <div class="location">Haus 21</div>
                <div class="title">Textilwerkstatt</div>
                <div class="link">Details</div>
            </a></div>
            <div class="bereich"><a href="werkstatt.html">
                <div class="location">Haus 21</div>
                <div class="title">Fotolabor</div>
                <div class="link">Details</div>
            </a></div>
            <div class="bereich"><a href="werkstatt.html">
                <div class="location">Haus 21</div>
                <div class="title">Keramikwerkstatt</div>
                <div class="link">Details</div>
            </a></div>
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