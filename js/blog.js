const main = document.querySelector('main');
const lastPost = document.querySelector('.last-post');
const allPost = document.querySelector('.post_cardsContainer');

async function getDestinations() {
	try{
		const response = await fetch('https://travelblogapi.argenteam.tech/wp-json/wp/v2/posts');
		const response2 = await fetch('https://travelblogapi.argenteam.tech/wp-json/wp/v2/posts?page=2');

		const jsonResults = await response.json();
		const jsonResults2 = await response2.json(); 

		console.log(jsonResults);
		console.log(jsonResults2);
		
		//last post
		for(let i=0; i < 1; i++){
			let tags = jsonResults[i].tags;
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
			lastPost.innerHTML += `
			<h3 class="last-post__title">Last post</h3>
			<a href="blog_details.html?id=${jsonResults[i].id}" class="post__link">
			<article class="post__card--main">
				<div class="post__imgContainer">
					<img src="${jsonResults[i].better_featured_image.source_url}" alt="" class="post__img">
					<div class="post__tags">
						<h4 class="post__tag">${country}</h4>
						<h4 class="post__tag">${city}</h4>
					</div> 
				</div>	               
				<h4 class="post__title">${city}!!!... A place you will never forget!!!</h4>
				<p class="post__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente deleniti modi, facere nam eveniet delectus ad aliquam quasi quia consectetur rem maxime qui laudantium odit animi. Saepe blanditiis doloribus inventore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente deleniti modi, facere nam eveniet delectus ad aliquam quasi quia consectetur rem maxime qui laudantium odit animi. Saepe blanditiis doloribus inventore.</p>                
				<a href="blog_details.html?id=${jsonResults[i].id}" class="post__readMore">read more</a>
				<div class="line"></div>
				<div class="info__container">
					<span class="info__day">2 days ago</span>
					<span class="info__line">|</span>
					<span class="info__comments">200 comments</span>	
				</div>
			</article>
			<div class="line"></div>
			</a>
			`;
		}
		//all post
		for(let i=1; i < jsonResults.length; i++){
			let tags = jsonResults[i].tags;
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
			<a href="blog_details.html?id=${jsonResults[i].id}" class="post__link">			
				<article class="post__card--mini">
					<img src="${jsonResults[i].better_featured_image.source_url}" alt="" class="post__img post__img--mini">
					<div class="post__tags post__tags--mini">
						<h4 class="post__tag">${country}</h4>
						<h4 class="post__tag">${city}</h4>
					</div>                
					<h4 class="post__title post__title--mini">${city}!!!... A place you will never forget!!!</h4>
					<p class="post__desc post__desc--mini">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente deleniti modi, facere nam eveniet delectus ad aliquam quasi quia consectetur rem maxime qui laudantium odit animi. Saepe blanditiis doloribus inventore. </p>                
					<a href="blog_details.html?id=${jsonResults[i].id}" class="post__readMore post__readMore--mini">read more</a>
					<div class="line"></div>
					<div class="info__container">
						<span class="info__day">2 days ago</span>
						<span class="info__line">|</span>
						<span class="info__comments">200 comments</span>	
					</div>
				</article>			
			</a>
			`;
		}
		//read more
		const readMore = document.querySelector('.get-more');
		readMore.innerHTML += `			
				<button class="get-more__container">
					<i class="fas fa-plus get-more__icon"></i>
					<span class="get-more__text">More destinations</span>
				</button>
			
		`;
		let readMoreBtn = document.querySelector('.get-more__container');

		readMoreBtn.onclick = function(e){

			for(let i=0; i < jsonResults2.length; i++){
				let tags = jsonResults2[i].tags;
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
				<a href="blog_details.html?id=${jsonResults2[i].id}" class="post__link">			
					<article class="post__card--mini">
						<img src="${jsonResults2[i].better_featured_image.source_url}" alt="" class="post__img post__img--mini">
						<div class="post__tags post__tags--mini">
							<h4 class="post__tag">${country}</h4>
							<h4 class="post__tag">${city}</h4>
						</div>                
						<h4 class="post__title post__title--mini">${city}!!!... A place you will never forget!!!</h4>
						<p class="post__desc post__desc--mini">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente deleniti modi, facere nam eveniet delectus ad aliquam quasi quia consectetur rem maxime qui laudantium odit animi. Saepe blanditiis doloribus inventore. </p>                
						<a href="blog_details.html?id=${jsonResults2[i].id}" class="post__readMore post__readMore--mini">read more</a>
						<div class="line"></div>
						<div class="info__container">
							<span class="info__day">2 days ago</span>
							<span class="info__line">|</span>
							<span class="info__comments">200 comments</span>	
						</div>
					</article>			
				</a>
				`;
			}
		}
	}catch(error){
		document.querySelector('.alert').innerHTML = showAlertTouser(
			'An error occured. We are working to fix it as soon as possible',
			'danger'
		);

	}finally{
		setTimeout(function () {
			document.querySelector('.alert').innerHTML = '';
		}, 4000);
	}
}
getDestinations();