
/*Filter*/
function allesFilter() {
    const filter = document.getElementsByClassName("filter");
    const filterAlles = document.getElementsByClassName("filter filterAlles");

    const alle = document.getElementsByClassName("eventWrap");
    const dynamo = document.getElementsByClassName("dynamo");

    for (let i = 0; i < filter.length; i++) {
        filter[i].classList.remove("active");
        filter[i].style.paddingTop = '0';
    }
    filterAlles[0].classList.add("active");

    for (let i = 0; i < alle.length; i++) {
        alle[i].classList.add("active");
    }

    for (let i = 0; i < dynamo.length; i++) {
        dynamo[i].classList.add("active");
    }
}

function konzertFilter() {
    const konzert = document.getElementsByClassName("eventWrap konzert");
    const filters = document.getElementsByClassName("eventWrap");

    const filter = document.getElementsByClassName("filter");
    const filterKonzert = document.getElementsByClassName("filter filterKonzert");

    for (let i = 0; i < filter.length; i++) {
        filter[i].classList.remove("active");
        filter[i].style.paddingTop = '40px';
    }
    filterKonzert[0].classList.add("active");

    for (let i = 0; i < filters.length; i++) {
        filters[i].classList.remove("active");
    }
    for (let i = 0; i < konzert.length; i++) {
        konzert[i].classList.add("active");
    }
}

function kursFilter() {
    const filters = document.getElementsByClassName("eventWrap");
    const kurs = document.getElementsByClassName("eventWrap kurs");

    const filter = document.getElementsByClassName("filter");
    const filterKurs = document.getElementsByClassName("filter filterKurs");

    for (let i = 0; i < filter.length; i++) {
        filter[i].classList.remove("active");
        filter[i].style.paddingTop = '40px';
    }
    filterKurs[0].classList.add("active");

    for (let i = 0; i < filters.length; i++) {
        filters[i].classList.remove("active");
    }
    for (let i = 0; i < kurs.length; i++) {
        kurs[i].classList.add("active");
    }
}

function partyFilter() {
    const filters = document.getElementsByClassName("eventWrap");
    const party = document.getElementsByClassName("eventWrap party");

    const filter = document.getElementsByClassName("filter");
    const filterParty = document.getElementsByClassName("filter filterParty");

    for (let i = 0; i < filter.length; i++) {
        filter[i].classList.remove("active");
    }
    filterParty[0].classList.add("active");

    for (let i = 0; i < filters.length; i++) {
        filters[i].classList.remove("active");
    }
    for (let i = 0; i < party.length; i++) {
        party[i].classList.add("active");
    }
}

function diversFilter() {
    const filters = document.getElementsByClassName("eventWrap");
    const divers = document.getElementsByClassName("eventWrap divers");

    const filter = document.getElementsByClassName("filter");
    const filterDivers = document.getElementsByClassName("filter filterDivers");

    for (let i = 0; i < filter.length; i++) {
        filter[i].classList.remove("active");
    }
    filterDivers[0].classList.add("active");

    for (let i = 0; i < filters.length; i++) {
        filters[i].classList.remove("active");
    }
    for (let i = 0; i < divers.length; i++) {
        divers[i].classList.add("active");
    }
}

function geschichteFilter(){
    const filters = document.getElementsByClassName("dynamo");
    const kurs = document.getElementById("geschichte");

    const filter = document.getElementsByClassName("filter");
    const filterKurs = document.getElementsByClassName("filter filterGeschichte");

    for (let i = 0; i < filter.length; i++) {
        filter[i].classList.remove("active");
    }
    filterKurs[0].classList.add("active");

    for (let i = 0; i < filters.length; i++) {
        filters[i].classList.remove("active");
    }

    kurs.classList.add("active");
}

function teamFilter(){
    const filters = document.getElementsByClassName("dynamo");
    const kurs = document.getElementById("team");

    const filter = document.getElementsByClassName("filter");
    const filterKurs = document.getElementsByClassName("filter filterTeam");

    for (let i = 0; i < filter.length; i++) {
        filter[i].classList.remove("active");
    }
    filterKurs[0].classList.add("active");

    for (let i = 0; i < filters.length; i++) {
        filters[i].classList.remove("active");
    }

    kurs.classList.add("active");
}

function jobsFilter(){
    const filters = document.getElementsByClassName("dynamo");
    const kurs = document.getElementById("jobs");

    const filter = document.getElementsByClassName("filter");
    const filterKurs = document.getElementsByClassName("filter filterJobs");

    for (let i = 0; i < filter.length; i++) {
        filter[i].classList.remove("active");
    }
    filterKurs[0].classList.add("active");

    for (let i = 0; i < filters.length; i++) {
        filters[i].classList.remove("active");
    }

    kurs.classList.add("active");
}