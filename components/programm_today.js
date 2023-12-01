const programmTodayTemplate = document.createElement('template');

class ProgrammToday extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div class="heute events program kachel component active">
          <h2>Heute im Dynamo</h2>
          <div class="happenings">
            <div class="days">
              <div class="eventWrap kurs active">
                <div class="hours">10:00</div>
                <div class="tag"><div class="wrapTag"><span class="main">Kurs</span><span>Metall</span></div></div>
                <div class="location">Haus 15, Metallwerkstatt</div>
                <div class="image"><a href="kurs.html"><img src="/img/ohrschmuck.jpg"></a></div>
                <div class="event"><a href="kurs.html">Ohrschmuck aus Silber</a></div>
                <div class="tickets"><a href="/kurs.html#anmelden">
                  <svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                    <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                  </svg>
                  Anmelden</a>
                </div>
              </div>
              <div class="eventWrap kurs active">
                <div class="hours">10:00</div>
                <div class="tag"><div class="wrapTag"><span class="main">Kurs</span><span>Metall</span></div></div>
                <div class="location">Haus 15, Metallwerkstatt</div>
                <div class="image"><a href="kurs.html"><img src="/img/metallbearbeitung.jpg"></a></div>
                <div class="event"><a href="kurs.html">Einführungskurs Metall-Bearbeitung</a></div>
                <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                  <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                  </svg> Anmelden</a></div>
              </div>
              <div class="eventWrap kurs active">
                <div class="hours">11:00</div>
                <div class="tag"><div class="wrapTag"><span class="main">Kurs</span><span>Textil</span></div></div>
                <div class="location">Haus 21, Textilwerkstatt</div>
                <div class="image"><a href="event.html"><img src="/img/textil.jpeg"></a></div>
                <div class="event"><a href="event.html">Bad Design</a></div>
                <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                  <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                  </svg> Anmelden</a></div>
              </div>
              <div class="eventWrap konzert active">
                <div class="hours">19:30</div>
                <div class="tag"><div class="wrapTag"><span class="main">Konzert</span><span>Rock</span><span>Indie</span></div></div>
                <div class="location">Haus 21, Werk 21</div>
                <div class="image"><a href="event.html"><img src="/img/konzert.jpeg"></a></div>
                <div class="event"><a href="event.html">Pulley & The Rumperts</a></div>
                <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                  <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                  </svg> Tickets</a></div>
              </div>
            </div>
          </div>
        <button class="weitere"><a href="programm.html">Zum Programm</a></button>
      </div>
    `;
    }
}
  
customElements.define('programm-today-component', ProgrammToday);

/*Views*/
function listprogramview(){
  const program = document.getElementsByClassName("events");

  program[0].classList.add("list");
  program[0].classList.remove("kachel");

  const kacheln = document.querySelectorAll(".events.list .kacheln");
  const liste = document.querySelectorAll(".events.list .liste");

  kacheln[0].src="/img/Menu_Programm_Kachel.svg";
  liste[0].src="/img/Menu_Programm_List.svg";
}

function kachelprogramview(){
  const program = document.getElementsByClassName("events");

  program[0].classList.remove("list");
  program[0].classList.add("kachel");

  const kacheln = document.querySelectorAll(".events.kachel .kacheln");
  const liste = document.querySelectorAll(".events.kachel .liste");

  kacheln[0].src="/img/Menu_Programm_Kachel_active.svg";
  liste[0].src="/img/Menu_Programm_List_deaktiv.svg";
}