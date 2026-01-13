document.addEventListener('DOMContentLoaded', function() {
    const capturingSection = document.querySelector('.capturing-section');
    const capturingImage = document.querySelector('.capturing-image');
    
    if (capturingSection && capturingImage) {
        window.addEventListener('scroll', function() {
            const rect = capturingSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calculate how much of the section is visible
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            
            // When section enters viewport, start zooming
            if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
                // Calculate scroll progress (0 to 1)
                const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
                
                // Zoom from 1.2x to 1x as user scrolls past
                const scale = 1.2 - (scrollProgress * 0.2);
                capturingImage.style.transform = `scale(${scale})`;
            }
        });
    }

    // Contact Modal
    const bannerClick = document.getElementById('banner-click');
    const modal = document.getElementById('contact-modal');
    const closeBtn = document.querySelector('.modal-close');

    if (bannerClick) {
        bannerClick.addEventListener('click', function(e) {
            e.preventDefault();
            if (modal) {
                modal.style.display = 'block';
            }
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});

