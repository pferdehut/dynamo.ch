const awarenessTemplate = document.createElement('template');

class Awareness extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div class="awareness component active">
            <h2>Awareness</h2>
            <div class="einleitung">
                Uns ist es ein Anliegen im Dynamo einen möglichst diskriminierungssensiblen Raum zu schaffen.<br>
                Wir dulden keinerlei Form von Gewalt, Sexismus, LGBTQIA+ Feindlichkeit, Rassismus, Xenophobie, Ableismus, Ageism und jede andere Form von Diskriminierung.
            </div>
            <div class="content">
            <p>
                Da wir uns gemeinsam im Dynamo bewegen, tragen wir zusammen Verantwortung für ein bewusstes Miteinander:<br>  
            </p>
            <div class="what">
                <p>
                    <b>Wir bedenken,</b>
                </p>
                <ul>
                    <li>dass jeder Mensch unterschiedliche Privilegien und individuelle Grenzen hat. (welche hast du?)</li>
                    <li>dass Grenzüberschreitungen unterschiedliche Formen haben können. (physisch, verbal oder nonverbal)</li>
                    <li>dass die Frage nach z.B. der Herkunft zuweisend und verletzend sein kann. (“Nei, ich meine, vo wo chunsch du würkli?”)</li>
                    <li>dass Kommentare zu Aussehen und Style grenzüberschreitend sein können.</li>
                    <li>...</li>
                </ul>
                <p>
                    <b>Wir vermieden,</b>
                </p>
                <ul>
                    <li>Annahmen über die Herkunft, sexuelle Orientierung oder geschlechtliche Identität anderer</li>
                    <li>Diskriminierende Äusserungen</li>
                </ul>
                <p>
                    <b>Wir versuchen,</b>
                </p>
                <ul>
                    <li>Konsens im Dynamo zu leben "Nur Ja heisst Ja!" (Berühren, Ansprechen, Antanzen)</li>
                    <li>bei Unsicherheiten nachzufragen und offen zu sein für jegliche Antwort.</li>
                    <li>eigene Fehler zu akzeptieren, Unbehagen zuzulassen und daraus neue Erkenntnisse zu gewinnen.</li>
                    <li>unsere Privilegien zu reflektieren und sinnvoll einzusetzen.</li>
                    <li>solidarisch präsent und aufmerksam zu sein, um auf die Sicherheit von allen zu achten.</li>
                    <li>uns bewusst zu sein, wie und wie viel Raum wir einnehmen.</li>
                    <li>verantwortungsvoll zu konsumieren, sodass du deine und die Grenzen anderer wahrnehmen und respektieren kannst.</li>
                </ul>
            </div>
            <h3>Kontakt und Feedback (Anonym)</h3>
            <p>Wenn du dich unwohl fühlst, du Hilfe brauchst oder etwas vorgefallen ist: wende dich an das Dynamopersonal oder melde dich jederzeit über unser Kontaktformular auf der Webseite. Wir nehmen alle Meldungen ernst und versuchen schnell und diskret zu handeln.</p>
            <p>Wir freuen uns, wenn du dich mit uns für ein diskriminierungssensibles Dynamo einsetzt und Anmerkungen und Rückmeldungen zu "Awareness im Dynamo" anbringst. "Awareness im Dynamo" kann sich laufend verändern, ist nicht vollständig oder abschliessend. </p>
            <h3>Bei Veranstaltungen</h3>
            <p>Viele Veranstaltung im Dynamo werden von externen Veranstalter*innen durchgeführt. Unser Awarenesskonzept ist Teil der Veranstaltungsbedingungen. Das bedeutet, dass das Thema Awareness an jeder Veranstaltung unterschiedlich gehandhabt werden kann. (Prinzipiell kannst du dich aber, falls du dich unwohl fühlst oder dir etwas auffällt, an der Bar oder beim Security-Personal melden.) Das Veranstaltungsteam ist deine Anlaufstelle.</p>
            <h3>Dank</h3>
            <p>"Awareness im Dynamo” basiert auf der Vorarbeit von verschiedenen Organisationen wie zum Beispiel Awareness Radical, Raksa und dem Kollektiv Vo da. Ohne die ehrenamtliche Pionierarbeit von vermutlich mehrheitlich betroffenen Personen wäre “Awareness im Dynamo” zudem nicht möglich gewesen.</p>
            </div>
        </div>
    `;
    }
}
  
customElements.define('awareness-component', Awareness);