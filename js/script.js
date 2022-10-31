const menu = document.querySelector(".fa-solid")
const navMenu = document.querySelector(".nav-menu")

menu.addEventListener('click',()=>{
    navMenu.classList.toggle('mobile-menu')
})

var btnContainer = document.getElementById("nav-menu");
var btns = btnContainer.getElementsByClassName("btn");

for(var i = 0; i<btns.length; i++){
    btns[i].addEventListener('click', function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active");
        this.className += " active";
    })
}
