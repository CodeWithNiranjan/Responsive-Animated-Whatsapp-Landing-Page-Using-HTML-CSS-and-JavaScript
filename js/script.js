const menuIcon = document.querySelector(".toggle");

const mobileMenu = document.querySelector(".navMenu");

menuIcon.onclick = function(){
    if(mobileMenu.style.display != "block"){
        mobileMenu.style.display = "block"
    }
    else{
        mobileMenu.style.display = "none"
    }
}