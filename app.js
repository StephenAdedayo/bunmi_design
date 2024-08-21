let navBar = document.querySelector('#nav-bar')
let menu = document.querySelector('#menu-icon')

const navMenu = document.querySelector('#navver')


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-xmark')
    navBar.classList.toggle('hidden')
})




