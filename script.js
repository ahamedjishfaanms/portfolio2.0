document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            // Closing animation
            navLinks.style.animation = 'fadeOut 0.5s ease forwards';
            setTimeout(() => {
                navLinks.classList.remove('active');
                navLinks.style.animation = ''; // Reset animation
            }, 500);
            toggleButton.classList.remove('opened');
        } else {
            // Opening animation
            navLinks.classList.add('active');
            navLinks.style.animation = 'fadeIn 0.5s ease forwards';
            toggleButton.classList.add('opened');
        }
    });
});
function viewCertificate(certificateUrl) {
    window.open(certificateUrl, '_blank');
}
document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`; // Staggered animation
    });
});
