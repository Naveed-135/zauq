// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize Swiper for testimonials
document.addEventListener('DOMContentLoaded', function() {
    const testimonialSwiper = new Swiper('.testimonial-swiper', {
        // Swiper configuration
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.testimonial-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonial-nav-next',
            prevEl: '.testimonial-nav-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
        // Custom CSS classes
        wrapperClass: 'swiper-wrapper',
        slideClass: 'swiper-slide',
        slideActiveClass: 'swiper-slide-active',
        slideNextClass: 'swiper-slide-next',
        slidePrevClass: 'swiper-slide-prev',
    });

    // Initialize Swiper for customer reviews
    const customerReviewsSwiper = new Swiper('.customer-reviews-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.customer-reviews-pagination',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
        },
        navigation: {
            nextEl: '.customer-reviews-next',
            prevEl: '.customer-reviews-prev',
        },
        // Custom CSS classes
        wrapperClass: 'swiper-wrapper',
        slideClass: 'swiper-slide',
        slideActiveClass: 'swiper-slide-active',
        slideNextClass: 'swiper-slide-next',
        slidePrevClass: 'swiper-slide-prev',
    });
});

// FAQ Accordion functionality
function toggleFAQ(faqNumber) {
    const answer = document.getElementById(`faq-answer-${faqNumber}`);
    const icon = document.querySelector(`#faq-answer-${faqNumber}`).previousElementSibling.querySelector('.faq-icon-text');
    
    if (answer.style.display === 'none' || answer.style.display === '') {
        // Close all other FAQs
        const allAnswers = document.querySelectorAll('.faq-answer');
        const allIcons = document.querySelectorAll('.faq-icon-text');
        
        allAnswers.forEach(ans => {
            ans.style.display = 'none';
        });
        
        allIcons.forEach(icn => {
            icn.textContent = '+';
        });
        
        // Open clicked FAQ
        answer.style.display = 'block';
        icon.textContent = '-';
    } else {
        // Close clicked FAQ
        answer.style.display = 'none';
        icon.textContent = '+';
    }
}
