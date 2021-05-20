const queryString = document.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
console.log(params);

const id = params.get('id');
console.log(id);

const main = document.querySelector('main');

async function getId(id){
    try{
        const response = await fetch('https://travelblogapi.argenteam.tech/wp-json/wp/v2/posts/' + id);
        const jsonResults = await response.json();
		console.log(jsonResults);

     

        main.innerHTML+= `
            
                ${jsonResults.content.rendered}
            
        `;
               
        // console.log(document.querySelector('.portrait'))
        let backgroundImage = document.querySelector('.portrait');
        backgroundImage.style.backgroundImage=`url('${jsonResults.better_featured_image.source_url}')`;

       
      
    }catch(error){
		// document.querySelector('.alert').innerHTML = showAlertTouser(
		// 	'An error occured. We are working to fix it as soon as possible',
		// 	'danger'
		// );
        alert("hola ")

    }finally{

    }
}

getId(id);

