document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = document.querySelector('header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });

    // Modal functionality
    const modal = document.getElementById('service-modal');
    const beginPlanBtn = document.getElementById('begin-plan-btn');
    const backBtn = document.getElementById('back-button');
    const serviceForm = document.getElementById('service-form');
    const successMessage = document.getElementById('success-message');

    beginPlanBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
        serviceForm.style.display = 'block';
        successMessage.style.display = 'none';
    });

    backBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    serviceForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validation
        const services = document.querySelectorAll('input[name="service"]:checked');
        if (services.length === 0) {
            alert('Please select at least one service.');
            return;
        }

        const email = document.getElementById('email').value;
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        const consent = document.getElementById('consent').checked;
        if (!consent) {
            alert('Please agree to the terms before submitting.');
            return;
        }

        // Show success message
        serviceForm.style.display = 'none';
        successMessage.style.display = 'block';
    });

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
