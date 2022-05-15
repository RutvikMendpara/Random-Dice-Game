const randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
const randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "👦 won the game";
}
if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "💻 won the game";
}
if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "It's a Draw";
}
