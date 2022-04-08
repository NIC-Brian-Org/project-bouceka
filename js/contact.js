// 3rd party library https://www.emailjs.com/ for using contact form
// get reference from the contact form and add event listener when a user submits
document.getElementById('contact-form').addEventListener('submit', function (event) {
	// prevent default behavior of form
  event.preventDefault();
  // user id of the contact
  emailjs.init('user_TyZBlYPi75Bh5IApRdRvV');

	// parse data for the submission
  const formData = {
	  message: document.getElementById('message').value,
	  name: document.getElementById('name').value,
	  phoneNumber: document.getElementById('phone').value,
	  email: document.getElementById('email').value,
  }

	// send the data -> sent asynchronously
  emailjs.send('service_8wm7a03', 'template_jfv8cwg', formData).then(
    function () {
		// after successful request it resets the form
	  document.getElementById('contact-form').reset()
		// remove a class that hides 'success' message
	  document.querySelector('.success-message').classList.remove('hidden')
	  setTimeout(() => {
		// add a class that hides 'success' message -> adds after 5 seconds
		  document.querySelector('.success-message').classList.add('hidden')
	  },5000)
    },
    function (error) {
      console.log('FAILED...', error);
    }
  );
});
