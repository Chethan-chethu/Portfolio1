// Initialize EmailJS with your user ID (find it on the EmailJS dashboard)
emailjs.init("QENB-vUiEhmFJiEsH");

document.getElementById('contactForm').addEventListener('submit', function(event) {    
    event.preventDefault();

    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Prepare the email data
    var templateParams = {
        user_name: name,
        user_email: email,
        message: message
    };

    // Send the email
    emailjs.send('service_pfl2x2c', 'template_7nhi0ei', templateParams)
        .then(function(response) {
            console.log('Email sent successfully:', response);
            alert('Your message has been sent!');
        }, function(error) {
            console.log('Error sending email:', error);
            alert('Something went wrong. Please try again later.');
        });
});
