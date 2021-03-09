const previousButton = document.getElementById('previous');
previousButton.addEventListener('click', (event) => {
	console.log('previous')
});
const nextButton = document.getElementById('next');
nextButton.addEventListener('click', (event) => {
	console.log('next')
})

let slideIndex = 1;
showSlides(slideIndex);
console.log('слайд '+slideIndex)
function plusSlide() {
    showSlides(slideIndex += 1);
    console.log('слайд '+slideIndex)
}
function minusSlide() {
    showSlides(slideIndex -= 1);
    console.log('слайд '+ slideIndex)
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
      slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";  
} 
