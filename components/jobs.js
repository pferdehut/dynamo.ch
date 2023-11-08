const jobsTemplate = document.createElement('template');

class Jobs extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div class="history jobs component active">
            <h2>Jobs & Praktika</h2>
            <div class="etappe job">
                <h3><small>Beschäftigungsgrad: 60%</small> Mitarbeiter*in Werkbereich Dynamo mit Schwerpunkt auf digitale Angebote</h3>
                <div class="description">
                <p>Das Dynamo ist das gesamtstädtische zentrale Jugendkulturhaus in Zürich. Als ein Betrieb der Sozialen Dienste bietet es motivierten jungen Menschen kreative Betätigungsmöglichkeiten, Workshops sowie Veranstaltungen an. Der Werkbereich umfasst verschiedene Werkstätten, die von Jugendlichen und jungen Erwachsenen in ihrer Freizeit für eigene Projekte genutzt werden können. Seit gut einem Jahr hat der neue Werkbereich "Digitalwerk" geöffnet. Im Digitalwerk findet sich heute eine CNC-Maschine, diverse 3D-Drucker (Filament, Keramik, Harz) aber auch Hard- und Software zur digitalen Gestaltung, wie 3D-Animationen, Coding, Audio(-visuelle) Postproduktion und vieles mehr.</p>
                <p>Für den Aufbau des Digitalwerks im Jugendkulturhaus Dynamo suchen wir per 1. Januar 2024 oder nach Vereinbarung eine*n <strong>Mitarbeiter*in Werkbereich Dynamo mit Schwerpunkt auf Digitale Angebote, 60 %</strong></p>
              </div>
              <div class="aufgaben">
                <h3>Ihre Aufgaben</h3>
                <ul>
                  <li>Sie entwickeln konzeptionell und operativ die Digitalwerkstatt weiter und stellen ein zeitgemässes, ressourcenorientiertes und am Bedarf &nbsp;der Zielgruppe orientierten Angebot sicher</li>
                  <li>Sie unterstützen unsere Besucher*innen im Werkbereich bei deren Projekten, im Besonderen bei Fragestellungen der digitalen Kreation und Produktion</li>
                  <li>Sie sind verantwortlich für die Wartung der Maschinen und Werkzeuge, den Unterhalt der Hard- und Software sowie dem internen Servernetzwerk</li>
                  <li>Sie arbeiten aktiv an der Weiterentwicklung des Werkbereichs und des gesamten Dynamos mit und übernehmen administrative und organisatorische Aufgaben</li>
                  <li>Sie betreuen und leiten Praktikant*innen fachlich an</li>
                </ul>
              </div>
              <div class="kompetenzen">
                <h3>Sie bringen mit</h3>
                <ul>
                  <li>(Fach-) Hochschulabschluss in der Fachrichtung Game Design, Interaction Design, Informatik, Elektrotechnik und Product- oder Industrial Design</li>
                  <li>Erfahrung in digitaler Kreation und Gestaltungsprozessen (z.B. 3D Modelle und Animationen, Game Design, Virtual Reality, Coding, Appdesign) und digitaler Produktion (z.B. mit 3D Druck, Lasercutter, CNC gesteuerten Geräten) sowie breite Kenntnisse der entsprechenden Software</li>
                  <li>Sinn für Community Building in der Kreativszene</li>
                  <li>Hohe Sozialkompetenz und Vermittlungsfähigkeit gegenüber Jugendlichen und jungen Erwachsenen sowie ausgeprägte Organisationsfähigkeit, Selbständigkeit, Agilität und Teamfähigkeit</li>
                  <li>Bereitschaft zu unregelmässigen Arbeitszeiten, Abend- sowie Samstagschichten</li>
                </ul>
              </div>
              <div class="bieten">
                <h3>Wir bieten Ihnen</h3>
                <p>Eine sinnstiftende, vielseitige Tätigkeit in einem guten Arbeitsklima mit der Möglichkeit ein wertvolles und neues Angebot aktiv mitzuentwickeln sowie einen Arbeitsplatz an einem attraktiven Standort im Herzen von Zürich.&nbsp;In unserer Organisation pflegen wir eine offene und transparente Kommunikation.&nbsp;</p>
              </div>           
            </div>
            <div class="etappe job">
                <h3><small>Beschäftigungsgrad: 60–80%</small> Praktikum Kommunikation</h3>
                <div class="description">
                <p>Das Dynamo ist eine soziokulturelle Einrichtung der Stadt Zürich und organisatorisch dem Sozialzentrum Helvetiaplatz der Sozialen Dienste zugeordnet. Das vielfältige Angebot für Jugendliche und junge Erwachsene umfasst Veranstaltungen, Kurse und Workshops, Werkstätten, Restaurationsbetriebe sowie Raum- und Infrastrukturvermietungen. Nicht zuletzt gehört auch die Raumbörse zum Dynamo. </p>
                <p>Per 1. September suchen wir für die Dauer von 6 bis 12 Monaten eine*n <strong>Praktikant*in Kommunikation, 60–80%</strong></p>
              </div>
              <div class="aufgaben">
                <h3>Ihre Aufgaben</h3>
                <ul>
                  <li>Pflege und Bewirtschaftung der Website: Regelmässiges Aktualisieren der Webseite, Verfassen, Korrigieren, Schreiben von Texten, Bildredaktion, Überprüfen und Kommunizieren des Kurs- und Veranstaltungsprogramms etc.</li>
                  <li>Redaktionelle Betreuung und Versand des Newsletters</li>
                  <li>Selbständige Herstellung von Videobeiträgen für Onlinemedien</li>
                  <li>Content Creation und Content/Community Management der Social-Media-Kanäle</li>
                  <li>Entwicklung von Kampagnekonzeptionen für spezielle Angebot und Projekte</li>
                  <li>Mitarbeit Presse- und Öffentlichkeitsarbeit, Kontaktperson für Medienschaffende</li>
                  <li>Mitglied der PR-Fachgruppe des Dynamos</li>
                  <li>Koordination der verschiedenen analogen & digitalen Kommunikationskanäle</li>
                  <li>Mitarbeit in diversen Projekten</li>
                  <li>Diverse administrative Aufgaben </li>
                </ul>
              </div>
              <div class="kompetenzen">
                <h3>Sie bringen mit</h3>
                <ul>
                  <li>Du beschäftigst dich in deinem Studium (HFS, FH, HS) mit Kommunikation, oder hast ein solches Studium gerade abgeschlossen</li>
                  <li>Du bist eine selbstständige und sprachgewandte Persönlichkeit und verfügst über eine überdurchschnittlich gute mündliche und schriftliche Kommunikations- und Ausdrucksfähigkeit</li>
                  <li>Du beherrschst Social Media sowohl user- wie auch redaktionsseitig</li>
                  <li>Deine Vorgehensweise ist strukturiert, Du bist gut organisiert, arbeitest sorgfältig und gehst Aufgaben engagiert, initiativ und selbstständig an</li>
                  <li>Du bist flexibel und belastbar</li>
                </ul>
              </div>
              <div class="bieten">
                <h3>Wir bieten Ihnen</h3>
                <ul>
                  <li>Du bist Teil eines lebendigen, motivierten Teams und arbeitest in einem Haus das viel Raum bietet, sich kreativ einzubringen</li>
                  <li>Du arbeitest in einem spannenden Umfeld aus Jugend-, Sub- und Soziokultur</li>
                  <li>Du bist Mitglied der Mediengruppe und kannst den öffentlichen Auftritt des Dynamos aktiv mitgestalten</li>
                  <li>Du arbeitest mitten in Zürich an der Limmat</li>
                </ul>
              </div>          
            </div>
        </div>
    `;
    }
}
  
customElements.define('jobs-component', Jobs);

const jobs = document.getElementsByClassName('job');

for (const job of jobs) {
  job.addEventListener('click', function handleClick() {
    job.classList.toggle('active');
  });
}