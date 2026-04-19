window.onload = function() {
    // Check if libraries exist before doing anything
    if (typeof emailjs === 'undefined') {
        console.error("EmailJS failed to load! Check your CDN link.");
        return;
    }

    // Initialize with your Public Key
    emailjs.init("452q9_LMzj8wUpFVN"); 

    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Your sending logic here...
            emailjs.sendForm('service_hrbw0wk', 'template_id', this)
                .then(() => alert("Sent!"))
                .catch((err) => console.log(err));
        });
    }
};