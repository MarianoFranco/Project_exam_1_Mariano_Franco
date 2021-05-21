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
				dots: true
			  }
			}
		]
	  });
};

const main = document.querySelector('main');
const ruleteContainer=    document.querySelector('.latest-post__roulette');

async function getDestinations() {
	try{
		const response = await fetch('https://travelblogapi.argenteam.tech/wp-json/wp/v2/posts');
		const jsonResults = await response.json();
		console.log(jsonResults);

		 jsonResults.forEach(element => {
		
				ruleteContainer.innerHTML += `
				<div class="latest-post__card">
				<a href="blog_details.html?id=${element.id}" class="latest-post__link">
					<img src="${element.better_featured_image.source_url}" alt="Mardel IMg" class="latest-post--img" />
					<div class="latest-post__overlay"></div>
					<h4 class="latest-post__title">${element.title.rendered}</h4>
					<div class="info__container">
						<span class="info__day">2 days ago</span>
						<span class="info__line">|</span>
						<span class="info__comments">200 comments</span>			
					</div>
					</a>
				</div>
				`;
			
		});
	   
		carrusel();
	   
	
		//top-Destinations

		const topMainDestinations = document.querySelector('.top-destinations__main');
		

		for(let i=0; i<1; i++){			
			
			topMainDestinations.innerHTML += `
				<img src="${jsonResults[i].better_featured_image.source_url}" alt="${jsonResults[i].better_featured_image.alt_text}" class="top-destinations__img" />
				<div class="top-destinations__overlay">
					<h4 class="top-destinations__title top-destinations__title--main">Everything you need to know about ${jsonResults[i].tags[0]}!</h4>
					<p class="top-destinations__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil vitae quaerat delectus dolorum beatae veritatis. </p>
					<div class="info__container info__container--mainDestination">
						<span class="info__day">2 days ago</span>
						<span class="info__line">|</span>
						<span class="info__comments">200 comments</span>			
					</div>
				</div>
				<h4 class="top-destinations__countryName">${jsonResults[i].title.rendered}</h4>
		`;			
			
		}
		const topRestDestinations = document.querySelector('.top-destinations__secondary');

		for(let i=1; i<3; i++){			
			
			topRestDestinations.innerHTML += `
			<div class="top-destinations__cover">
					<img src="${jsonResults[i].better_featured_image.source_url}" alt="${jsonResults[i].better_featured_image.alt_text}" class="top-destinations__img" />
					<div class="top-destinations__overlay top-destinations__overlay--secondary">
						<h4 class="top-destinations__title">${jsonResults[i].tags[0]}</h4>
						<p class="top-destinations__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
						<div class="info__container info__container--secDestination">
							<span class="info__day">2 days ago</span>
							<span class="info__line">|</span>
							<span class="info__comments">200 comments</span>			
						</div>
						
					</div>
					<h4 class="top-destinations__countryName">${jsonResults[i].title.rendered}</h4>
				</div>
		`;			
			
		}

	
		
	
	}catch(error){
	console.log(error)

	}finally{

	}
}
getDestinations()