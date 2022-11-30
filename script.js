let buttonBurger = document.querySelector(".menu-burger");
let invisible = document.querySelector(".invisible")
buttonBurger.addEventListener('click',() => {
invisible.classList.toggle("visible");
})