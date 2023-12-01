const headerTemplate = document.createElement('template');

class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `

    
        <header>
            <div class="logo"><a href="index.html"><img src="img/Logo_Dynamo.svg"></a></div>
            <div class="menu">
                <button class="open" onclick="toggleOpen()">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="17" stroke="white" stroke-width="5" fill="black"/>
                        <line x1="20" y1="9" x2="20" y2="20" stroke="white" stroke-width="3.5" id="hour" />
                        <line x1="20" y1="7" x2="20" y2="20" stroke="white" stroke-width="3.5" id="minute" />
                    </svg>
                </button>
                <button class="plus" onclick="toggleMenu()">
                    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="20" x2="40" y2="20" stroke="white" stroke-width="5"/>
                        <line x1="20" y1="8.74228e-08" x2="20" y2="40" stroke="white" stroke-width="5"/>
                    </svg>
                </button>
            </div>
        </header>
        <nav class="wrapMenu">
            <div class="logo"><a href="index.html"><img src="img/Logo_Dynamo.svg"></a></div>
            <ul class="mainMenu">
                <li><a href="programm.html">Programm</a></li>
                <li><a href="reservieren.html">Reservieren</a></li>
                <li><a href="info.html">Info</a></li>
                <li><a href="dynamo.html">Dynamo</a></li>
            </ul>
            <ul class="subMenu">
                <li><a href="werkbereich.html">Werkbereich</a></li>
                <li><a href="raumvermietung.html">Raumvermietung</a></li>
                <li><a href="restaurant.html">Restaurant</a></li>
                <li><a href="detail.html">Raumbörse</a></li>
                <li><a href="detail.html">Ferienangebote & Projekte</a></li>
            </ul>
        </nav>
        <div class="openingHours">
            <div class="logo"><a href="index.html"><img src="img/Logo_Dynamo.svg"></a></div>
            <div class="bereicheWrap">
                <div class="bereich">
                    <div class="bereichTitel">Raumvermietung</div>
                    <div class="hours">
                        <p>Di – Fr: 14:00 – 19:00</p>
                    </div>
                    <div class="contact">
                        044 415 76 60<br>
                        <a href="mailto:room@dynamo.ch">room@dynamo.ch</a>
                    </div>
                </div>
                <div class="bereich">
                    <div  class="bereichTitel">Restaurant</div>
                    <div class="hours">
                        <p>
                        Di / Mi / Sa und So: 10:30 – 21:00<br>
                        Do / Fr: 10:30 – 23:00<br>
                        </p>
                    </div>
                    <div class="contact">
                        044 415 76 90<br>
                        <a href="mailto:restaurant@dynamo.ch">restaurant@dynamo.ch</a>
                    </div>
                </div>
                <div class="bereich">
                    <div class="bereichTitel">Werkbereich</div>
                    <div class="hours">
                        <p>
                        Mi – Fr: 14:00 – 21:00*<br>
                        Sa: 14:00 – 19:00<br>
                        *Wenn niemand da, schliessen wir 1 Stunde früher!
                        </p>
                    </div>
                    <div class="contact">
                        044 415 76 73<br>
                        <a href="mailto:werkbereich@dynamo.ch">werkbereich@dynamo.ch</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    }
}
  
customElements.define('header-component', Header);


/*Clock Animation*/
let hours = document.getElementById("hour");
let minutes = document.getElementById("minute");

const date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = (hr * 360) / 12 + (min * (360 / 60)) / 12;
let minPosition = (min * 360) / 60 + (sec * (360 / 60)) / 60;

const runClock = () => {
  hrPosition = hrPosition + 3 / 360;
  minPosition = minPosition + 6 / 60;

  hours.style.transform = "rotate(" + hrPosition + "deg)";
  minutes.style.transform = "rotate(" + minPosition + "deg)";
};
setInterval(runClock, 1000);

/*Menu*/
function toggleMenu() {
    const menu = document.getElementsByClassName("wrapMenu");
    const clock = document.getElementsByClassName("open");
    const nav = document.getElementsByClassName("plus");
    const open = document.getElementsByClassName("openingHours");
    menu[0].classList.toggle("active");
    nav[0].classList.toggle("active");
    open[0].classList.remove("active");
    clock[0].classList.remove("active");
}

function toggleOpen() {
    const menu = document.getElementsByClassName("openingHours");
    const clock = document.getElementsByClassName("open");
    const nav = document.getElementsByClassName("plus");
    const main = document.getElementsByClassName("wrapMenu");
    menu[0].classList.toggle("active");
    clock[0].classList.toggle("active");
    nav[0].classList.remove("active");
    main[0].classList.remove("active");
}

console.log( [
    '         ___',
    '    ____/  / ___   ___  ________  ________  _____________  ________',
    '   / ___  / /  /  /  / /  __   / /  __   / /  __   __   / / ____  /',
    '  / /__/ / /  /__/  / /  / /  / /  /_/  / /  / /  / /  / / /___/ /',
    ' /______/ /______  / /__/ /__/ /__/ /__/ /__/ /__/ /__/ /_______/',
    '                / /',
    '               /_/'
].join( '\n' ) );