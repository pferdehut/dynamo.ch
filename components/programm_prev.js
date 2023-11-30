const programmPrevTemplate = document.createElement('template');

class ProgrammPrev extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div class="events program kachel component active">
          <h2>Vorschläge</h2>
          <div class="menuprogram">
          <button onclick="kachelprogramview()"><img class="kacheln" src="/img/Menu_Programm_Kachel_active.svg"></button>
          <button onclick="listprogramview()"><img class="liste" src="/img/Menu_Programm_List_deaktiv.svg"></button>
          </div>
          <div class="happenings">
            <div class="datepicker">
              <div class="day">06</div>
              <div class="month">08</div>
              <div class="year">2023</div>
            </div>
            <div class="days">
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
            <div class="datepicker sticky">
              <div class="day">08</div>
              <div class="month">08</div>
              <div class="year">2023</div>
            </div>
            <div class="days">
              <div class="eventWrap konzert active">
                <div class="hours">19:30</div>
                <div class="tag"><div class="wrapTag"><span class="main">Konzert</span><span>Punk</span><span>Rock</span></div></div>
                <div class="location">Haus 21, Werk 21</div>
                <div class="image"><a href="event.html"><img src="/img/konzert_2.jpg"></a></div>
                <div class="event"><a href="event.html">Bad Cop/Bad Cop</a></div>
                <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                  <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                  </svg> Tickets</a></div>
              </div>
              <div class="eventWrap konzert active">
                <div class="hours">20:00</div>
                <div class="tag"><div class="wrapTag"><span class="main">Konzert</span><span>Rock</span><span>Indie</span></div></div>
                <div class="location">Haus 21, Saal</div>
                <div class="image"><a href="event.html"><img src="/img/konzert_3.jpeg"></a></div>
                <div class="event"><a href="event.html">Mike Love</a></div>
                <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                  <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                  </svg> Tickets</a></div>
              </div>
            </div>
          </div>
        <button class="weitere"><a href="programm.html">Weiter stöbern</a></button>
      </div>
    `;
    }
}
  
customElements.define('programm-prev-component', ProgrammPrev);

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