console.log("Connected.....");

const A = document.getElementById("cella");
const B = document.getElementById("cellb");
const C = document.getElementById("cellc");
const D = document.getElementById("celld");
const E = document.getElementById("celle");
const F = document.getElementById("cellf");
const G = document.getElementById("cellg");
const H = document.getElementById("cellh");
const I = document.getElementById("celli");
var reset = document.querySelector("#restart");
var player1 = false;
var player2 = false;
var computer = false;
var spk = document.getElementById("chat");
var random;
var winningCombo = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]
var player1Combo = [];
var player2Combo = [];







//checking if field is selected
function disable(turn){
    
}

function randomizer(){
    let random = Math.floor(Math.random()*2);
    console.log(random);
    if(random == 1){
        player1 = true;
        spk.innerText = "Player 1 will have the first move!";
        
        console.log("this is a " + player1);
    }
    else{
        player2 = true; 
        spk.innerText = "Player 2 will have the first move!";
        console.log("this is b " + player2);
    }
}



//turn swapping functions
function selectionA(){
    if (player1 == true && player2 == false){
        //a's turn to mark X
        A.innerText = "X";
        player1 = false;
        player2 = true;
        console.log(player1);
        console.log(player2);
    }
    else if (player2 == true && player1 == false){
        A.innerText = "O";
        player1 = false;
        player2 = true;
        console.log(player1);
        console.log(player2);
    }
    else{
        spk.innerText = "Aye, you dun fucked up fam.";
    }
}