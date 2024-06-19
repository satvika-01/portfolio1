
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const navMenu = document.querySelector('.nav-menu');
document.querySelector('.logo').addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navMenu.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});