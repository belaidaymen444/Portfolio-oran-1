const themeCheckbox = document.getElementById('theme-checkbox');
themeCheckbox.addEventListener('change', () => {
    document.body.setAttribute('data-theme', 
        themeCheckbox.checked ? 'dark' : 'light');
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-hidden').forEach((el) => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});