document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.p
reventDefault(); 
document.getElementById('skills').addEventListener('ckick') {
    
}

   
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

   
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

 
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    let isValid = true;

    if (!name) {
        nameError.textContent = 'Name is required.';
        isValid = false;
    }

    if (!email) {
        emailError.textContent = 'Email is required.';
        isValid = false;
    }
    if (!message) {
        messageError.textContent = 'Message is required.';
        isValid = false;
    }
    // If valid, show confirmation alert
    if (isValid) {
        const confirmSend = confirm(Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\nDo you want to send this message?);
        if (confirmSend) {
            alert('Your message has been sent!');
            document.getElementById('contactForm').reset();
        }
    }
});