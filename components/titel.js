const titleTemplate = document.createElement('template');
const page = document.querySelector('title').textContent;

class Title extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = 
        `<h1>${page}</h1>`
    ;
    }
}
  
customElements.define('title-component', Title);