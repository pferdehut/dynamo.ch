const textblockTemplate = document.createElement('template');

class Textblock extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <div class="textblock component active">
                <h2>Infos</h2>
                <div class="contentWrap">
                    <p>Sowohl alte als auch moderne Kulturen sind stark von Ritualen abhängig. Von religiösen Vorgängen, die Jahrtausende zurückreichen, bis hin zu täglichen Routinen des 21. Jahrhunderts, wie der Überprüfung von Social Media, zieht die Menschheit zu rituellen Verhaltensweisen für den Anschein von Ordnung und dem Anschein von Kontrolle über das Chaos des Lebens. Vielleicht mehr als jede andere Kunstform definiert zeremonielles Verhalten Heavy Metal. Tausende von Fans beten am Altar eines Redners oder versammeln sich persönlich zur Predigt einer Live-Show.</p>
                    <p>Zwei Jahrzehnte nach ihrer geschichtsträchtigen Karriere entwickeln sich Soulfly mit jedem weiteren Album und jeder Tournee zu einem fast kultischen Eifer. Soulfly ist Max Cavalera, Max Cavalera ist Soulfly. Der charismatische Frontmann hat als wegweisender Pionier und Musiker trotz Millionen verkaufter Tonträger nichts an seiner Authentizität sowie dem wuterfüllten inneren Antrieb eines Strassenkindes verloren. Cavalera ist weltweit einer der produktivsten Musiker der Heavy Metal-Szene. Am Samstag, 05. August 2023 gibt es im Dynamo Zürich ultimative Thrash-Riffs, heiser-böse Shouts und beinharte Drums.</p>
                    <p>Ohne den charismatischen, ehemaligen Sepultura-Frontmann Cavalera gäbe es Soulfly nicht. Seine Botschaft ist klar: Überall, wo sich Menschen mit Entrechtung und Unterdrückung konfrontiert finden, dienen ihnen Soulfly-Songs als Hymnen. So auch auf dem letzten Album Totem, welches als weiterer Soulfly-Meilenstein betrachtet werden darf.<br>Umso mehr dürfen sich die Fans darauf freuen, Soulfly wieder live zu erleben. Am Samstag, 05. August 2023 bringen Cavalera und seine Crew die Wände im Dynamo Zürich zum Zittern.</p>
                </div>
            </div>
    `;
    }
}
  
customElements.define('textblock-component', Textblock);