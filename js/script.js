// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('toggle');
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('toggle');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Adjust for header height
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll event listener to change header style
const header = document.querySelector('header');
const scrollThreshold = 100;

window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});

// Add active class to the current navigation item
function setActiveNavItem() {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${currentSection}`) {
            item.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveNavItem);

// Contact Form Validation & Submit
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !subject || !message) {
            formStatus.textContent = 'Harap isi semua bidang yang diperlukan.';
            formStatus.style.color = '#dc3545';
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formStatus.textContent = 'Harap masukkan alamat email yang valid.';
            formStatus.style.color = '#dc3545';
            return;
        }
        
        // Simulate form submission (in real implementation, you would send data to server)
        formStatus.textContent = 'Mengirim pesan...';
        formStatus.style.color = '#4263eb';
        
        // Simulate API call
        setTimeout(() => {
            formStatus.textContent = 'Pesan terkirim! Terima kasih telah menghubungi.';
            formStatus.style.color = '#28a745';
            contactForm.reset();
            
            // Clear success message after 5 seconds
            setTimeout(() => {
                formStatus.textContent = '';
            }, 5000);
        }, 1500);
    });
}

// Add hover effect for project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.05)';
    });
});

// Add animations on scroll
function revealOnScroll() {
    const revealElements = document.querySelectorAll('section, .about-content, .skills, .project-card, .contact-info, .contact-form');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    revealElements.forEach(element => {
        const revealTop = element.getBoundingClientRect().top;
        
        if (revealTop < windowHeight - revealPoint) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        } else {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
        }
    });
}

// Initialize animation styles
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('section, .about-content, .skills, .project-card, .contact-info, .contact-form');
    
    animatedElements.forEach(element => {
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
    });
    
    // Trigger the initial animation
    setTimeout(revealOnScroll, 300);
});

window.addEventListener('scroll', revealOnScroll);