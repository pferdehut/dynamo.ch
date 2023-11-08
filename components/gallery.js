const galleryTemplate = document.createElement('template');

class Gallery extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <div class="imageGallery">
                <div class="newsNav">
                    <button onclick="currentSlide(1)" href="#1" class="navDot galleryNav active"></button>
                    <button onclick="currentSlide(2)" href="#2" class="navDot galleryNav"></button>
                    <button onclick="currentSlide(3)" href="#3" class="navDot galleryNav"></button>
                </div>
                <div class="gallery">
                    <ul class="galleryWrap">
                        <li class="galleryImage" id="1"><img src="/img/lasercutter.jpeg"></li>
                        <li class="galleryImage" id="2"><img src="/img/lasercutter2.jpeg"></li>
                        <li class="galleryImage" id="3">
                            <video muted controls>
                                <source src="/vid/lasercutter.mp4" type="video/mp4">
                            </video>
                        </li>
                    </ul>
                </div>

            </div>
        `;
    }
}
  
customElements.define('gallery-component', Gallery);

/*Gallery*/
let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(param) {
    showSlides(slideIndex = param);
}

function showSlides(param){
    let i;

    const dots = document.getElementsByClassName("galleryNav");
    const images = document.getElementsByClassName("galleryImage");

    if (param > images.length) {slideIndex = 1}

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    for (i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
    }

    images[slideIndex-1].classList.add("active");
    dots[slideIndex-1].classList.add("active");
}

setInterval(galleryTimer, 5000);

function galleryTimer() {
    const dots = document.getElementsByClassName("galleryNav");
    const images = document.getElementsByClassName("galleryImage");

    slideIndex++;
    if (slideIndex > images.length) {slideIndex = 1}

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    for (i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
    }

    images[slideIndex-1].classList.add("active");
    dots[slideIndex-1].classList.add("active");
}