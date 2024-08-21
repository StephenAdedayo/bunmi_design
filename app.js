let navBar = document.querySelector('#nav-bar')
let menu = document.querySelector('#menu-icon')

const navMenu = document.querySelector('#navver')


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-xmark')
    navBar.classList.toggle('hidden')
})


// window.onScroll(() => {
//     menu.classList.remove('fa-xmark')
//     navBar.classList.remove('hidden')
// })

window.addEventListener('scroll', addition)

const addition = () => {
    if(window.scrollY >= 80){
        navMenu.classList.add('bg-white')

    } else
    navMenu.classList.remove('bg-white')

}