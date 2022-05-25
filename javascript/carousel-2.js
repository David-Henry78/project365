const second__track = document.querySelector('.carousel-2 .carousel__track');
const second__slides = Array.from(second__track.children);
//console.log(second__slides);
const second__nextButton = document.querySelector('.carousel-2 .carousel__button--right');
const second__prevButton = document.querySelector('.carousel-2 .carousel__button--left');
const second__second__dotsNav = document.querySelector('.carousel-2 .carousel__nav');
const second__dots = Array.from(second__second__dotsNav.children);

const second__slideWidth = second__slides[0].getBoundingClientRect().width;

//arrange the second__slides next to one another
const second__setSlidePosition = (slide, index) => {
   slide.style.left = second__slideWidth * index + "px";
};
second__slides.forEach(second__setSlidePosition);

const second__moveToSlide = (second__track, second__currentSlide, second__targetSlide) => {
   second__track.style.transform = "translateX(-" + second__targetSlide.style.left + ")";
   second__currentSlide.classList.remove("current-slide");
   second__targetSlide.classList.add("current-slide");
}

const second__updateDots = (second__currentDot, second__targetDot) => {
   second__currentDot.classList.remove("current-slide");
   second__targetDot.classList.add("current-slide");
}

// when I click lef, move second__slides to the left
   second__prevButton.addEventListener("click", e =>{
       const second__currentSlide = second__track.querySelector(".current-slide");
       const prevSlide = second__currentSlide.previousElementSibling;
       const second__currentDot = second__second__dotsNav.querySelector(".current-slide");
       const prevDot = second__currentDot.previousElementSibling;

       //move to the next slide
      second__moveToSlide(second__track, second__currentSlide, prevSlide);  
      second__updateDots(second__currentDot, prevDot);
});

// when I click right, move second__slides to the rigth
    second__nextButton.addEventListener("click", e =>{
    const second__currentSlide = second__track.querySelector(".current-slide");
    const second__nextSlide = second__currentSlide.nextElementSibling;
    const second__currentDot = second__second__dotsNav.querySelector(".current-slide");
    const nextDot = second__currentDot.nextElementSibling;
      //move to the next slide
      second__moveToSlide(second__track, second__currentSlide, second__nextSlide); 
      second__updateDots(second__currentDot, nextDot);
});

// when I click the nav indicators, move to that slide
second__second__dotsNav.addEventListener("click", e => {
   //what indicator was clicked on?
   const second__targetDot = e.target.closest("button");

   
   if(!second__targetDot) return;
  
   const second__currentSlide = second__track.querySelector(".current-slide");
   const second__currentDot = second__second__dotsNav.querySelector(".current-slide");
   const second__targetIndex = second__dots.findIndex(dot => dot === second__targetDot);
   const second__targetSlide = second__slides[second__targetIndex];

   second__moveToSlide(second__track, second__currentSlide, second__targetSlide); 
   second__updateDots(second__currentDot, second__targetDot);
   
})