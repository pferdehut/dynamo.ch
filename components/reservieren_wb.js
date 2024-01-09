const reservierenPrevTemplate = document.createElement('template');

class ReservierenWB extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div class="reservieren werkstattMaschine program list component active">
            <h2>Hier gibts</h2>
            <div class="happenings">
            <div class="days">
                <div class="eventWrap maschine active">
                    <div class="event"><a href="maschine.html">3D Drucker FDM</a></div>
                    <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> Reservieren</a>
                    </div>
                </div>
                <div class="eventWrap maschine active">
                    <div class="event"><a href="maschine.html">3D Scanner</a></div>
                    <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> Reservieren</a>
                    </div>
                </div>
                <div class="eventWrap maschine active">
                    <div class="event"><a href="maschine.html">Plasma Schneider SWIFTY 1250</a></div>
                    <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> Reservieren</a>
                    </div>
                </div>
                <div class="eventWrap maschine active">
                    <div class="event">Lötstation</div>
                </div>
                <div class="eventWrap maschine active">
                    <div class="event">Thermoform KIFI</div>
                </div>
            </div>
            <button class="weitere"><a href="reservieren.html">Weiter stöbern</a></button>
        </div>
        `;
    }
}
  
customElements.define('reservieren-wb-component', ReservierenWB);

/*Views*/
function listreservierenview(){
    const program = document.getElementsByClassName("reservieren");

    program[0].classList.add("list");
    program[0].classList.remove("kachel");

    const kacheln = document.querySelectorAll(".reservieren.list .kacheln");
    const liste = document.querySelectorAll(".reservieren.list .liste");

    kacheln[0].src="img/Menu_Programm_Kachel.svg";
    liste[0].src="img/Menu_Programm_List.svg";
}

function kachelreservierenview(){
    const program = document.getElementsByClassName("reservieren");

    program[0].classList.remove("list");
    program[0].classList.add("kachel");

    const kacheln = document.querySelectorAll(".reservieren.kachel .kacheln");
    const liste = document.querySelectorAll(".reservieren.kachel .liste");

    kacheln[0].src="img/Menu_Programm_Kachel_active.svg";
    liste[0].src="img/Menu_Programm_List_deaktiv.svg";
}