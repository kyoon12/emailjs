// Initialize EmailJS with your user ID
(function(){
    emailjs.init("HcG9ipXRuSqQfFzT_");
})();


// Function to send email using EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Send the email using the form data
    console.log(this)
    emailjs.sendForm('service_rvxj1bq', 'template_ddptx8k', this)
        .then(function() {
            alert('Thank you for sending me a message.');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Failed to send the message: ' + JSON.stringify(error));
        });
});
