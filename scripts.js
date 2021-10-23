/* Add your JavaScript to this file */

window.onload = function() {
	var form = document.querySelector('form');
	var button = document.querySelector(".btn");
	
	
	form.addEventListener('submit', function(element) {
		element.preventDefault();
		var email = document.querySelector('#email');
		var msg = document.querySelector('.message');
		
		console.log("pass");
	
		if (email.value.trim().length != 0) {
			msg.innerHTML = "Thank you! Your email address " + email.value + " has been added to our mailing list!";
			email.value = "";
		}
		else{
			msg.innerHTML = "Please enter a valid email address";
			console.log("error");
		}
	})
}

