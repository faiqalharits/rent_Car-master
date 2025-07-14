AOS.init();  
// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarButton = document.querySelector('.navbar-button');
const navbarContact = document.querySelector('.nav-contact');

  hamburger.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    navbarButton.classList.toggle('active');
    navbarContact.classList.toggle('active');
  });

// Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideShow");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-slide", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-slide";
}

// Auto slideshow
setInterval(() => {
  plusSlides(1);
}, 5000); 


let currentIndex = 0;

const track = document.querySelector('.rating-carousel-track');
const cards = document.querySelectorAll('.rating-card');

function getCardsPerView() {
  const width = window.innerWidth;
  if (width <= 600) return 1;
  if (width <= 900) return 2;
  return 3;
}

function goToSlide(index) {
  const cardsPerView = getCardsPerView();
  const maxIndex = Math.ceil(cards.length / cardsPerView) - 1;

  currentIndex = index > maxIndex ? 0 : index;

  const card = cards[0];
  const cardStyle = getComputedStyle(card);
  const cardWidth = card.offsetWidth + 
                    parseFloat(cardStyle.marginLeft) + 
                    parseFloat(cardStyle.marginRight);

  const offset = cardWidth * cardsPerView * currentIndex;
  track.style.transform = `translateX(-${offset}px)`;
}

// Auto slide every 5 seconds
setInterval(() => {
  goToSlide(currentIndex + 1);
}, 5000);

// Recalculate on resize
window.addEventListener('resize', () => {
  goToSlide(currentIndex);
});

goToSlide(0);



