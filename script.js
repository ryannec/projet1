let buttonBurger = document.querySelector(".menu-burger");
let invisible = document.querySelector(".invisible")
buttonBurger.addEventListener('click',() => {
invisible.classList.toggle("visible");
});
let grandLogo = document.querySelector(".grandlogo")
let body = document.querySelector("body");

if(body.width > "600px"){
grandLogo.src = "image d'accueil.jpg";
body.style.backgroundColor = "blue";
}
