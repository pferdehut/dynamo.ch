const historyTemplate = document.createElement('template');

class History extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div class="history component active">
            <h2>Geschichte</h2>
            <div class="etappe">
                <h3><small>1772 – 1842</small> Heilbad zum Brauhaus Drahtschmidli</h3>
                <p>Das Dynamo-Areal hat eine bewegte Geschichte hinter sich. Von 1772 bis 1842 befand sich hier ein Heilbad. Danach erstand Wilhelm Reiser das Areal und errichtete das Brauhaus Drahtschmidli. Das Bierbrauen klappte jedoch nicht lange - wegen einer Sprengung war das Bier im Lager trübe und dadurch unverkaufbar geworden. Dies bedeutete das Ende des Brauhauses; 1906 kam es in Besitz der Stadt Zürich.</p>
            </div>
            <div class="etappe">
                <h3><small>Ab 1930</small> Anfänge eines Jugendhauses</h3>
                <p>Ab den 1930ern schwirrte die Idee eines Jugendhauses in der Luft. Der Zweite Weltkrieg schob die Umsetzung dieser Idee nur vorübergehend auf: Ende der Fünfzigerjahre sprach die Stadt dem Verein Zürcher Jugendhaus (VZJ) das Drahtschmidli zu.</p>
                <p>In den 68er-Jahren wurden die Forderungen nach einem Jugendhaus in der Stadt Zürich immer lauter. Nach vielen Diskussionen öffnete die Stadt schliesslich den Lindenhofbunker als Jugendzentrum. Knapp siebzig Tage nach seiner Eröffnung wurde dieser bereits wieder geschlossen. Wegen Drogenproblemen, argumentierten die Behörden; weil die Behörden uns die Selbstverwaltung nicht zugestehen, sagten die Jugendlichen. Diskussionen um das Drahtschmidli-Areal rückten damit wieder in den Vordergrund.</p>
            </div>
            <div class="etappe">
                <h3><small>80er Jahre</small> Züri brännt!</h3>
                <p>In den 80er Jahren formierte sich eine Jugendbewegung und ging auf die Strassen von Zürich. Die Forderungen: Mehr Freiheit für junge Kultur und mehr Raum, um diese auszuleben. Das autonome Jugendzentrum AJZ schloss nach kurzer Zeit wieder und wurde später sogar abgerissen. Das neue Jugendhaus Drahtschmidli, die städtische Antwort auf den Abriss des AJZ, war keine Lösung: Die Jugendlichen sahen darin einen „Sozibunker“. Das Drahtschmidli schloss wieder, und die Stadt dachte abermals über ein neues Konzept nach.</p>
            </div>
            <div class="etappe">
                <h3><small>Ab 1988</small>Dynamo – selber treten, dann wird’s hell.</h3>
                <p>Unter dem Namen «Dynamo» wurde das Jugendkulturhaus 1988 als Angebot des Jugendamtes eröffnet. Das neue Konzept sah vor, jugend- und subkulturelle Strömungen zu fördern und die dazu notwendigen Freiräume und Ressourcen zur Verfügung zu stellen. Die Angebote reichten von Raumvermietungen über Kurse und Veranstaltungen bis hin zu fachlicher und technischer Unterstützung bei Projekten.</p>
                <p>Als der Platzspitz 1992 geschlossen wurde, zog die Drogenszene an den Oberen Letten weiter – direkt vor die Haustüre des Dynamo. Das hinderte die Weiterentwicklung des Dynamo jedoch nicht. In Zusammenarbeit mit dem Jugendamt wurden die Angebote um das Grafikatelier, die Metallwerkstatt und das Restaurant als Arbeitsintegrationsprojekte erweitert.</p>
            </div>
            <div class="etappe">
                <h3><small>Ab 1998</small>Gekommen, um zu bleiben.</h3>
                <p>Der Weg ins Jugendkulturhaus war wieder offen, als die Drogenpolitik der Stadt die offene Szene 1995 am Oberen Letten zum Verschwinden brachte.</p>
                <p>Ab 1998 bis Ende 2000 löste das Dynamo die Arbeitsintegrationsprojekte auf und wandelte die Werkstätten nach und nach in offene Werkstätten um – das heisst, die Angebote waren nun zugänglich für alle. Nutzen sollten diese Werkstätten hauptsächlich Jugendliche und junge Erwachsene von 16 bis 28 Jahren. Neu stiessen die Textil- und Schmuckwerkstatt dazu. Im Keller entstand der Musikclub Werk21 für Konzerte und Partys.</p>  
            </div>
            <div class="etappe">
                <h3><small>Ab 2006</small>Stete Weiterentwicklung</h3>
                <p>Mit Einführung der fünf Sozialzentren wurde das Jugendkulturhaus Dynamo dem Sozialzentrum Ausstellungsstrasse der Sozialen Dienste der Stadt Zürich zugeordnet.</p>
                <p>Immer wieder passte das Dynamo sein Angebot den Bedürfnissen der Jugendlichen und jungen Erwachsenen an. So entstanden zum Beispiel die «Dynamic Days», welche sich bis heute grosser Beliebtheit erfreuen. Neu organisierte das Dynamo auch einen Teil des Programm des Zürcher Sportferienlagers Fiesch. Eine weitere, bis heute bestehende Neuerung, waren die Wochenbars: Jugendliche können an einem fixen Abend pro Woche ihre eigene «Bar» im Werk21 betreiben.</p>
                <p>Die 2006 begonnene Erneuerung der Abwasseranlage bedeutete grosse Veränderungen. Die Baustelle nahm den gesamten Vorplatz ein und das Restaurant wich für die folgenden zwei Jahre auf ein Floss über der Limmat aus. Am 20. Geburtstag des Dynamo weihte man den neu gestalteten Vorplatz und die ebenfalls neu gebaute Metallwerkstatt ein.</p>  
            </div>
            <div class="etappe">
                <h3><small>Ab 2006</small>Pickeltouren und Raumbörse</h3>
                <p>Während des Legislaturschwerpunktes «Jugend in Zürich: Freiräume, Arbeit und Sicherheit» von 2006 bis 2010 wurden dem Dynamo zwei Teilprojekte zugeordnet. Die «Pickeltouren» ermöglichten Jugendlichen und jungen Erwachsenen als Stadtführer und Stadtführerinnen ihre Sicht auf ihre Stadt und ihren Alltag wiederzugeben. Das zweite aus diesem Legislaturschwerpunkt hervorgegangene Projekt ist die Raumbörse für junge Kreative. Da in Zürich bekanntermassen günstiger Raum Mangelware ist, wurde eine Stelle geschaffen, die junge Menschen bei der Suche nach Atelier - oder Projekträumenunterstützt.</p>
            </div>
            <div class="etappe">
                <h3><small>2013</small>25 Jahre Dynamo</h3>
                <p>Mit Konzerten von Tim Freitag und Boyoom Connective, einer Podiumsdiskussion zum Thema Jugend, Kultur und Raum, Theater- und Tanzaufführungen und einer Freestyle Convention feierte das Dynamo Ende August 2013 sein 25-jähriges Bestehen.</p>
                <p>Nach der Jubiläumsfeier nahm das Dynamo die nächste grosse Hürde in Angriff: Alle drei Liegenschaften wurden ab Oktober 2013 etappenweise renoviert. Das Dynamo nutzte diese Bauphase, um die eigenen Angebote zu überdenken und Raum für neue Inhalte zu schaffen. Konkret sollten neue Technologien, andere Formen der Mitgestaltung durch die Nutzenden und neue Veranstaltungsreihen angegangen werden.</p>  
            </div>
            <div class="etappe">
                <h3><small>Ab 2013</small>Alles neu im Dynamo</h3>
                <p>Ende Sommer, inmitten der Renovation des Haupthauses, begann die Umsetzung der während Monaten erarbeiteten Neuerungen. Eine der wichtigsten ist der neu entstandene Werkbereich, in welchen die einzelnen Werkstätten zusammengelegt wurden. Gleichzeitig wuchs der Maschinenpark um einen Lasercutter und die Öffnungszeiten des Werkbereichs verlängerten sich bis 21 Uhr. Eine neue Form der Mitgestaltung ermöglicht das Pop-Up- Atelier: Dieser Raum bietet Platz für zeitlich beschränkte, ungewöhnliche Projekte. Die überarbeitete Homepage rundet die Angebotsüberprüfung ab.</p>
            </div>
        </div>
    `;
    }
}
  
customElements.define('history-component', History);

const boxes = document.getElementsByClassName('etappe');

for (const box of boxes) {
  box.addEventListener('click', function handleClick() {
    box.classList.toggle('active');
  });
}