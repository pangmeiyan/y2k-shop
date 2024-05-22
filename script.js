document.addEventListener("DOMContentLoaded", function () {
   const fotoSlider = document.querySelector(".foto");
   const images = document.querySelectorAll(".fotoo");
   let currentSlide = 0;

   function nextSlide() {
       currentSlide = (currentSlide + 1) % images.length;
       updateSlider();
   }

   function updateSlider() {
       const translateXValue = -currentSlide * 100;
       fotoSlider.style.transform = `translateX(${translateXValue}%)`;
   }

   // Auto-play the slider every 3 seconds
   setInterval(nextSlide, 3000);
});

