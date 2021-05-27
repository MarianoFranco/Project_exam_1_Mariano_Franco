

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


const searchBtn = document.querySelector('.searchBar__btn');
const filterInput = document.querySelector('.searchBar__input')


function addDestinations (destinationsCards){
	const allPost = document.querySelector('.post_cardsContainer'); 
	const lastPost = document.querySelector('.last-post');   
	const readMore = document.querySelector('.get-more');
		
	lastPost.innerHTML ='';
	allPost.innerHTML = '';    
	readMore.innerHTML= '';
	destinationsCards.forEach(element => {
		let tags = element.tags;
		let country = '';
		let city='';
		// console.log(tags[0]);
		// console.log(tags[1]);
		
		for(let j = 0; j < tags.length; j++){
			
			if(tags[j] === 8 || tags[j] === 20 || tags[j]=== 12){
				
				if(tags[j]=== 8){
					country = 'Spain';
				}
				else if(tags[j]=== 20){
					country = 'Norway';
				}
				else{
					country = 'Argentina';
				}
			}
			else{
				
				if(tags[j]=== 25){
					city = 'Villajoyosa';
				}
				else if(tags[j]=== 24){
					city = 'Sevilla';
				}
				else if(tags[j]=== 16){
					city = 'Barcelona';
				}
				else if(tags[j]=== 23){
					city = 'Tromsø';
				}
				else if(tags[j]=== 22){
					city = 'Trondheim';
				}
				else if(tags[j]=== 21){
					city = 'Oslo';
				}
				else if(tags[j]=== 19){
					city = 'Madrid';
				}
				else if(tags[j]=== 18){
					city = 'Buenos Aires';
				}
				else if(tags[j]=== 17) {
					city = 'Patagonia';
				}
				else if(tags[j]=== 15){
					city = 'Mar del Plata';
				}
				else if(tags[j]=== 13){
					city = 'Iguazu';
				}
				else if(tags[j]=== 9){
					city = 'Benidorm';
				}
				else{
					city = 'City without register';
				}
			}
		}
		
		allPost.innerHTML += `
		<a href="blog_details.html?id=${element.id}" class="post__link">			
			<article class="post__card--mini">
				<img src="${element.better_featured_image.source_url}" alt="" class="post__img post__img--mini">
				<div class="post__tags post__tags--mini">
					<h4 class="post__tag">${country}</h4>
					<h4 class="post__tag">${city}</h4>
				</div>                
				<h4 class="post__title post__title--mini">${city}!!!... A place you will never forget!!!</h4>
				<p class="post__desc post__desc--mini">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente deleniti modi, facere nam eveniet delectus ad aliquam quasi quia consectetur rem maxime qui laudantium odit animi. Saepe blanditiis doloribus inventore. </p>                
				<a href="blog_details.html?id=${element.id}" class="post__readMore post__readMore--mini">read more</a>
				<div class="line"></div>
				<div class="info__container">
					<span class="info__day">2 days ago</span>
					<span class="info__line">|</span>
					<span class="info__comments">200 comments</span>	
				</div>
			</article>			
		</a>
		`;
	});
	
}

function checkCard(cardTag){
	console.log (cardTag);
	console.log (filterInput.value);
	return cardTag === filterInput.value;
}

searchBtn.onclick = function destinationsFilter(){

	const filteredDestination = jsonResults.filter(checkCard);
	
	addDestinations(filteredDestination);
	getDestinations();
}



async function getDestinations(){	
	try{
		const response = await fetch('https://travelblogapi.argenteam.tech/wp-json/wp/v2/posts');
		const response2 = await fetch('https://travelblogapi.argenteam.tech/wp-json/wp/v2/posts?page=2');
		const jsonResults = await response.json();
		const jsonResults2 = await response2.json(); 		
		
		addDestinations(jsonResults);
		
	
	}catch(error){

	}finally{

	}

}

