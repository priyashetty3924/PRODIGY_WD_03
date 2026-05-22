const cells = document.querySelectorAll(".cell");

const statusText =
document.getElementById("status");

let currentPlayer = "X";

let gameActive = true;

let gameState =
["","","","","","","","",""];

const winningConditions = [

[0,1,2],
[3,4,5],
[6,7,8],

[0,3,6],
[1,4,7],
[2,5,8],

[0,4,8],
[2,4,6]

];

cells.forEach(cell => {

cell.addEventListener("click",
cellClicked);

});

function cellClicked(){

const index =
this.getAttribute("data-index");

if(gameState[index] != "" ||
!gameActive){
return;
}

gameState[index] =
currentPlayer;

this.innerText =
currentPlayer;

checkWinner();
}

function checkWinner(){

let roundWon = false;

for(let i=0;
i<winningConditions.length;
i++){

const condition =
winningConditions[i];

const a =
gameState[condition[0]];

const b =
gameState[condition[1]];

const c =
gameState[condition[2]];

if(a == "" || b == "" || c == ""){
continue;
}

if(a == b && b == c){

roundWon = true;
break;

}
}

if(roundWon){

statusText.innerText =
"Player " + currentPlayer +
" Wins!";

gameActive = false;

return;
}

if(!gameState.includes("")){

statusText.innerText =
"Match Draw!";

gameActive = false;

return;
}

currentPlayer =
currentPlayer == "X" ? "O" : "X";

statusText.innerText =
"Player " + currentPlayer +
" Turn";
}

function restartGame(){

currentPlayer = "X";

gameActive = true;

gameState =
["","","","","","","","",""];

statusText.innerText =
"Player X Turn";

cells.forEach(cell => {
cell.innerText = "";
});

}