var svg = document.querySelector('svg');
var tekst1 = document.querySelector('.text1');
var tekst2 = document.querySelector('.text2');
var tekst3 = document.querySelector('.text3');
var tekst4 = document.querySelector('.text4');
var tekst5 = document.querySelector('.text5');
var tekst6 = document.querySelector('.text6');
var tekst7 = document.querySelector('.text7');
var tekst8 = document.querySelector('.text8');
var tekst9 = document.querySelector('.text9');
var tekst10 = document.querySelector('.text10');
var tekst11 = document.querySelector('.text11');
var tekst12 = document.querySelector('.text12');
var achtergrond = document.querySelector('body');
var textTransition = document.querySelectorAll('.schuifTransition');
//var textTransition = document.getElementsByClassName('schuifTransition');

svg.addEventListener('click', function() {
    svg.classList.toggle('turn');
    
});


//tekst.addEventListener('click', function() {
//    tekst.classList.toggle('joeh');
//});
//

//Gizing(leraar Sanne https://javascript.info/keyboard-events)

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 37) {
            tekst1.classList.toggle('schuif1')
            tekst2.classList.toggle('schuif2')
            tekst3.classList.toggle('schuif2')
            tekst4.classList.toggle('schuif3')
            tekst5.classList.toggle('schuif4')
            tekst6.classList.toggle('schuif5')
            tekst7.classList.toggle('schuif6')
            tekst8.classList.toggle('schuif7')
            tekst9.classList.toggle('schuif8')
            tekst10.classList.toggle('schuif9')
            tekst11.classList.toggle('schuif10')
            tekst12.classList.toggle('schuif11') ;
  }
    else if (event.keyCode === 39) {
    tekst1.classList.toggle('schuif1')  
    tekst2.classList.toggle('schuif2')
    tekst3.classList.toggle('schuif2')
    tekst4.classList.toggle('schuif3')
    tekst5.classList.toggle('schuif4')
    tekst6.classList.toggle('schuif5')
    tekst7.classList.toggle('schuif6')
    tekst8.classList.toggle('schuif7')
    tekst9.classList.toggle('schuif8')
    tekst10.classList.toggle('schuif9')
    tekst11.classList.toggle('schuif10')
    tekst12.classList.toggle('schuif11');
    }

});

//bron: Milou/Niels

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 32) {
            achtergrond.classList.toggle('gradient');
            for (i=0; i < textTransition.length; i++) {
                console.log(textTransition[i])
                textTransition[i].classList.toggle('p');
            }
  }
});
 