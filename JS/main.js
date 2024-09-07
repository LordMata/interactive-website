// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert("Your message has been sent!");
    // TODO: add AJAX call to send the form data to a server
});
