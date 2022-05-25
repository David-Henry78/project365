 const track = document.querySelector('.carousel-1 .carousel__track');
 const slides = Array.from(track.children);
 //console.log(slides);
 const nextButton = document.querySelector('.carousel-1 .carousel__button--right');
 const prevButton = document.querySelector('.carousel-1 .carousel__button--left');
 const dotsNav = document.querySelector('.carousel-1 .carousel__nav');
 const dots = Array.from(dotsNav.children);
 const divAnimate = document.querySelector('.first-block-2 nav');

 const slideWidth = slides[0].getBoundingClientRect().width;

 //arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

//slides[0].style.left = slideWidth * 0 + 'px';
 //slides[1].style.left = slideWidth * 1 + 'px';
 //slides[2].style.left = slideWidth * 2 + 'px';

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = "translateX(-" + targetSlide.style.left + ")";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}
 
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide");
}

 // when I click lef, move slides to the left
    prevButton.addEventListener("click", e =>{
        const currentSlide = track.querySelector(".current-slide");
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = dotsNav.querySelector(".current-slide");
        const prevDot = currentDot.previousElementSibling;
       
        //move to the next slide
       moveToSlide(track, currentSlide, prevSlide);  
       updateDots(currentDot, prevDot);
});

 // when I click right, move slides to the rigth
     nextButton.addEventListener("click", e =>{
     const currentSlide = track.querySelector(".current-slide");
     const nextSlide = currentSlide.nextElementSibling;
     const currentDot = dotsNav.querySelector(".current-slide");
     const nextDot = currentDot.nextElementSibling;

    
     divAnimate.style.animation = "moveleft 2.5s 2";
       //move to the next slide
       moveToSlide(track, currentSlide, nextSlide); 
       updateDots(currentDot, nextDot);
 });

 // when I click the nav indicators, move to that slide
dotsNav.addEventListener("click", e => {
    //what indicator was clicked on?
    const targetDot = e.target.closest("button");

    
    if(!targetDot) return;
   
    const currentSlide = track.querySelector(".current-slide");
    const currentDot = dotsNav.querySelector(".current-slide");
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide); 
    updateDots(currentDot, targetDot);
    
})



//  nextButton.addEventListener("click", e =>{
//     const currentSlide = track.querySelector(".current-slide");
//     var nextSlide = currentSlide.nextElementSibling;
//     if(nextSlide == null){
//        nextSlide = currentSlide.previousElementSibling;
//    }
//     const amountToMove = nextSlide.style.left;
//     //move to the next slide
//     track.style.transform = "translateX(-" + amountToMove + ")";
//     currentSlide.classList.remove("current-slide");
//     nextSlide.classList.add("current-slide")
    
// })