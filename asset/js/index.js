// Menu navigasi
const navigation = document.querySelector('nav ul');
const checkbox = document.querySelector('#checkbox');

checkbox.addEventListener('click', function() {
    navigation.classList.toggle('tampil');
});

// Ketika di scroll menampilkan background
const navigationScroll = document.querySelector('nav');
window.addEventListener('scroll', function() {
navigationScroll.classList.toggle('scroll', window.scrollY > 0)
});

// Agar nav tidak menutupi text ketika di scroll
const links = document.querySelectorAll('.link');
for (const link of links) {
    link.addEventListener('click', clickText);
};

function clickText(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const scrollTop = document.querySelector(href).offsetTop - 100;
    scroll({
        top:scrollTop, 
        behavior:'smooth'
    })
}