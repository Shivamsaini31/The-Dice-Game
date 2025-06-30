document.querySelector("h1").textContent="Display a Winner!";
var val1=Math.floor(Math.random()*6)+1;
var val2=Math.floor(Math.random()*6)+1;
var p1="dice"+val1;
var p2="dice"+val2;
document.querySelector(".img1").setAttribute("src",`images/${p1}.png`);
document.querySelector(".img2").setAttribute("src",`images/${p2}.png`);
if(val2>val1){
    document.querySelector("h1").textContent="Player 2 Wins!🚩";
}
else if(val1>val2){
    document.querySelector("h1").textContent="🚩Player 1 Wins!";
}
else{
    document.querySelector("h1").textContent="It's a tie!";
}