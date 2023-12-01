const programmTemplate = document.createElement('template');

class Programm extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div class="events program kachel component active">
          <div class="inputDate">
            <input type="date" class="datepicker" />
            <button id="date" onclick="datepicker()">
              <span>Datum</span>
              <img src="img/datepicker.svg" />
            </button>
          </div>
          <div class="menuprogram">
            <button onclick="kachelprogramview()"><img class="kacheln" src="img/Menu_Programm_Kachel_active.svg"></button>
            <button onclick="listprogramview()"><img class="liste" src="img/Menu_Programm_List_deaktiv.svg"></button>
          </div>
          <div class="happenings">
          <div class="datepicker sticky">
          <div class="day">05 <span class="sup"><svg xmlns="http://www.w3.org/2000/svg" width="71" height="39" viewBox="0 0 71 39" fill="none" class="arrow">
            <path d="M1.91626 37.0835L36.9163 2.0835M69.0835 37.0835L34.0835 2.08349" stroke="black" stroke-width="10"/>
            </svg></span><span class="sub"><svg xmlns="http://www.w3.org/2000/svg" width="71" height="39" viewBox="0 0 71 39" fill="none" class="arrow">
              <path d="M69.1672 2L34.1672 37M1.99998 2L37 37" stroke="black" stroke-width="10"/>
              </svg></span>
          </div>
          <div class="month">08 <span class="sup"><svg xmlns="http://www.w3.org/2000/svg" width="71" height="39" viewBox="0 0 71 39" fill="none" class="arrow">
            <path d="M1.91626 37.0835L36.9163 2.0835M69.0835 37.0835L34.0835 2.08349" stroke="black" stroke-width="10"/>
            </svg></span><span class="sub"><svg xmlns="http://www.w3.org/2000/svg" width="71" height="39" viewBox="0 0 71 39" fill="none" class="arrow">
              <path d="M69.1672 2L34.1672 37M1.99998 2L37 37" stroke="black" stroke-width="10"/>
              </svg></span>
          </div>
          <div class="year">2023 <span class="sup"><svg xmlns="http://www.w3.org/2000/svg" width="71" height="39" viewBox="0 0 71 39" fill="none" class="arrow">
            <path d="M1.91626 37.0835L36.9163 2.0835M69.0835 37.0835L34.0835 2.08349" stroke="black" stroke-width="10"/>
            </svg></span><span class="sub"><svg xmlns="http://www.w3.org/2000/svg" width="71" height="39" viewBox="0 0 71 39" fill="none" class="arrow">
              <path d="M69.1672 2L34.1672 37M1.99998 2L37 37" stroke="black" stroke-width="10"/>
              </svg></span>
          </div>
          <div class="datepickerNav">
              <div class="last"></div>
              <div class="next"></div>
          </div>
        </div>
        <div class="days">
          <div class="eventWrap konzert active">
            <div class="hours">20:00</div>
            <div class="tag"><div class="wrapTag"><span class="main">Konzert</span><span>Punk</span><span>Rock</span></div></div>
            <div class="location">Haus 21, Saal</div>
            <div class="image"><a href="event.html"><img src="img/Soulfly.jpeg"></a></div>
            <div class="event"><a href="event.html">Soulfly</a></div>
            <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
              <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
              </svg> Tickets</a></div>
          </div>
        </div>
        <div class="datepicker sticky">
          <div class="day">06 <span class="sup"><svg xmlns="http://www.w3.org/2000/svg" width="71" height="39" viewBox="0 0 71 39" fill="none" class="arrow">
            <path d="M1.91626 37.0835L36.9163 2.0835M69.0835 37.0835L34.0835 2.08349" stroke="black" stroke-width="10"/>
            </svg></span><span class="sub"><svg xmlns="http://www.w3.org/2000/svg" width="71" height="39" viewBox="0 0 71 39" fill="none" class="arrow">
              <path d="M69.1672 2L34.1672 37M1.99998 2L37 37" stroke="black" stroke-width="10"/>
              </svg></span></div>
          <div class="month">08 <span class="sup"><svg xmlns="http://www.w3.org/2000/svg" width="71" height="39" viewBox="0 0 71 39" fill="none" class="arrow">
            <path d="M1.91626 37.0835L36.9163 2.0835M69.0835 37.0835L34.0835 2.08349" stroke="black" stroke-width="10"/>
            </svg></span><span class="sub"><svg xmlns="http://www.w3.org/2000/svg" width="71" height="39" viewBox="0 0 71 39" fill="none" class="arrow">
              <path d="M69.1672 2L34.1672 37M1.99998 2L37 37" stroke="black" stroke-width="10"/>
              </svg></span></div>
          <div class="year">2023 <span class="sup"><svg xmlns="http://www.w3.org/2000/svg" width="71" height="39" viewBox="0 0 71 39" fill="none" class="arrow">
            <path d="M1.91626 37.0835L36.9163 2.0835M69.0835 37.0835L34.0835 2.08349" stroke="black" stroke-width="10"/>
            </svg></span><span class="sub"><svg xmlns="http://www.w3.org/2000/svg" width="71" height="39" viewBox="0 0 71 39" fill="none" class="arrow">
              <path d="M69.1672 2L34.1672 37M1.99998 2L37 37" stroke="black" stroke-width="10"/>
              </svg></span></div>
          <div class="datepickerNav">
              <div class="last"></div>
              <div class="next"></div>
          </div>  
       </div>
        <div class="days">
          <div class="eventWrap kurs active">
            <div class="hours">10:00</div>
            <div class="tag"><div class="wrapTag"><span class="main">Kurs</span><span>Metall</span></div></div>
            <div class="location">Haus 15, Metallwerkstatt</div>
            <div class="image"><a href="kurs.html"><img src="img/ohrschmuck.jpg"></a></div>
            <div class="event"><a href="kurs.html">Ohrschmuck aus Silber</a></div>
            <div class="tickets"><a href="kurs.html#anmelden">
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
            <div class="image"><a href="kurs.html"><img src="img/metallbearbeitung.jpg"></a></div>
            <div class="event"><a href="kurs.html">Einführungskurs Metall-Bearbeitung</a></div>
            <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
              <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
              </svg> Anmelden</a></div>
          </div>
          <div class="eventWrap kurs active">
            <div class="hours">11:00</div>
            <div class="tag"><div class="wrapTag"><span class="main">Kurs</span><span>Textil</span></div></div>
            <div class="location">Haus 21, Textilwerkstatt</div>
            <div class="image"><a href="event.html"><img src="img/textil.jpeg"></a></div>
            <div class="event"><a href="event.html">Bad Design</a></div>
            <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
              <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
              </svg> Anmelden</a></div>
          </div>
          <div class="eventWrap konzert active">
            <div class="hours">19:30</div>
            <div class="tag"><div class="wrapTag"><span class="main">Konzert</span><span>Rock</span><span>Indie</span></div></div>
            <div class="location">Haus 21, Werk 21</div>
            <div class="image"><a href="event.html"><img src="img/konzert.jpeg"></a></div>
            <div class="event"><a href="event.html">Pulley & The Rumperts</a></div>
            <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
              <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
              </svg> Tickets</a></div>
          </div>
        </div>
        <div class="datepicker sticky">
          <div class="day">08 <span class="sup"><svg xmlns="http://www.w3.org/2000/svg" width="71" height="39" viewBox="0 0 71 39" fill="none" class="arrow">
            <path d="M1.91626 37.0835L36.9163 2.0835M69.0835 37.0835L34.0835 2.08349" stroke="black" stroke-width="10"/>
            </svg></span><span class="sub"><svg xmlns="http://www.w3.org/2000/svg" width="71" height="39" viewBox="0 0 71 39" fill="none" class="arrow">
              <path d="M69.1672 2L34.1672 37M1.99998 2L37 37" stroke="black" stroke-width="10"/>
              </svg></span></div>
          <div class="month">08 <span class="sup"><svg xmlns="http://www.w3.org/2000/svg" width="71" height="39" viewBox="0 0 71 39" fill="none" class="arrow">
            <path d="M1.91626 37.0835L36.9163 2.0835M69.0835 37.0835L34.0835 2.08349" stroke="black" stroke-width="10"/>
            </svg></span><span class="sub"><svg xmlns="http://www.w3.org/2000/svg" width="71" height="39" viewBox="0 0 71 39" fill="none" class="arrow">
              <path d="M69.1672 2L34.1672 37M1.99998 2L37 37" stroke="black" stroke-width="10"/>
              </svg></span></div>
          <div class="year">2023 <span class="sup"><svg xmlns="http://www.w3.org/2000/svg" width="71" height="39" viewBox="0 0 71 39" fill="none" class="arrow">
            <path d="M1.91626 37.0835L36.9163 2.0835M69.0835 37.0835L34.0835 2.08349" stroke="black" stroke-width="4"/>
            </svg></span><span class="sub"><svg xmlns="http://www.w3.org/2000/svg" width="71" height="39" viewBox="0 0 71 39" fill="none" class="arrow">
              <path d="M69.1672 2L34.1672 37M1.99998 2L37 37" stroke="black" stroke-width="10"/>
              </svg></span></div>
          <div class="datepickerNav">
              <div class="last"></div>
              <div class="next"></div>
          </div>  
        </div>
        <div class="days">
          <div class="eventWrap konzert active">
            <div class="hours">19:30</div>
            <div class="tag"><div class="wrapTag"><span class="main">Konzert</span><span>Punk</span><span>Rock</span></div></div>
            <div class="location">Haus 21, Werk 21</div>
            <div class="image"><a href="event.html"><img src="img/konzert_2.jpg"></a></div>
            <div class="event"><a href="event.html">Bad Cop/Bad Cop</a></div>
            <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
              <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
              </svg> Tickets</a></div>
          </div>
          <div class="eventWrap konzert active">
            <div class="hours">20:00</div>
            <div class="tag"><div class="wrapTag"><span class="main">Konzert</span><span>Rock</span><span>Indie</span></div></div>
            <div class="location">Haus 21, Saal</div>
            <div class="image"><a href="event.html"><img src="img/konzert_3.jpeg"></a></div>
            <div class="event"><a href="event.html">Mike Love</a></div>
            <div class="tickets"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
              <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
              </svg> Tickets</a></div>
          </div>
        </div>
      </div>
      </div>
    `;
    }
}
  
customElements.define('programm-component', Programm);

/*Views*/
function listprogramview(){
  const program = document.getElementsByClassName("events");

  program[0].classList.add("list");
  program[0].classList.remove("kachel");

  const kacheln = document.querySelectorAll(".events.list .kacheln");
  const liste = document.querySelectorAll(".events.list .liste");

  kacheln[0].src="img/Menu_Programm_Kachel.svg";
  liste[0].src="img/Menu_Programm_List.svg";
}

function kachelprogramview(){
  const program = document.getElementsByClassName("events");

  program[0].classList.remove("list");
  program[0].classList.add("kachel");

  const kacheln = document.querySelectorAll(".events.kachel .kacheln");
  const liste = document.querySelectorAll(".events.kachel .liste");

  kacheln[0].src="img/Menu_Programm_Kachel_active.svg";
  liste[0].src="img/Menu_Programm_List_deaktiv.svg";
}

function datepicker(){
  const input = document.getElementsByClassName("datepicker");
  try {
    input[0].showPicker();
  } catch (error) {
    window.alert(error);
  }
}