document.addEventListener('DOMContentLoaded', () => {
    // 1. Element Selection
    const imageLink = document.getElementById('melox-image-link');
    const imageElement = imageLink ? imageLink.querySelector('img') : null;
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeButton = document.getElementById('lightbox-close');

    if (!imageLink || !lightboxOverlay) {
        // Essential elements not found, stop execution.
        return;
    }

    // Function to close the lightbox and restore scrolling
    const closeLightbox = () => {
        lightboxOverlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    };
    
    // 2. Open Lightbox Functionality
    imageLink.addEventListener('click', (e) => {
        e.preventDefault(); // Stop the link from navigating

        // Set the source of the lightbox image to the clicked image's source
        lightboxImage.src = imageElement.src;
        
        // Display the lightbox and prevent background scrolling
        lightboxOverlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // 3. Close Lightbox Functionality
    
    // Close on close button click
    closeButton.addEventListener('click', closeLightbox);

    // Close when clicking outside the image content (on the overlay itself)
    lightboxOverlay.addEventListener('click', (e) => {
        if (e.target === lightboxOverlay) {
            closeLightbox();
        }
    });

    // Close on ESC key press
    document.addEventListener('keydown', (e) => {
        // Check if the Escape key was pressed and the lightbox is visible
        if (e.key === 'Escape' && lightboxOverlay.style.display === 'block') {
            closeLightbox();
        }
    });
});