
// ==== MANIPULASI ICON MENU ====
const menu = document.getElementById('menu');
const sidebar = document.querySelector('.sidebar');

function klikMenu(){
    menu.classList.toggle('fa-times');
    sidebar.classList.toggle('aktif');
}
menu.onclick = klikMenu;

// ==== NAVBAR STICKY ====
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

// ==== SCROLLING ====
const home = document.getElementById('home');
const about = document.getElementById('about');
const gallery = document.getElementById('gallery');
const contact = document.getElementById('contact')
;

// menggunakan event scroll dengan memanipulasi offset atas dari window
window.addEventListener('scroll', function(){
    let w = window.pageYOffset;

    if(about.offsetTop <= w && gallery.offsetTop > w){

        let navAbout = document.querySelector('.nav-about');
        let navGallery = document.querySelector('.nav-gallery');
        let navContact = document.querySelector('.nav-contact');
        let navHome = document.querySelector('.nav-home');

        navAbout.setAttribute('id', 'active');
        navGallery.removeAttribute('id','active');
        navContact.removeAttribute('id','active');
        navHome.removeAttribute('id','active');

    } else if(gallery.offsetTop <= w && contact.offsetTop > w){

        let navAbout = document.querySelector('.nav-about');
        let navGallery = document.querySelector('.nav-gallery');
        let navContact = document.querySelector('.nav-contact');
        let navHome = document.querySelector('.nav-home');

        navGallery.setAttribute('id','active');
        navAbout.removeAttribute('id', 'active');
        navContact.removeAttribute('id','active');
        navHome.removeAttribute('id','active');

    } else if(contact.offsetTop <= w){

        let navAbout = document.querySelector('.nav-about');
        let navGallery = document.querySelector('.nav-gallery');
        let navContact = document.querySelector('.nav-contact');
        let navHome = document.querySelector('.nav-home');

        navContact.setAttribute('id','active');
        navAbout.removeAttribute('id', 'active');
        navGallery.removeAttribute('id','active');
        navHome.removeAttribute('id','active');
        
    } else {

        let navAbout = document.querySelector('.nav-about');
        let navGallery = document.querySelector('.nav-gallery');
        let navContact = document.querySelector('.nav-contact');
        let navHome = document.querySelector('.nav-home');

        navHome.setAttribute('id','active');
        navAbout.removeAttribute('id', 'active');
        navGallery.removeAttribute('id','active');
        navContact.removeAttribute('id','active');
    }

});
