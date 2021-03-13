const previousButton = document.getElementById('previous');
previousButton.addEventListener('click', (event) => {
	/*console.log('previous')*/
});
const nextButton = document.getElementById('next');
nextButton.addEventListener('click', (event) => {
	/*console.log('next')*/
})

let slideIndex = 1;
showSlides(slideIndex);
/*console.log('слайд '+slideIndex)*/
function plusSlide() {
    showSlides(slideIndex += 1);
    /*console.log('слайд '+slideIndex)*/
}
function minusSlide() {
    showSlides(slideIndex -= 1);
    /*console.log('слайд '+ slideIndex)*/
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
    
    if (slideIndex === 1) {
		previous.style.display = 'none';
	} else {
   	previous.style.display = 'inline-block';
   }
 
  if (slideIndex === 3) {
  		next.style.display = 'none';
  } else {
  	next.style.display = 'inline-block';
  } 
}

/*let question1 = document.getElementById('slide1').innerHTML = 'Вопрос 1';
let question2 = document.getElementById('slide2').innerHTML = 'Вопрос 2';
let question3 = document.getElementById('slide3').innerHTML = 'Вопрос 3';
let correctAnswer1 = document.getElementById('q1-a1');
let correctAnswer2 = document.getElementById('q2-a2');
let correctAnswer3 = document.getElementById('q3-a3');

checkResult(question1, correctAnswer1);
checkResult(question2, correctAnswer2);
checkResult(question3, correctAnswer3);

function checkResult (question, correctAnswer) {
	if 
}
*/
