// Inisialisasi AOS jika dipakai
AOS.init();  

// =======================
// Hamburger Menu
// =======================
const hamburger = document.getElementById('hamburger');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarButton = document.querySelector('.navbar-button');
const navbarContact = document.querySelector('.nav-contact');

hamburger.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  navbarButton.classList.toggle('active');
  navbarContact.classList.toggle('active');
});

// =======================
// Carousel Manual
// =======================
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
  const slides = document.getElementsByClassName("slideShow");
  const dots = document.getElementsByClassName("dot");

  if (slides.length === 0) return;

  if (n > slides.length) { slideIndex = 1; }    
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-slide", "");
  }

  slides[slideIndex - 1].style.display = "block";  
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += " active-slide";
  }
}

// =======================
// Auto Slideshow
// =======================
setInterval(() => {
  plusSlides(1);
}, 5000);

// =======================
// Rating Carousel (Opsional, jika ada)
// =======================
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
  if (!track || cards.length === 0) return;

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

// Auto slide untuk rating carousel
setInterval(() => {
  goToSlide(currentIndex + 1);
}, 5000);

// Recalculate posisi saat resize
window.addEventListener('resize', () => {
  goToSlide(currentIndex);
});

// Inisialisasi posisi rating carousel
goToSlide(0);
