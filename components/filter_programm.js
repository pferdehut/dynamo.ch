const filterProgrammTemplate = document.createElement('template');
const programFilters = document.querySelectorAll(".main");

let allFilters = Array.from(programFilters);

allFilters.forEach(function(filter, index) {
  let forProgramm = filter.innerHTML;
  this[index] = "<li class='filter " + forProgramm + "'><button onclick='" + forProgramm + "Filter()'>" + forProgramm + "</button>";
}, allFilters);

let filtered = allFilters.filter((item, index) => allFilters.indexOf(item) === index);
filtered = filtered.join("");

class FilterProgramm extends HTMLElement {
    
    connectedCallback() {
        this.innerHTML = 
        `
        <div class="programFilter">
        <ul id='subfilter' class='subfilters'><li class='subfilter'>Rock</li><li class='subfilter'>Hip-Hop</li><li class='subfilter'>Elektro</li><li class='subfilter'>Punk</li><li class='subfilter'>Pop</li></ul></li>
        <ul id="filter" class="filters">
          <li class="filter Alles active"><button onclick="AllesFilter()">Alles</button></li>
          ${filtered}
        </ul>
        </div>`
        ;
    }
}
  
customElements.define('filter-programm-component', FilterProgramm);

/*Filter*/
function AllesFilter() {
  const filterContainer = document.querySelectorAll(".programFilter");
  filterContainer[0].classList.remove("active");

  const filter = document.querySelectorAll(".filter");
  const filterAlles = document.querySelectorAll(".filter.Alles");

  const alle = document.querySelectorAll(".eventWrap");

  for (let i = 0; i < filter.length; i++) {
      filter[i].classList.remove("active");
  }
  filterAlles[0].classList.add("active");

  for (let i = 0; i < alle.length; i++) {
      alle[i].classList.add("active");
  }
}

function MaschineFilter(){
  const filterContainer = document.querySelectorAll(".programFilter");
  filterContainer[0].classList.add("active");

  const filter = document.querySelectorAll(".filter");
  const filterMaschine = document.querySelectorAll(".filter.Maschine");

  const maschine = document.querySelectorAll(".eventWrap.maschine");
  const filters = document.querySelectorAll(".eventWrap");

  for (let i = 0; i < filter.length; i++) {
      filter[i].classList.remove("active");
  }
  filterMaschine[0].classList.add("active");

  for (let i = 0; i < filters.length; i++) {
      filters[i].classList.remove("active");
  }
  for (let i = 0; i < maschine.length; i++) {
    maschine[i].classList.add("active");
  }
}

function TischFilter(){
  const filterContainer = document.querySelectorAll(".programFilter");
  filterContainer[0].classList.add("active");

  const filter = document.querySelectorAll(".filter");
  const filterMaschine = document.querySelectorAll(".filter.Tisch");

  const tisch = document.querySelectorAll(".eventWrap.tisch");
  const filters = document.querySelectorAll(".eventWrap");

  for (let i = 0; i < filter.length; i++) {
      filter[i].classList.remove("active");
  }
  filterMaschine[0].classList.add("active");

  for (let i = 0; i < filters.length; i++) {
      filters[i].classList.remove("active");
  }
  for (let i = 0; i < tisch.length; i++) {
    tisch[i].classList.add("active");
  }
}

function AusleihgerätFilter(){
  const filterContainer = document.querySelectorAll(".programFilter");
  filterContainer[0].classList.add("active");

  const filter = document.querySelectorAll(".filter");
  const filterMaschine = document.querySelectorAll(".filter.Ausleihgerät");

  const tisch = document.querySelectorAll(".eventWrap.ausleih");
  const filters = document.querySelectorAll(".eventWrap");

  for (let i = 0; i < filter.length; i++) {
      filter[i].classList.remove("active");
  }
  filterMaschine[0].classList.add("active");

  for (let i = 0; i < filters.length; i++) {
      filters[i].classList.remove("active");
  }
  for (let i = 0; i < tisch.length; i++) {
    tisch[i].classList.add("active");
  }
}

function RaumFilter(){
  const filterContainer = document.querySelectorAll(".programFilter");
  filterContainer[0].classList.add("active");

  const filter = document.querySelectorAll(".filter");
  const filterMaschine = document.querySelectorAll(".filter.Raum");

  const tisch = document.querySelectorAll(".eventWrap.raum");
  const filters = document.querySelectorAll(".eventWrap");

  for (let i = 0; i < filter.length; i++) {
      filter[i].classList.remove("active");
  }
  filterMaschine[0].classList.add("active");

  for (let i = 0; i < filters.length; i++) {
      filters[i].classList.remove("active");
  }
  for (let i = 0; i < tisch.length; i++) {
    tisch[i].classList.add("active");
  }
}

function KonzertFilter(){
  const filterContainer = document.querySelectorAll(".programFilter");
  filterContainer[0].classList.add("active");

  const filter = document.querySelectorAll(".filter");
  const filterKonzert = document.querySelectorAll(".filter.Konzert");

  const konzert = document.querySelectorAll(".eventWrap.konzert");
  const filters = document.querySelectorAll(".eventWrap");

  for (let i = 0; i < filter.length; i++) {
      filter[i].classList.remove("active");
  }
  filterKonzert[0].classList.add("active");

  for (let i = 0; i < filters.length; i++) {
      filters[i].classList.remove("active");
  }
  for (let i = 0; i < konzert.length; i++) {
    konzert[i].classList.add("active");
  }
}

function KursFilter(){
  const filterContainer = document.querySelectorAll(".programFilter");
  filterContainer[0].classList.add("active");

  const filter = document.querySelectorAll(".filter");
  const filterKurs = document.querySelectorAll(".filter.Kurs");

  const kurs = document.querySelectorAll(".eventWrap.kurs");
  const filters = document.querySelectorAll(".eventWrap");

  for (let i = 0; i < filter.length; i++) {
      filter[i].classList.remove("active");
  }
  filterKurs[0].classList.add("active");

  for (let i = 0; i < filters.length; i++) {
      filters[i].classList.remove("active");
  }
  for (let i = 0; i < kurs.length; i++) {
    kurs[i].classList.add("active");
  }
}