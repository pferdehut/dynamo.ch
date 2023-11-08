const kontaktTemplate = document.createElement('template');

class Kontakt extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <div class="bereicheWrap kontaktDynamo component active">
                <h2>Kontakt</h2>
                <div class="bereich">
                    <div class="bereichTitel">Sekretariat</div>
                    <div class="adresse">
                        <p>
                            Stadt Zürich<br>
                            Jugendkulturhaus Dynamo<br>
                            Wasserwerkstrasse 21<br>
                            CH-8006 Zürich
                        </p>
                    </div>
                    <div class="hours">
                        <p>Di – Fr: 14:00 – 19:00</p>
                    </div>
                    <div class="contact">
                        <p>
                            044 415 76 60<br>
                            <a href="mailto:info@dynamo.ch">info@dynamo.ch</a>
                        </p>
                    </div>
                </div>
                <div class="bereich">
                    <div class="bereichTitel">Raumvermietung</div>
                    <div class="hours">
                        <p>Di – Fr: 14:00 – 19:00</p>
                    </div>
                    <div class="contact">
                        <p>
                            044 415 76 60<br>
                            <a href="mailto:room@dynamo.ch">room@dynamo.ch</a>
                        </p>
                    </div>
                </div>
                <div class="bereich">
                    <div class="bereichTitel">Technik</div>
                    <div class="hours">
                        <p>Di – Fr: 14:00 – 19:00</p>
                    </div>
                    <div class="contact">
                        <p>
                            044 415 76 58<br>
                            <a href="mailto:technik@dynamo.ch">technik@dynamo.ch</a>
                        </p>
                    </div>
                </div>
                <div class="bereich">
                    <div  class="bereichTitel">Restaurant & Bar<br>Chuchi am Wasser</div>
                    <div class="hours">
                        <p>
                            Sommeröffnungszeiten:<br>
                            Di – So: 9:00 – 24:00<br>
                        </p>
                        <p>
                            Winteröffnungszeiten:<br>
                            Di / Mi / Sa und So: 10:30 – 21:00<br>
                            Do / Fr: 10:30 – 23:00<br>
                        </p>
                    </div>
                    <div class="contact">
                        <p>
                            Reservationen: 044 415 76 90<br>
                            <a href="mailto:restaurant@dynamo.ch">restaurant@dynamo.ch</a>
                        </p>
                    </div>
                </div>
                <div class="bereich">
                    <div class="bereichTitel">Werkbereich</div>
                    <div class="hours">
                        <p>
                        Mi – Fr: 14:00 – 21:00*<br>
                        Sa: 14:00 – 19:00<br>
                        <small>*Wenn niemand da, schliessen wir 1 Stunde früher!</small>
                        </p>
                    </div>
                    <div class="contact">
                        <p>
                            044 415 76 73<br>
                            <a href="mailto:werkbereich@dynamo.ch">werkbereich@dynamo.ch</a>
                        </p>
                    </div>
                    <div class="bereiche">
                        <p>
                            <b>Werkbereich 13</b>&nbsp;/ Laser, Siebdruck, Riso<br>
                            044 415 76 73
                        </p>
                        <p>
                            <b>Werkbereich 15</b>&nbsp;/ Metall, Sandstrahlen<br>
                            044 415 76 76
                        </p>
                        <p>
                            <b>Werkbereich 17</b>&nbsp;/ 3D Druck, CNC, Keramikdruck, Thermoform<br>
                            044 415 76 84
                        </p>
                        <p>
                            <b>Werkbereich 21</b>&nbsp;/ Textil, Buttons, Leder, Keramik, Fotolabor<br>
                            044 415 76 77
                        </p>
                    </div>
                </div>
            </div>
    `;
    }
}
  
customElements.define('kontakt-component', Kontakt);