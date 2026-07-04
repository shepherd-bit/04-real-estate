document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        
        // Animate hamburger
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            hamburger.classList.remove('active');
        });
    });
});
