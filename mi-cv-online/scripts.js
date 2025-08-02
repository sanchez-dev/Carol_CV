// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hide header on scroll down, show on scroll up
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   
   // Make sure scroll is more than a certain amount to avoid weird behavior on mobile
   if (scrollTop > lastScrollTop && scrollTop > 100){
       // Scroll Down
       header.classList.add('header-hidden');
   } else {
       // Scroll Up
       header.classList.remove('header-hidden');
   }
   
   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
