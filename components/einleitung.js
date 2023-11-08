const einleitungTemplate = document.createElement('template');

class Einleitung extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div class="einleitung">
            Jugendkulturhaus, Freiraum, unfreiwilliges Flussbad<br>Tag us 👉 #madeatdynamo
        </div>
    `;
    }
}
  
customElements.define('einleitung-component', Einleitung);