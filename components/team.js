const teamTemplate = document.createElement('template');

class Team extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
        <div id="team" class="dynamo active component active">
            <h2>Team</h2>
            <div class="teamOuter">
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/zbinden-abdul-hameed.jpg"></div>
                    <div class="name">Abdul Hameed Zbinden</div>
                    <div class="funktion">Restaurant – Koch</div>
                    <div class="phone">044 415 76 90</div>
                    <div class="email"><a href="mailto:restaurant@dynamo.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/andi_1.jpg"></div>
                    <div class="name">Andi Wyss</div>
                    <div class="funktion">Raumbörse</div>
                    <div class="phone">044 415 76 67</div>
                    <div class="email"><a href="mailto:andreas.wyss@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/angie.png"></div>
                    <div class="name">Angela Osterwalder</div>
                    <div class="funktion">Werkbereich – Metall</div>
                    <div class="phone"></div>
                    <div class="email"><a href="mailto:angela.osterwalder@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/anna_02._september_2021_dscf1056_bild_teuwissen.jpg"></div>
                    <div class="name">Anna Schmid</div>
                    <div class="funktion">Restaurant – Service</div>
                    <div class="phone">044 415 76 90</div>
                    <div class="email"><a href="mailto:restaurant@dynamo.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/thumbnail_anna-sophia_26._september_2023_bild_teuwissen_8078.jpg"></div>
                    <div class="name">Anna Sophia Zürcher</div>
                    <div class="funktion">Praktikum – Grafik</div>
                    <div class="phone"></div>
                    <div class="email"><a href="mailto:grafik@dynamo.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/annette.jpg"></div>
                    <div class="name">Annette Lüthi</div>
                    <div class="funktion">Werkbereich – Textil</div>
                    <div class="phone">044 415 76 77</div>
                    <div class="email"><a href="mailto:annette.luethi@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/barblina.jpg"></div>
                    <div class="name">Barblina Kreis</div>
                    <div class="funktion">Werkbereich – Textil</div>
                    <div class="phone">044 415 76 77</div>
                    <div class="email"><a href="mailto:barblina.kreis@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/bavi_0.jpg"></div>
                    <div class="name">Bavishan Vyravanathan</div>
                    <div class="funktion">Raumbörse</div>
                    <div class="phone">044 415 76 67</div>
                    <div class="email"><a href="mailto:bavishan.vyravanathan@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/caroline-schweizer.jpg"></div>
                    <div class="name">Caroline Schweizer</div>
                    <div class="funktion">Werkbereich – Metall</div>
                    <div class="phone">044 415 76 75</div>
                    <div class="email"><a href="mailto:caroline.schweizer@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/cecile_22._oktober_2021_dscf2618_bild_teuwissen-2_kopie.jpg"></div>
                    <div class="name">Cécile von Ow</div>
                    <div class="funktion">Raumbörse</div>
                    <div class="phone">044 415 76 66</div>
                    <div class="email"><a href="mailto:cecile.vonow@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/christa_17._november_2021_bild_dscf3675_cteuwissen.jpg"></div>
                    <div class="name">Christa Kuratli</div>
                    <div class="funktion">Werkbereich – Digital</div>
                    <div class="phone">044 415 76 75</div>
                    <div class="email"><a href="mailto:christa.kuratli@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/chrigl.jpg"></div>
                    <div class="name">Christof Baumgartner</div>
                    <div class="funktion">Haustechnik</div>
                    <div class="phone">044 415 76 88</div>
                    <div class="email"><a href="mailto:christof.baumgartner@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/danihilfiker2.jpg"></div>
                    <div class="name">Daniel Hilfiker</div>
                    <div class="funktion">Leitung – Dynamo</div>
                    <div class="phone">044 415 76 69</div>
                    <div class="email"><a href="mailto:daniel.hilfiker@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/elena_2.jpg"></div>
                    <div class="name">Elena Marti</div>
                    <div class="funktion">Leitung – Werkbereich/Theater</div>
                    <div class="phone">044 415 76 79</div>
                    <div class="email"><a href="mailto:elena.marti@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/fatu_portrait.jpg"></div>
                    <div class="name">Fatoumata Sanneh</div>
                    <div class="funktion">Projekte – Fiesch &amp; Dynamic Days</div>
                    <div class="phone">044 415 76 61</div>
                    <div class="email"><a href="mailto:fatoumata.sanneh@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/georg.jpg"></div>
                    <div class="name">Georg Foster</div>
                    <div class="funktion">Werkbereich – Textil</div>
                    <div class="phone">044 415 76 77</div>
                    <div class="email"><a href="mailto:georg.foster@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/gunnar.jpg"></div>
                    <div class="name">Gunar Hambrecht</div>
                    <div class="funktion">Werkbereich – Metall</div>
                    <div class="phone">044 415 76 75</div>
                    <div class="email"><a href="mailto:gunar.hambrecht@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/ikechi_30._juni_2023_bild_teuwissen_7024.jpeg"></div>
                    <div class="name">Ikechi Speranza</div>
                    <div class="funktion">Zivildienst</div>
                    <div class="phone"></div>
                    <div class="email"><a href="mailto:ikechi.speranza@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/jasmin-cuenca.png"></div>
                    <div class="name">Jasmin Cuenca</div>
                    <div class="funktion">Restaurant – Service</div>
                    <div class="phone">044 415 76 90</div>
                    <div class="email"><a href="mailto:restaurant@dynamo.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div> 
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/jorge.jpg"></div>
                    <div class="name">Jorge Torres</div>
                    <div class="funktion">Veranstaltungstechnik</div>
                    <div class="phone">044 415 76 86</div>
                    <div class="email"><a href="mailto:jorge.torres@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>  
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/lars.jpg"></div>
                    <div class="name">Lars Rieche</div>
                    <div class="funktion">Leitung – Programm/Raumvermietung/Technik</div>
                    <div class="phone">044 415 76 89</div>
                    <div class="email"><a href="mailto:lars.rieche@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div> 
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/linda.jpg"></div>
                    <div class="name">Linda Zihlmann</div>
                    <div class="funktion">Praktikum – Kommunikation</div>
                    <div class="phone"></div>
                    <div class="email"><a href="mailto:linda.zihlmann@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>         
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/luca_31._august_2023_bild_teuwissen_7541.jpeg"></div>
                    <div class="name">Luca Juszczak</div>
                    <div class="funktion">Praktikum – Raumvermietung/Events</div>
                    <div class="phone">044 415 52 28</div>
                    <div class="email"><a href="mailto:luca.juszczak@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>  
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/unnamed_12.jpg"></div>
                    <div class="name">Matthias Bach</div>
                    <div class="funktion">Raumbörse</div>
                    <div class="phone"></div>
                    <div class="email"><a href="mailto:matthias.bach@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/maurizio_0.jpg"></div>
                    <div class="name">Maurizio Frei</div>
                    <div class="funktion">Raumvermietung</div>
                    <div class="phone">044 415 76 82</div>
                    <div class="email"><a href="mailto:maurizio.frei@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/_dsc0268-1_dsc0268.jpg"></div>
                    <div class="name">Michael Hitz</div>
                    <div class="funktion">Backoffice</div>
                    <div class="phone">044 415 76 62</div>
                    <div class="email"><a href="mailto:michael.hitz@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/michael_0.jpg"></div>
                    <div class="name">Michael Nenning</div>
                    <div class="funktion">Veranstaltungstechnik</div>
                    <div class="phone">044 415 76 87</div>
                    <div class="email"><a href="mailto:michael.nenning@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div> 
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/unnamed_0.jpeg"></div>
                    <div class="name">Nadine Gierak</div>
                    <div class="funktion">Praktikum – Tontechnik</div>
                    <div class="phone">044 415 76 85</div>
                    <div class="email"><a href="mailto:nadine.gierak@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div> 
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/nayar.jpg"></div>
                    <div class="name">Nayar Uribe</div>
                    <div class="funktion">Lehre – KV</div>
                    <div class="phone">044 415 76 95</div>
                    <div class="email"><a href="mailto:nayar.uribe@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div> 
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/oscar_pohl09._maerz_2023_bild_teuwissen_4811.jpeg"></div>
                    <div class="name">Oscar Pohl</div>
                    <div class="funktion">Zivildienst</div>
                    <div class="phone"></div>
                    <div class="email"><a href="mailto:oscar.pohl@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/patrick.jpg"></div>
                    <div class="name">Patrick Wild</div>
                    <div class="funktion">Werkbereich – Metall</div>
                    <div class="phone">044 415 76 75</div>
                    <div class="email"><a href="mailto:patrick.wild@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/pearl.jpg"></div>
                    <div class="name">Pearl Fafa Adablah</div>
                    <div class="funktion">Restaurant – Service</div>
                    <div class="phone">044 415 76 90</div>
                    <div class="email"><a href="mailto:restaurant@dynamo.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div> 
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/robi.jpg"></div>
                    <div class="name">Roberto De Stefani</div>
                    <div class="funktion">Leitung – Restaurant Chuchi am Wasser</div>
                    <div class="phone">044 415 76 99</div>
                    <div class="email"><a href="mailto:restaurant@dynamo.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div> 
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/roman.jpg"></div>
                    <div class="name">Roman Stofer</div>
                    <div class="funktion">Werkbereich – Medien</div>
                    <div class="phone">044 415 76 70</div>
                    <div class="email"><a href="mailto:werkbereich@dynamo.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/salem_17._november_2021_bild_dscf3709_cteuwissen-3.jpg"></div>
                    <div class="name">Salem Imadjane</div>
                    <div class="funktion">Werkbereich – Digital</div>
                    <div class="phone">044 415 76 75</div>
                    <div class="email"><a href="mailto:salem.imadjane@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/selimoska-rufjie.jpg"></div>
                    <div class="name">Abdul Hameed Zbinden</div>
                    <div class="funktion">Restaurant – Küche</div>
                    <div class="phone">044 415 76 90</div>
                    <div class="email"><a href="mailto:restaurant@dynamo.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/sergio.jpg"></div>
                    <div class="name">Sergio Araya</div>
                    <div class="funktion">Veranstaltungstechnik/Beleuchtung</div>
                    <div class="phone">044 415 76 85</div>
                    <div class="email"><a href="mailto:sergio.araya@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/stephan_16._marz_2019_dscf1891_bild_teuwissen.jpg"></div>
                    <div class="name">Stephan Teuwissen</div>
                    <div class="funktion">Werkbereich – Theater</div>
                    <div class="phone">044 415 76 72</div>
                    <div class="email"><a href="mailto:stephan.teuwissen@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/swanna-neu_0.jpg"></div>
                    <div class="name">Swana Theis</div>
                    <div class="funktion">Raumvermietung</div>
                    <div class="phone">044 415 76 82</div>
                    <div class="email"><a href="mailto:swana.theis@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/vanessa.jpg"></div>
                    <div class="name">Vanessa Mendoza</div>
                    <div class="funktion">Praktikum – Soziokultur</div>
                    <div class="phone"></div>
                    <div class="email"><a href="mailto:swana.theis@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/victoria.jpg"></div>
                    <div class="name">Victoria Paeva</div>
                    <div class="funktion">Praktikum – Grafik</div>
                    <div class="phone"></div>
                    <div class="email"><a href="mailto:grafik@dynamo.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/unnamed.jpeg"></div>
                    <div class="name">Vlora Yildiz</div>
                    <div class="funktion">Stv. Leitung – Restaurant Chuchi am Wasser</div>
                    <div class="phone">044 415 76 90</div>
                    <div class="email"><a href="mailto:restaurant@dynamo.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
                <div class="teamWrap">          
                    <div class="portrait"><img src="https://www.dynamo.ch/sites/default/files/yael.jpg"></div>
                    <div class="name">Yael Anders</div>
                    <div class="funktion">Projekte</div>
                    <div class="phone"></div>
                    <div class="email"><a href="mailto:yael.anders@zuerich.ch"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="71" viewBox="0 0 39 71" fill="none" class="arrow">
                        <path d="M2.35352 1.64648L37.3535 36.6465M2.35351 68.8137L37.3535 33.8137" stroke="black" stroke-width="4"/>
                        </svg> E-Mail</a></div>
                </div>
            </div>
        </div>
    `;
    }
}
  
customElements.define('team-component', Team);