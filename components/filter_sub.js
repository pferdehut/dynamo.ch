const filterSubTemplate = document.createElement('template');
const filters = document.querySelectorAll("h2");

const programFilters = document.querySelectorAll(".main");

let allFilters = Array.from(filters);
let n = 0;

allFilters.forEach(function(filter, index) {
  let forFilter = filter.innerHTML;
  n = index + 1;
  this[index] = "<li class='filter filter" + n + "'><button onclick='filterSub(" + n + ")'>" + forFilter + "</button></li>";

  const alle = document.querySelectorAll(".component");

}, allFilters);

allFilters = allFilters.join("");

class FilterSub extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<ul id="filter" class="filters">
          <li class="filter Alles active"><button onclick="AllesFilter()">Alles</button></li>
          ${allFilters}
        </ul>`
    ;
    }
}
  
customElements.define('filter-sub-component', FilterSub);

/*Filter*/
function AllesFilter() {
  const filter = document.querySelectorAll(".filter");
  const filterAlles = document.querySelectorAll(".filter.Alles");

  const alle = document.querySelectorAll(".component");

  for (let i = 0; i < filter.length; i++) {
      filter[i].classList.remove("active");
  }
  filterAlles[0].classList.add("active");

  for (let i = 0; i < alle.length; i++) {
      alle[i].classList.add("active");
  }
}

function filterSub(n) {
  const filterSubpage = document.querySelectorAll(".filter");
  const alle = document.querySelectorAll(".component");

  for (let i = 0; i < filterSubpage.length; i++) {
    filterSubpage[i].classList.remove("active");
  }
  filterSubpage[n].classList.add("active");

  for (let i = 0; i < alle.length; i++) {
      alle[i].classList.remove("active");
  }
  alle[n-1].classList.add("active");
}