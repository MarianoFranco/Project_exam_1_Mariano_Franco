const submit = document.querySelector('#submit');
const nameError = document.querySelector('.nameError');
const emailError = document.querySelector('.emailError');
const subjectError = document.querySelector('.subjectError');
const messageError = document.querySelector('.messageError');

submit.onclick = function (event) {
	
	event.preventDefault();
	// All Textbox values
	const name = document.querySelector('#name').value.trim();
	const email = document.querySelector('#email').value.trim();
	const subject = document.querySelector('#subject').value.trim();
    const message = document.querySelector('#message').value.trim();
  
   // validate name

	if (name.length<6) {
		nameError.classList.add('show');
		
	} else {
		nameError.classList.remove('show');
	}

    //validate email

	if (validateEmail(email) === false) {
		emailError.classList.add('show');       
		
	} else {
		
		emailError.classList.remove('show');
	}

	function validateEmail(emailToAdd) {
        const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const isEmailValid = emailExpression.test(emailToAdd);
        
        return isEmailValid;
    }

    //validate subject

    if (subject.length<16) {
		subjectError.classList.add('show');
		
	} else {
		subjectError.classList.remove('show');
	}

    //textbox validation

    if (message.length<26) {
		messageError.classList.add('show');
		
	} else {
		messageError.classList.remove('show');
	}
};