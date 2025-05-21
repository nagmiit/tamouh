// إدارة قسم "من نحن"
document.getElementById('about-link').addEventListener('click', function(e) {
    e.preventDefault();
    const aboutContent = document.getElementById('about-content');
    
    if (aboutContent.style.display === 'block') {
        aboutContent.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            aboutContent.style.display = 'none';
        }, 300);
    } else {
        aboutContent.style.display = 'block';
        aboutContent.style.animation = 'fadeIn 0.3s ease';
    }
    
    // Scroll إلى القسم
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

// إدارة نافذة التواصل
const contactModal = document.getElementById('contact-modal');
const contactLink = document.getElementById('contact-link');
const closeBtn = document.querySelector('.close');

contactLink.addEventListener('click', function(e) {
    e.preventDefault();
    contactModal.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
    contactModal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === contactModal) {
        contactModal.style.display = 'none';
    }
});

// تأثيرات البطاقات
const linkCards = document.querySelectorAll('.link-card');
linkCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });
});

// إضافة تأثيرات للزر الرئيسي
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('mouseenter', () => {
        ctaButton.style.transform = 'translateY(-3px) scale(1.05)';
    });
    ctaButton.addEventListener('mouseleave', () => {
        ctaButton.style.transform = 'translateY(0) scale(1)';
    });
}

// تأثيرات الظهور للعناصر
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section, .links-section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease';
    observer.observe(section);
});

// تعريف أنيميشن إضافية
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(20px); }
    }
`;
document.head.appendChild(style);