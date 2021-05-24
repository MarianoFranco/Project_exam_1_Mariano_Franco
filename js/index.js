
function carrusel(){
	$('.multiple-items').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay:true,
		autoplaySpeed:2000,
		arrows:true,
		responsive: [
			{
			  breakpoint: 1440,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			  }
			},		
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				arrows:false,
				dots: true
			  }
			}
		]
	  });
};

const main = document.querySelector('main');
const ruleteContainer= document.querySelector('.latest-post__roulette');

async function getDestinations() {
	try{
		const response = await fetch('https://travelblogapi.argenteam.tech/wp-json/wp/v2/posts');
		const jsonResults = await response.json();
		console.log(jsonResults);

		for(let i=0; i < jsonResults.length; i++) {
		
			
				
		
				ruleteContainer.innerHTML += `
				<div class="latest-post__card">
				<a href="blog_details.html?id=${jsonResults[i].id}" class="latest-post__link">
					<img src="${jsonResults[i].better_featured_image.source_url}" alt="Mardel IMg" class="latest-post--img" />
					<div class="latest-post__overlay"></div>
					<h4 class="latest-post__title">${jsonResults[i].title.rendered}</h4>
					<div class="info__container">
						<span class="info__day">2 days ago</span>
						<span class="info__line">|</span>
						<span class="info__comments">200 comments</span>			
					</div>
					</a>
				</div>
				`;
			
		};
	   
		carrusel();
	   
	
		//top-Destinations

		const topMainDestinations = document.querySelector('.top-destinations__main');		
		

		for(let i=0; i<1; i++){		
			
			let tags = jsonResults[i].tags;
			let country = '';
			let city='';
			//  console.log(tags[0]);
			// console.log(tags[1]);
			
			for(let j = 0; j < tags.length; j++){
				console.log(tags[j])
				if(tags[j] === 8 || tags[j] === 20 || tags[j]=== 12){
					console.log("es pais")
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
					console.log("es una ciudad")
					if(tags[j]=== 25){
						city = 'Villajoyosa';
					}
					else if(tags[j]=== 24){
						city = 'Sevilla';
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
					else{
						city = 'City without register';
					}
				}
			}
			

			topMainDestinations.innerHTML += `
			<div class="top-destinations__mainCover">
				<a href="blog_details.html?id=${jsonResults[i].id}" 	class="top-destinations__link">
					<img src="${jsonResults[i].better_featured_image.source_url}" alt="${jsonResults[i].better_featured_image.alt_text}" 	class="top-destinations__img" />
					<div class="top-destinations__overlay">
						<h4 class="top-destinations__title 	top-destinations__title--main">Everything you need to know about ${city}!</h4>
						<p class="top-destinations__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil vitae quaerat delectus 	dolorum beatae veritatis. </p>
						<div class="info__container info__container--mainDestination">
							<span class="info__day">2 days ago</span>
							<span class="info__line">|</span>
							<span class="info__comments">200 comments</span>			
						</div>
					</div>
					<h4 class="top-destinations__countryName">${country}</h4>
				</a>
			</div>	
		`;			
			
		}
		const topRestDestinations = document.querySelector('.top-destinations__secondary');

		for(let i=1; i<3; i++){			
			
			let tags = jsonResults[i].tags;
			let country = '';
			let city='';
			// console.log(tags[0]);
			// console.log(tags[1]);
			
			for(let j = 0; j < tags.length; j++){
				console.log(tags[j])
				if(tags[j] === 8 || tags[j] === 20 || tags[j]=== 12){
					console.log("es pais")
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
					console.log("es una ciudad")
					if(tags[j]=== 25){
						city = 'Villajoyosa';
					}
					else if(tags[j]=== 24){
						city = 'Sevilla';
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
					else{
						city = 'City without register';
					}
				}
			}
			topRestDestinations.innerHTML += `
			<div class="top-destinations__cover">
				<a href="blog_details.html?id=${jsonResults[i].id}" class="top-destinations__link">
					<img src="${jsonResults[i].better_featured_image.source_url}" alt="${jsonResults[i].better_featured_image.alt_text}" class="top-destinations__img" />
					<div class="top-destinations__overlay top-destinations__overlay--secondary">
						<h4 class="top-destinations__title">${jsonResults[i].title.rendered}</h4>
						<p class="top-destinations__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
						<div class="info__container info__container--secDestination">
							<span class="info__day">2 days ago</span>
							<span class="info__line">|</span>
							<span class="info__comments">200 comments</span>			
						</div>
						
					</div>
					<h4 class="top-destinations__countryName">${country}</h4>
				</a>
			</div>
		`;			
			
		}

	
		
	
	}catch(error){
	console.log(error)

	}finally{

	}
}
getDestinations()