const footerTemplate = document.createElement('template');

class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <footer id="footer">
            <div class="newsletter">
                <div class="question">Möchtest du auf dem Laufenden bleiben? Dann abonniere unseren Newsletter:</div>
                <form class="input">
                    <input type="email" id="email" placeholder="E-Mail*" required />
                    <button type="submit" class="submit">Senden</button>
                </form>
            </div>
            <div class="links">
                <div class="socialmedia">
                    <span><a href="http://www.facebook.com/DynamoZurich" target="_blank" rel="noopener">Facebook<br></a></span>
                    <span><a href="https://www.instagram.com/dynamo_zuerich" target="_blank" rel="noopener">Instagram<br></a></span>
                    <span><a href="https://www.youtube.com/" target="_blank" rel="noopener">Youtube</a><br></span>
                </div>
                <div class="intern">
                    <span><a href="info.html#areal" rel="noopener">Lageplan</a></span>
                    <span><a href="dynamo.html#jobs">Jobs<br></a></span>
                    <span><a href="">Impressum</a></span>
                    <span><a href="">Login</a></span>
                </div>
            </div>
            <div class="kontakt">
                <p>
                    Jugendkulturhaus Dynamo<br>
                    Wasserwerkstrasse 21<br>
                    CH-8006 Zürich
                </p>
                <p>
                    +41 44 415 76 80<br>
                    <a href="mailto:info@dynamo.ch">info@dynamo.ch</a>
                </p>
            </div>
            <div class="zugehoerigkeit"><img class="stadtzuerich" src="img/zugehoerigkeitsmarke.svg"></div>
        </footer>
    `;
    }
}
  
customElements.define('footer-component', Footer);