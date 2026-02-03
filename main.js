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
    enquiryForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = enquiryForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = 'Sending...';

        const formData = new FormData(enquiryForm);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    // Show thank you message
                    const formContainer = enquiryForm.parentElement;
                    const thankYouMessage = document.getElementById('thankYouMessage');

                    enquiryForm.style.display = 'none';
                    thankYouMessage.style.display = 'block';

                    // Scroll to message
                    thankYouMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    console.log(response);
                    alert('Something went wrong. Please WhatsApp us instead.');
                    submitBtn.innerText = originalText;
                }
            })
            .catch(error => {
                console.log(error);
                alert('Something went wrong. Please WhatsApp us instead.');
                submitBtn.innerText = originalText;
            });
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
