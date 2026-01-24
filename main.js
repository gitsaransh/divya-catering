// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('open');
    });
}

// Smooth scroll implementation (if needed for internal links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form handling (if on contact page)
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show thank you message
        const formContainer = enquiryForm.parentElement;
        const thankYouMessage = document.getElementById('thankYouMessage');
        
        enquiryForm.style.display = 'none';
        thankYouMessage.style.display = 'block';
        
        // Scroll to message
        thankYouMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}

// Add scroll shadow to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
