const reservierenTemplate = document.createElement('template');

class Reservieren extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div class="reservieren program kachel component active">
            <div class="menuprogram">
            <button onclick="kachelreservierenview()"><img class="kacheln" src="/img/Menu_Programm_Kachel_active.svg"></button>
            <button onclick="listreservierenview()"><img class="liste" src="/img/Menu_Programm_List_deaktiv.svg"></button>
            </div>
            <div class="happenings">
            <div class="days">
              <div class="eventWrap maschine active">
                <div class="tag"><div class="wrapTag"><span class="main">Maschine</span><span>Digital</span></div></div>
                <div class="location">Haus 17, Digitalwerk</div>
                <div class="image"><a href="maschine.html"><img src="/img/prusa.jpeg"></a></div>
                <div class="event"><a href="maschine.html">3D Drucker FDM</a></div>
                <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                  <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                  </svg> Reservieren</a></div>
              </div>
              <div class="eventWrap maschine active">
                <div class="tag"><div class="wrapTag"><span class="main">Maschine</span><span>Digital</span></div></div>
                <div class="location">Haus 17, Digitalwerk</div>
                <div class="image"><a href="maschine.html"><img src="/img/scanner.jpeg"></a></div>
                <div class="event"><a href="maschine.html">3D Scanner</a></div>
                <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                  <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                  </svg> Reservieren</a></div>
              </div>
              <div class="eventWrap maschine active">
                <div class="tag"><div class="wrapTag"><span class="main">Maschine</span><span>Metall</span></div></div>
                <div class="location">Haus 15, Metallwerkstatt</div>
                <div class="image"><a href="maschine.html"><img src="/img/dynamo-metall-abkant-01.jpeg"></a></div>
                <div class="event"><a href="maschine.html">Abkantmaschine</a></div>
                <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                  <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                  </svg> Reservieren</a></div>
              </div>
              <div class="eventWrap tisch active">
                <div class="tag"><div class="wrapTag"><span class="main">Tisch</span></div></div>
                <div class="location">Haus 19, Restaurant</div>
                <div class="image"><a href="restaurant.html"><img src="/img/resti.jpeg"></a></div>
                <div class="event"><a href="restaurant.html">Tisch im Restaurant Chuchi am Wasser</a></div>
                <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                  <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                  </svg> Reservieren</a></div>
              </div>
              <div class="eventWrap ausleih active">
                <div class="tag"><div class="wrapTag"><span class="main">Ausleihgerät</span><span>Textil</span></div></div>
                <div class="location">Haus 21, Textilwerkstatt</div>
                <div class="image"><a href="ausleih.html"><img src="/img/buttonmaschine.jpeg"></a></div>
                <div class="event"><a href="ausleih.html">Buttonmaschine</a></div>
                <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                  <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                  </svg> Ausleihen</a></div>
              </div>
              <div class="eventWrap ausleih active">
                <div class="tag"><div class="wrapTag"><span class="main">Ausleihgerät</span><span>Textil</span></div></div>
                <div class="location">Haus 21, Textilwerkstatt</div>
                <div class="image"><a href="ausleih.html"><img src="/img/bernina.jpeg"></a></div>
                <div class="event"><a href="ausleih.html">Haushaltnähmaschine Bernina</a></div>
                <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                  <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                  </svg> Ausleihen</a></div>
              </div>
              <div class="eventWrap maschine active">
                <div class="tag"><div class="wrapTag"><span class="main">Maschine</span><span>Keramik</span></div></div>
                <div class="location">Haus 21, Textilwerkstatt</div>
                <div class="image"><a href="maschine.html"><img src="/img/keramikofen.jpeg"></a></div>
                <div class="event"><a href="maschine.html">Keramikofen</a></div>
                <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                  <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                  </svg> Reservieren</a></div>
              </div>
              <div class="eventWrap maschine active">
                <div class="tag"><div class="wrapTag"><span class="main">Maschine</span><span>Medien</span></div></div>
                <div class="location">Haus 13, Medienwerkstatt</div>
                <div class="image"><a href="maschine.html"><img src="/img/lasercutter.jpeg"></a></div>
                <div class="event"><a href="maschine.html">Lasercutter</a></div>
                <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                  <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                  </svg> Reservieren</a></div>
              </div>
              <div class="eventWrap raum active">
                <div class="tag"><div class="wrapTag"><span class="main">Raum</span><span>Sitzung</span></div></div>
                <div class="location">Haus 19, Raum 1</div>
                <div class="image"><a href="raum.html"><img src="/img/haus19.jpeg"></a></div>
                <div class="event"><a href="raum.html">Sitzungszimmer Wasserwerkstrasse 19</a></div>
                <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                  <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                  </svg> Reservieren</a></div>
              </div>
              <div class="eventWrap raum active">
                <div class="tag"><div class="wrapTag"><span class="main">Raum</span><span>Kurs</span></div></div>
                <div class="location">Haus 21, Tanzdach</div>
                <div class="image"><a href="raum.html"><img src="/img/tanzdach.jpeg"></a></div>
                <div class="event"><a href="raum.html">Tanzdach</a></div>
                <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                  <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                  </svg> Reservieren</a></div>
              </div>
              <div class="eventWrap raum active">
                <div class="tag"><div class="wrapTag"><span class="main">Raum</span><span>Event</span></div></div>
                <div class="location">Haus 21, Werk 21</div>
                <div class="image"><a href="raum.html"><img src="/img/werk21.jpeg"></a></div>
                <div class="event"><a href="raum.html">Werk 21</a></div>
                <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                  <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                  </svg> Reservieren</a></div>
              </div>
            </div>
        </div>
        `;
    }
}
  
customElements.define('reservieren-component', Reservieren);

/*Views*/
function listreservierenview(){
  const program = document.querySelectorAll(".reservieren");

  program[1].classList.add("list");
  program[1].classList.remove("kachel");

  const kacheln = document.querySelectorAll(".reservieren.list .kacheln");
  const liste = document.querySelectorAll(".reservieren.list .liste");

  kacheln[0].src="/img/Menu_Programm_Kachel.svg";
  liste[0].src="/img/Menu_Programm_List.svg";
}

function kachelreservierenview(){
  const program = document.querySelectorAll(".reservieren");

  program[1].classList.remove("list");
  program[1].classList.add("kachel");

  const kacheln = document.querySelectorAll(".reservieren.kachel .kacheln");
  const liste = document.querySelectorAll(".reservieren.kachel .liste");

  kacheln[0].src="/img/Menu_Programm_Kachel_active.svg";
  liste[0].src="/img/Menu_Programm_List_deaktiv.svg";
}