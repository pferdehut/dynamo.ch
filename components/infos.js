const infosTemplate = document.createElement('template');

class Infos extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div class="infos component active">
            <h2>Spezifikationen</h2>
            <div class="spezifikationen">
                <div class="infoWrap">
                    <div  class="description">Freie Plätze</div>
                    <div class="content">6</div>
                </div>
                <div class="infoWrap">
                    <div  class="description">Kosten</div>
                    <div class="content">U28 oder Kulturlegi: 170.– (exkl. Silber)<br>Ü28 210.– (exkl. Silber)</div>
                </div>
                <div class="infoWrap">
                    <div  class="description"></div>
                    <div class="content">Silber muss individuell über das Dynamo bezogen werden. (Preis: 2.5.-/g)<br>Meiner Einschätzung nach muss nicht mit mehr als 30.- für Silber gerechnet werden. </div>
                </div>
                <div class="infoWrap">
                    <div  class="description">Bezahlung</div>
                    <div class="content">Cash oder Twint</div>
                </div>
                <div class="infoWrap">
                    <div  class="description">Ort</div>
                    <div class="content">Haus 15, Metallwerkstatt<span class="lageplan"><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                    <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                    </svg> Lageplan</a></span></div>
                </div>
                <div class="infoWrap">
                    <div  class="description">Veranstalter*in</div>
                    <div class="content">Enea<br>077 431 56 91<br><a href="">enealalive12@gmail.com</a></div>
                </div>
            </div>
        </div>
    `;
    }
}
  
customElements.define('infos-component', Infos);