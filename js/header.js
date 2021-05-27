

const closeBtn = document.querySelector('.nav__close');
const hamburgerBtn = document.querySelector('.menu__icon')

closeBtn.onclick = function (){

   document.querySelector('nav').classList.add('hide');
   document.querySelector('nav').classList.remove('show');
}

hamburgerBtn.onclick = function(){
	
	document.querySelector('nav').classList.remove('hide');
	document.querySelector('nav').classList.add('show');
}





