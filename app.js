document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'header.png',
        'header2.jpg',
        'header3.jpg'
    ];
    let currentImageIndex = 0;
    const headerImage = document.querySelector('.header__image img');

    function changeImage() {
        headerImage.src = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    setInterval(changeImage, 5000); // Change image every 5 seconds

    // Scroll to top button
    const scrollToTopButton = document.getElementById('scrollToTopButton');
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Image slideshow for the explore section
    const exploreImages = [
        'explore1.jpg',
        'explore2.jpg',
        'explore3.jpg'
    ];
    let currentExploreIndex = 0;
    const exploreImage = document.querySelector('.explore__image img');

    function changeExploreImage() {
        exploreImage.src = exploreImages[currentExploreIndex];
        currentExploreIndex = (currentExploreIndex + 1) % exploreImages.length;
    }

    setInterval(changeExploreImage, 5000); // Change image every 5 seconds

    // Testimonials slider
    const testimonials = document.querySelectorAll('.review__content');
    let currentTestimonialIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.style.display = 'none';
        });
        testimonials[index].style.display = 'block';
    }

    function nextTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        showTestimonial(currentTestimonialIndex);
    }

    function prevTestimonial() {
        currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonialIndex);
    }

    showTestimonial(currentTestimonialIndex); // Show initial testimonial
    document.querySelector('.ri-arrow-left-line').addEventListener('click', prevTestimonial);
    document.querySelector('.ri-arrow-right-line').addEventListener('click', nextTestimonial);
});
