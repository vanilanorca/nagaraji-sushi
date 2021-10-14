// LOADING
function load (){
    document.getElementById("loading").style.display = "none";
    document.getElementById("show").style.display = "flex"
}

window.onload = (function () { window.setInterval('load()',2900);})



// ======== HAMBURGER MENU =========
var hambMenu = document.getElementById("hamb-menu");
var closeMenu = document.getElementById("close-menu");
var nav = document.getElementById("nav");

function openMenu(){
    nav.style.display = "flex"
    closeMenu.style.display = "inherit"
}

function closeMenuFunction(){
    nav.style.display = "none"
    hambMenu.style.display = "inherit"
}