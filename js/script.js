let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}




const heroSection = document.querySelector('.hero');
const navButtons = document.querySelectorAll('.nav');

heroSection.addEventListener('mouseenter', () => {
  navButtons.forEach(btn => btn.classList.remove('hidden'));
});

heroSection.addEventListener('mouseleave', () => {
  navButtons.forEach(btn => btn.classList.add('hidden'));
});





window.addEventListener("scroll", function () {
  const cta = document.querySelector(".cta-action");
  if (!cta) return;

  const speed = 0.3; 
  const scrollY = window.scrollY;
  const offsetTop = cta.offsetTop;
  const distance = scrollY - offsetTop;

  cta.style.backgroundPosition = `50% ${distance * speed}px`;
});



  const groomBtn = document.querySelector('.button1');
  const brideBtn = document.querySelector('.button2');
  const groomsmenGrid = document.querySelector('.groomsmen-grid');
  const bridesmaidGrid = document.querySelector('.bridesmaid-grid');

  groomBtn.addEventListener('click', () => {
    groomsmenGrid.style.display = 'grid';
    bridesmaidGrid.style.display = 'none';

    groomBtn.style.backgroundColor = '#5e9a8e';
    groomBtn.style.color = '#fff';
    brideBtn.style.backgroundColor = '#EAF0EE';
    brideBtn.style.color = '#767878';
  });

  brideBtn.addEventListener('click', () => {
    groomsmenGrid.style.display = 'none';
    bridesmaidGrid.style.display = 'grid';

    brideBtn.style.backgroundColor = '#5e9a8e';
    brideBtn.style.color = '#fff';
    groomBtn.style.backgroundColor = '#EAF0EE';
    groomBtn.style.color = '#767878';
  });

  // Set initial state
  groomsmenGrid.style.display = 'grid';
  bridesmaidGrid.style.display = 'none';





$(document).ready(function(){
    $(".my-slider").owlCarousel({
        items: 1,             
        loop: true,           
        autoplay: true,       
        autoplayTimeout: 3000, 
        autoplayHoverPause: true, 
        animateOut: "fadeOut",
        dots: true,           
        nav: false             
    });
});


$(document).ready(function(){
    $(".my-slider-1").owlCarousel({
        items: 1,              // show one image at a time
        loop: true,            // infinite loop
        autoplay: true,        // enable auto sliding
        autoplayTimeout: 3000, // 3 seconds per slide
        autoplayHoverPause: true, // pause on hover
        animateOut: "fadeOut", // smooth fade transition
        dots: true,            // show navigation dots
        nav: false             // disable arrows (set to true if you want)
    });
});



//gallery imagess
document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll(".gallery-filter li");
  const items = document.querySelectorAll(".masonry-gallery a");
  const gallery = document.querySelector(".masonry-gallery");

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {

      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      items.forEach(item => {
        const category = item.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          item.classList.remove("is-hidden");
        } else {
          item.classList.add("is-hidden");
        }
      });

      gallery.style.display = "none";
      gallery.offsetHeight;
      gallery.style.display = "block";
    });
  });
});




//parallax 
window.addEventListener("scroll", function () {
  const cta = document.querySelector(".rsvp");
  if (!cta) return;

  const speed = 0.3;  // adjust this for smoother parallax
  const scrollY = window.scrollY;
  const offsetTop = cta.offsetTop;
  const distance = scrollY - offsetTop;

  // Parallax effect: gently scroll the background upward
  cta.style.backgroundPosition = `50% ${distance * speed}px`;
});











let currentIndex = 0;
const slideWidth = 300; // must match CSS
const slideShow = document.querySelector(".gift-slideshow");
const track = document.querySelector(".gift-track");
const totalSlides = document.querySelectorAll(".gift-slide").length;
const visibleSlides = 3;

function moveCarousel() {
    currentIndex++;
    if (currentIndex > totalSlides - visibleSlides) {
        currentIndex = 0; // loop back to start
    }
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

setInterval(moveCarousel, 3000);



function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}




document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("nav-links").classList.toggle("active");
});
