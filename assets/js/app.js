
/* Tuesday 9th of April 2019 Class Assignment JavaScript work can go here */
const assignment_title = "Tuesday 16th of April 2019 Class Assignment";

var logo = document.querySelector('.logo');

var effectsIn = ["bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig"];
var effectsOut = ["bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp"];
var effects = ["bounce","flash","pulse","rubberBand","shake","headShake","swing","tada","wobble","jello"];

var inNum = Math.floor(Math.random() * 4);
var inNum2 = Math.floor(Math.random() * 4);



animateCSS('.logo', effectsIn[inNum], function() {
  animateCSS('.logo', effectsIn[inNum2], function() {
      animateCSS('.logo', effects[Math.floor(Math.random() * 6)] );
    });
});

logo.addEventListener('click', function(){
  animateCSS('.logo', 'bounce');
});



function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
