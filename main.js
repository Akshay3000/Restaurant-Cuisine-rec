const navIconEl = document.querySelector('.nav__icon');
const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');

const navOpen = () => {
    navList.classList.add('show');
    navBgOverlayEl.classList.add('active');
    // whatever element will be outside of this 100vh height will be hidden
    document.body.style = 'visibility: visible ; height: 100vh ;width:100vw ;overflow: hidden;'
}

const navClose = () => {
    navList.classList.remove('show');
    navBgOverlayEl.classList.remove('active');
    document.body.style = 'visibility: visible ; height: initial ;width:100% ;overflow-x: hidden;'
}
// use this navClose even with listener

navIconEl.addEventListener('click',navOpen); 
navCloseEl.addEventListener('click',navClose);
navBgOverlayEl.addEventListener('click',navClose);


//AOS
AOS.init({
    // some options for library
    offset:200,
    delay: 100,
    duration: 400,
    easing:'ease',
    once: false,
    mirror: false,
    anchorPlacement:'top-bottom' // this is used whenever our element stop and the viewpoint bottom will meet then the animation will start

})