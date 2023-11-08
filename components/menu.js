const menuTemplate = document.createElement('template');

class Menu extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <div class="menu component active">
                <h2>Mittagsmenü</h2>
                <div class="date"><small>Do, 02/11/2023</small></div>
                <div class="menuWrap">
                    <div class="menuTitle">Menü 1</div>
                    <div class="food">
                        Chili con Carne mit Sauerrahm
                        <div class="dazu">
                            dazu Menüsuppe oder Menüsalat
                        </div>
                    </div>
                    <div class="price">
                        20.50
                    </div>
                    <div class="allergy">
                        G / N / L / W
                    </div>
                </div>
                <div class="menuWrap">
                    <div class="menuTitle">Menü 2</div>
                    <div class="food">
                        Burger mit Pulled Planted Chicken an veganer Cocktailsauce, geröstete Zwiebel, Eisbergsalat, Essiggurke dazu Zitronenkartoffel aus dem Ofen
                        <div class="dazu">
                            dazu Menüsuppe oder Menüsalat
                        </div>
                    </div>
                    <div class="price">
                        21.50
                    </div>
                    <div class="allergy">
                        G / N / W
                    </div>
                </div>
                <div class="menuWrap">
                    <div class="menuTitle">Suppe</div>
                    <div class="food">
                        Kohlrabihaferflockensuppe
                    </div>
                    <div class="price">
                        7.50
                    </div>
                    <div class="allergy">
                        G / N / L / W
                    </div>
                </div>
                <div class="extraInfo">
                    <div class="allergyTitle">Allergie Info</div>
                    <div class="allergyContent">
                        (Lactose L / Weizen W / Nüsse N / Gluten G)
                    </div>
                    <div class="printInfo">
                        Bitte bestelle dein Essen an der Bar und gib deine Tischnummer an Servicemitarbeitenden weiter.<br>
                        Danke und en Guete!
                    </div>
                    <div class="priceInfo">
                        Alle Preise in CHF inkl. 7,7% MWST<br>
                        Unser Fleisch und Geflügel stammt, wenn nicht anders deklariert, aus der Schweiz                    
                    </div>
                </div>
            </div>
    `;
    }
}
  
customElements.define('menu-component', Menu);