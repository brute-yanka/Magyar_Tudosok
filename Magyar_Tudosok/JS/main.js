/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== QUIZ ===============*/
const accordionItems = document.querySelectorAll('.quiz__item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.quiz__header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.open')

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
});

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.quiz__content')

    if (item.classList.contains('open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('open')
    }

};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
};
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});

/*=============== BULL MODAL ===============*/
const modalView = document.querySelector('.bulls__modal'),
    modalBtn = document.querySelectorAll('.bulls__button'),
    modalClose = document.querySelector('.bulls__modal-close');



modalBtn.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modalView.classList.add('active-modal');
    })
});

if(modalClose){
    modalClose.addEventListener('click', () =>{
        modalView.classList.remove('active-modal')
    })
};

/*=============== HELP ===============*/
const helpItems = document.querySelectorAll('.help__item')

helpItems.forEach((item) =>{
    const helpHeader = item.querySelector('.help__header')

    helpHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.help-open')
        
        toggleHelp(item)

        if(openItem && openItem!== item){
            toggleHelp(openItem)
        }
    })
})

const toggleHelp = (item) => {
    const helpContent = item.querySelector('.help__content')

    if (item.classList.contains('help-open')) {
        helpContent.removeAttribute('style')
        item.classList.remove('help-open')
    } else {
        helpContent.style.height = helpContent.scrollHeight + 'px'
        item.classList.add('help-open')
    }
};

const sliderView = document.querySelector('.slider__modal'),
    sliderBtn = document.querySelectorAll('.slider__button'),
    sliderClose = document.querySelector('.slider__modal-close');

sliderBtn.forEach((nb, i) => {
    nb.addEventListener('click', () => {
        sliderView.classList.add('active-slider__modal');
    })
});

if(sliderClose){
    sliderClose.addEventListener('click', () =>{
        sliderView.classList.remove('active-slider__modal')
    })
};