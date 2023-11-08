const downloadsTemplate = document.createElement('template');

class Downloads extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div class="downloads component active">
            <h2>Downloads</h2>
            <div class="downloadOuter">
                <div class="downloadWrap">
                    <div  class="file">Info Saal</div>
                    <div class="link"><a href="">Download</a></div>
                </div>
                <div class="downloadWrap">
                    <div  class="file">Raumvermietung</div>
                    <div class="link"><a href="">Download</a></div>
                </div>
                <div class="downloadWrap">
                    <div  class="file">Schall- und Lasesrverordnung</div>
                    <div class="link"><a href="">Download</a></div>
                </div>
                <div class="downloadWrap">
                    <div  class="file">Tech Rider</div>
                    <div class="link"><a href="">Download</a></div>
                </div>
                <div class="downloadWrap">
                    <div  class="file">Plot Liste</div>
                    <div class="link"><a href="">Download</a></div>
                </div>
                <div class="downloadWrap">
                    <div  class="file">Patch Liste</div>
                    <div class="link"><a href="">Download</a></div>
                </div>
                <div class="downloadWrap">
                    <div  class="file">Logo Dynamo</div>
                    <div class="link"><a href="">Download</a></div>
                </div>
            </div>
        </div>
    `;
    }
}
  
customElements.define('downloads-component', Downloads);