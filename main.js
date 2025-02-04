// Typing animation for the AI demo section
const demoText = `function generateAIResponse(prompt) {
    const response = await AI.complete(prompt);
    return response.enhance();
}`;

const typingDemo = document.querySelector('.typing-demo');
let charIndex = 0;

function typeText() {
    if (charIndex < demoText.length) {
        typingDemo.textContent = demoText.slice(0, charIndex) + '|';
        charIndex++;
        setTimeout(typeText, Math.random() * 100 + 50); // Random delay for realistic typing
    }
}

// Interactive animations for navigation and hero
document.addEventListener('DOMContentLoaded', () => {
    // Hero text animation
    const heroTitle = document.querySelector('h1');
    const subtitle = document.querySelector('.subtitle');
    const ctaButtons = document.querySelector('.cta-buttons');
    
    // Stagger the entrance animations
    heroTitle.style.opacity = '0';
    subtitle.style.opacity = '0';
    ctaButtons.style.opacity = '0';
    
    setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
    }, 300);
    
    setTimeout(() => {
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
    }, 600);
    
    setTimeout(() => {
        ctaButtons.style.opacity = '1';
        ctaButtons.style.transform = 'translateY(0)';
    }, 900);

    // Interactive navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            const { left, top, width, height } = link.getBoundingClientRect();
            
            // Create hover effect
            const hoverEffect = document.createElement('div');
            hoverEffect.className = 'nav-hover-effect';
            document.body.appendChild(hoverEffect);
            
            hoverEffect.style.width = `${width + 20}px`;
            hoverEffect.style.height = `${height + 10}px`;
            hoverEffect.style.left = `${left - 10}px`;
            hoverEffect.style.top = `${top - 5}px`;
            
            link.addEventListener('mouseleave', () => {
                hoverEffect.remove();
            }, { once: true });
        });
    });

    // Magnetic effect for CTA buttons
    const buttons = document.querySelectorAll('.primary-btn, .secondary-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Handle entrance animations
document.addEventListener('DOMContentLoaded', () => {
    // Add visible class to nav elements immediately
    requestAnimationFrame(() => {
        document.querySelector('.nav-content').classList.add('visible');
        document.querySelector('.nav-left').classList.add('visible');
        document.querySelector('.nav-center').classList.add('visible');
        document.querySelector('.nav-right').classList.add('visible');
    });

    // Add visible class to hero elements with staggered timing
    setTimeout(() => {
        document.querySelector('.hero h1').classList.add('visible');
    }, 300);

    setTimeout(() => {
        document.querySelector('.subtitle').classList.add('visible');
    }, 400);

    setTimeout(() => {
        document.querySelector('.cta-buttons').classList.add('visible');
    }, 500);

    setTimeout(() => {
        document.querySelector('.hero-image').classList.add('visible');
    }, 600);
});

// Handle nav background on scroll
const nav = document.querySelector('nav');
const heroSection = document.querySelector('.hero');

const updateNavBackground = () => {
    const scrollPosition = window.scrollY;
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    
    if (scrollPosition > heroBottom - nav.offsetHeight) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
};

// Initial check
updateNavBackground();

// Add scroll listener
window.addEventListener('scroll', () => {
    requestAnimationFrame(updateNavBackground);
});

// Update on resize too
window.addEventListener('resize', () => {
    requestAnimationFrame(updateNavBackground);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Download button click handlers
document.querySelectorAll('.primary-btn, .secondary-btn, .download-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Replace with actual download logic
        window.location.href = 'https://github.com/your-cursor-repo/releases';
    });
});

// Feature card hover effects
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});
