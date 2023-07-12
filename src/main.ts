const burger = document.querySelector("#burger");
const menu = document.querySelector("#navMenu")

function openMenu() {
    menu?.classList.toggle("translate-x-full");
    console.log('open menu clicked');
}