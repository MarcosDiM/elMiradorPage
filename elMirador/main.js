const navbar = document.getElementById("navbar");

window.addEventListener('scroll', () => {
    const scrollThreshold = window.innerHeight * 0.4;
    if (window.scrollY > scrollThreshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});