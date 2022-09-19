const menu = document.querySelector(".fa-solid")
const navMenu = document.querySelector(".nav-menu")

menu.addEventListener('click',()=>{
    navMenu.classList.toggle('mobile-menu')
})
