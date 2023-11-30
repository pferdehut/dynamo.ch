const filterSubTemplate = document.createElement('template');
const filters = document.querySelectorAll("h2");

const programFilters = document.querySelectorAll(".main");

let allFilters = Array.from(filters);
let n = 0;

allFilters.forEach(function(filter, index) {
  let forFilter = filter.innerHTML;
  n = index + 1;
  this[index] = "<li class='filter filter" + n + "'><a href='#" + forFilter + "'>" + forFilter + "</a></li>";

  const alle = document.querySelectorAll(".component");

}, allFilters);

allFilters = allFilters.join("");

class FilterSub extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `<div class="programFilter">
        <ul id="filter" class="filters">
          ${allFilters}
        </ul>
        </div>`
    ;
    }
}
  
customElements.define('filter-sub-component', FilterSub);

/*Filter*/
function AllesFilter() {
  const filterContainer = document.querySelectorAll(".programFilter");
  filterContainer[0].classList.remove("active");

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
  const filterContainer = document.querySelectorAll(".programFilter");
  filterContainer[0].classList.add("active");

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