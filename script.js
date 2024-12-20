document.addEventListener('DOMContentLoaded', function () {
    // Toggle navbar on mobile
    const toggleButton = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('.nav-links');

    toggleButton.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.style.animation = 'fadeOut 0.5s ease forwards';
            setTimeout(() => {
                navLinks.classList.remove('active');
                navLinks.style.animation = '';
            }, 500);
            toggleButton.classList.remove('opened');
        } else {
            navLinks.classList.add('active');
            navLinks.style.animation = 'fadeIn 0.5s ease forwards';
            toggleButton.classList.add('opened');
        }
    });

    // CV download functionality
    const downloadCvButton = document.querySelector('.download-cv');
    downloadCvButton.addEventListener('click', function () {
        window.location.href = 'file/Ahamed Jishfaan M S CV Updated.pdf'; // Ensure this path correctly points to your CV file
    });

    // View certificate function revised for better path handling
    window.viewCertificate = function (certificateId) {
        const basePath = '/path-to-certificates/'; // Update this to the correct directory where your certificates are stored
        const fullPath = `${basePath}${certificateId}.pdf`; // Assumes certificates are stored in PDF format
        window.open(fullPath, '_blank');
    };
});

// Handle gallery animations
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});

