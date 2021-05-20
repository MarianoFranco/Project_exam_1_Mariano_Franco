const main = document.querySelector('main');
const lastPost = document.querySelector('.last-post');
const allPost = document.querySelector('.post_cardsContainer');

async function getDestinations() {
	try{
		const response = await fetch('https://travelblogapi.argenteam.tech/wp-json/wp/v2/posts');
		const jsonResults = await response.json();
		console.log(jsonResults);
		let nameTag= '';
		let nameTag2= '';

		for(let i=0; i < 1; i++){
			let tags = jsonResults[i].tags;
			
			if(tags[0] === 10){
				nameTag = 'Spain';
			}			
			else if(tags[0] === 12){
				nameTag = 'Argentina';
			}
			if(tags[1] === 9){
				nameTag2 = 'Benidorm';
			}
			else if(tags[1] === 13){
				nameTag2 = 'Iguazu';
			}
			else if(tags[1] === 15){
				nameTag2 = 'Mar del Plata';
			}
			for (let j = 0; j < tags.length; j++) {
				// if(j===0){
				// 	getCoverImg = imagenes[j].src
				// 	console.log(getCoverImg)
				// }	
				// console.log(tags)		
			}		

			if(jsonResults[i].tag === undefined){
				console.log("argentina");
			}

			lastPost.innerHTML += `
			<h3 class="last-post__title">Last post</h3>
			<article class="post__card--main">
				<img src="${jsonResults[i].better_featured_image.source_url}" alt="" class="post__img">
				<div class="post__tags">
					<h4 class="post__tag">${nameTag}</h4>
					<h4 class="post__tag">${nameTag2}</h4>
				</div>                
				<h4 class="post__title">${nameTag2}!!!... A place you will never forget!!!</h4>
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
			`;
		}
		for(let i=1; i < jsonResults.length; i++){
			let tags = jsonResults[i].tags;
			
			if(tags[0] === 10){
				nameTag = 'Spain';
			}			
			else if(tags[0] === 12){
				nameTag = 'Argentina';
			}
			if(tags[1] === 9){
				nameTag2 = 'Benidorm';
			}
			else if(tags[1] === 13){
				nameTag2 = 'Iguazu';
			}
			else if(tags[1] === 15){
				nameTag2 = 'Mar del Plata';
			}
			
			for (let j = 0; j < tags.length; j++) {
				// if(j===0){
				// 	getCoverImg = imagenes[j].src
				// 	console.log(getCoverImg)
				// }	
				// console.log(tags)		
			}		

			if(jsonResults[i].tags === undefined){
				console.log("argentina");
			}

			allPost.innerHTML += `			
				<article class="post__card--mini">
					<img src="${jsonResults[i].better_featured_image.source_url}" alt="" class="post__img post__img--mini">
					<div class="post__tags post__tags--mini">
						<h4 class="post__tag">${nameTag}</h4>
						<h4 class="post__tag">${nameTag2}</h4>
					</div>                
					<h4 class="post__title post__title--mini">${nameTag2}!!!... A place you will never forget!!!</h4>
					<p class="post__desc post__desc--mini">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente deleniti modi, facere nam eveniet delectus ad aliquam quasi quia consectetur rem maxime qui laudantium odit animi. Saepe blanditiis doloribus inventore. </p>                
					<a href="blog_details.html?id=${jsonResults[i].id}" class="post__readMore post__readMore--mini">read more</a>
					<div class="line"></div>
					<div class="info__container">
						<span class="info__day">2 days ago</span>
						<span class="info__line">|</span>
						<span class="info__comments">200 comments</span>	
					</div>
				</article>			
			
			`;
		}
	}catch{
		alert("hola blog ")

	}finally{

	}
}
getDestinations();