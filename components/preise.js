const preiseTemplate = document.createElement('template');

class Preise extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div class="preise component active">
            <h2>Preise</h2>
            <div class="preisOuter">
                <div class="preisWrap header">
                    <div  class="description"></div>
                    <div class="content">Digital / Medien / Metall / Textil</div>
                </div>
                <div class="preisWrap">
                    <div  class="description">unter 18 Jahre (u18)</div>
                    <div class="content">5.–/Tag</div>
                </div>
                <div class="preisWrap">
                    <div  class="description">unter 28 Jahre (u28)</div>
                    <div class="content">10.–/Tag</div>
                </div>
                <div class="preisWrap">
                    <div  class="description">über 28 Jahre (ü28)</div>
                    <div class="content">10.–/Stunde <small>max. 50.–/Tag</small></div>
                </div>
                <div class="preisWrap header">
                    <div  class="description"></div>
                    <div class="content">Keramik / Photolab</div>
                </div>
                <div class="preisWrap">
                    <div  class="description">unter 18 Jahre (u18)</div>
                    <div class="content">3.–/Tag</div>
                </div>
                <div class="preisWrap">
                    <div  class="description">unter 28 Jahre (u28)</div>
                    <div class="content">5.–/Tag</div>
                </div>
                <div class="preisWrap">
                    <div  class="description">über 28 Jahre (ü28)</div>
                    <div class="content">5.–/Stunde <small>max. 25.–/Tag</small></div>
                </div>
                <div class="preisWrap header">
                    <div  class="description"></div>
                    <div class="content">Laser / Plasma / CNC</div>
                </div>
                <div class="preisWrap">
                    <div  class="description"></div>
                    <div class="content">10.–/Stunde</div>
                </div>
                <div class="preisWrap header">
                    <div  class="description"></div>
                    <div class="content">Kulturlegi</div>
                </div>
                <div class="preisWrap">
                    <div  class="description"></div>
                    <div class="content">50% Rabatt auf Werkbereich-Nutzung</div>
                </div>
            </div>
        </div>
    `;
    }
}
  
customElements.define('preise-component', Preise);