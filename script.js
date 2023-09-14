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

const dataA = document.getElementsByTagName("td")[0];
const dataB = document.getElementsByTagName("td")[1];
const dataC = document.getElementsByTagName("td")[2];
const dataD = document.getElementsByTagName("td")[3];
const dataE = document.getElementsByTagName("td")[4];
const dataF = document.getElementsByTagName("td")[5];
const dataG = document.getElementsByTagName("td")[6];
const dataH = document.getElementsByTagName("td")[7];
const dataI = document.getElementsByTagName("td")[8];

var A1 = document.getElementById("cella").value;
var B2 = document.getElementById("cellb").value;
var C3 = document.getElementById("cellc").value;
var D4 = document.getElementById("celld").value;
var E5 = document.getElementById("celle").value;
var F6 = document.getElementById("cellf").value;
var G7 = document.getElementById("cellg").value;
var H8 = document.getElementById("cellh").value;
var I9 = document.getElementById("celli").value;


var reset = document.querySelector("#restart");
var player1 = false;
var player2 = false;
var computer = false; //COMPUTER OPPONENT WILL EVENTUALLY BE ADDED
var spk = document.getElementById("chat");
var random;


//BELOW IS THE FUNCTION THAT CHECKS IF THERE IS A WINNER
//WHEN A WINNER HAS BEEN VERIFIED THE REMAINING SPACES WILL BE DISABLED
//THE PLAYERS WILL NEED TO RESTART
function winner(){
    if(A1 === "X" && B2 === "X" && C3 === "X" || A1 === "O" && B2 === "O" && C3 === "O"){
    A.classList.remove("disable");
    A.classList.add("winning");
    B.classList.remove("disable");
    B.classList.add("winning")
    C.classList.remove("disable");
    C.classList.add("winning");

    D.classList.add("disable");
    E.classList.add("disable");
    F.classList.add("disable");
    G.classList.add("disable");
    H.classList.add("disable");
    I.classList.add("disable");
   
    

}
else if(D4 == "X" && E5 == "X" && F6 == "X" || D4 == "O" && E5 == "O" && F6 == "O"){
    D.classList.remove("disable");
    D.classList.add("winning");
    E.classList.remove("disable");
    E.classList.add("winning")
    F.classList.remove("disable");
    F.classList.add("winning");

    A.classList.add("disable");
    B.classList.add("disable");
    C.classList.add("disable");
    G.classList.add("disable");
    H.classList.add("disable");
    I.classList.add("disable");
    
}
else if(G7 == "X" && H8 == "X" && I9 == "X" || G7 == "O" && H8 == "O" && I9 == "O"){
    G.classList.remove("disable");
    G.classList.add("winning");
    H.classList.remove("disable");
    H.classList.add("winning")
    I.classList.remove("disable");
    I.classList.add("winning");

    D.classList.add("disable");
    E.classList.add("disable");
    F.classList.add("disable");
    A.classList.add("disable");
    B.classList.add("disable");
    C.classList.add("disable");
    
}
else if(A1 == "X" && E5 == "X" && I9 == "X" || A1 == "O" && E5 == "O" && I9 == "O"){
    A.classList.remove("disable");
    A.classList.add("winning");
    E.classList.remove("disable");
    E.classList.add("winning")
    I.classList.remove("disable");
    I.classList.add("winning");

    D.classList.add("disable");
    E.classList.add("disable");
    F.classList.add("disable");
    G.classList.add("disable");
    B.classList.add("disable");
    C.classList.add("disable");
    
}
else if(C3 == "X" && E5 == "X" && G7 == "X" || C3 == "O" && E5 == "O" && G7 == "O"){
    C.classList.remove("disable");
    C.classList.add("winning");
    E.classList.remove("disable");
    E.classList.add("winning")
    G.classList.remove("disable");
    G.classList.add("winning");

    D.classList.add("disable");
    H.classList.add("disable");
    F.classList.add("disable");
    A.classList.add("disable");
    B.classList.add("disable");
    I.classList.add("disable");
    
}
else if(A1 == "X" && D4 == "X" && G7 == "X" || A1 == "O" && D4 == "O" && G7 == "O"){
    A.classList.remove("disable");
    A.classList.add("winning");
    D.classList.remove("disable");
    D.classList.add("winning")
    G.classList.remove("disable");
    G.classList.add("winning");

    C.classList.add("disable");
    H.classList.add("disable");
    F.classList.add("disable");
    E.classList.add("disable");
    B.classList.add("disable");
    I.classList.add("disable");
    
}
else if(B2 == "X" && E5 == "X" && H8 == "X" || B2 == "O" && E5 == "O" && H8 == "O"){
    B.classList.remove("disable");
    B.classList.add("winning");
    E.classList.remove("disable");
    E.classList.add("winning")
    H.classList.remove("disable");
    H.classList.add("winning");

    C.classList.add("disable");
    D.classList.add("disable");
    F.classList.add("disable");
    A.classList.add("disable");
    G.classList.add("disable");
    I.classList.add("disable");
    
}
else if(C3 == "X" && F6 == "X" && I9 == "X" || C3 == "O" && F6 == "O" && I9 == "O"){
    C.classList.remove("disable");
    C.classList.add("winning");
    F.classList.remove("disable");
    F.classList.add("winning")
    I.classList.remove("disable");
    I.classList.add("winning");

    A.classList.add("disable");
    H.classList.add("disable");
    D.classList.add("disable");
    E.classList.add("disable");
    B.classList.add("disable");
    G.classList.add("disable");
    
}

else{
    spk.innerText = "Next players move;"
}
}

//BELOW IS THE FUNCTION THAT RESETS THE BOARD FOR A NEW GAME

function restart(){
    A.classList.remove("disable");
    A.innerText = "";
    B.classList.remove("disable");
    B.innerText = "";
    C.classList.remove("disable");
    C.innerText = "";
    D.classList.remove("disable");
    D.innerText = "";
    E.classList.remove("disable");
    E.innerText = "";
    F.classList.remove("disable");
    F.innerText = "";
    G.classList.remove("disable");
    G.innerText = "";
    H.classList.remove("disable");
    H.innerText = "";
    I.classList.remove("disable");
    I.innerText = "";
    
    A.classList.remove("winning");
    B.classList.remove("winning");
    C.classList.remove("winning");
    D.classList.remove("winning");
    E.classList.remove("winning");
    F.classList.remove("winning");
    G.classList.remove("winning");
    H.classList.remove("winning");
    I.classList.remove("winning");

    A1 = "";
    B2 = "";
    C3 = "";
    D4 = "";
    E5 = "";
    F6 = "";
    G7 = "";
    H8 = "";
    I9 = "";

}
//BELOW IS THE FUNCTION TO RANDOMIZE THE PLAYERS ALLOWING THE CHANCE FOR EACH PLAYER TO 
//INITIATE THE GAME AND MAKE THE FIRST MOVE

function randomizer(){
    let random = Math.floor(Math.random()*2);
    console.log(random);
    if(random == 1){
        player1 = true;
        player2 = false;
        spk.innerText = "Player 1 will have the first move!";
       
        console.log("this is a " + player1);
    }
    else{
        player2 = true; 
        player1 = false;
        spk.innerText = "Player 2 will have the first move!";
        
        console.log("this is b " + player2);
    }
}
//BELOW ARE THE FUNCTIONS USED TO ALTERNATE EACH PLAYERS TURN

function selectionA(){
    if (player1 == true && player2 == false){
        //a's turn to mark X
        A.innerText = "X";
        A1 = "X";
        player1 = false;
        player2 = true;
        console.log(player1);
        console.log(player2);
        A.classList.add('disable');;
    }
    else if (player2 == true && player1 == false){
        A.innerText = "O";
        A1 = "O";
        player1 = true;
        player2 = false;
        console.log(player1);
        console.log(player2);
        A.classList.add('disable');;
    }
    else{
        spk.innerText = "SELECT THE RESET BUTTON.";
    }
}
function selectionB(){
    if (player1 == true && player2 == false){
        //a's turn to mark X
        B.innerText = "X";
        B2 = "X";
        player1 = false;
        player2 = true;
        console.log(player1);
        console.log(player2);
        B.classList.add('disable')
    }
    else if (player2 == true && player1 == false){
        B.innerText = "O";
        B2 = "O";
        player1 = true;
        player2 = false;
        console.log(player1);
        console.log(player2);
        B.classList.add('disable')
    }
    else{
        spk.innerText = "Aye, you dun fucked up fam.";
    }
}
function selectionC(){
    if (player1 == true && player2 == false){
        //a's turn to mark X
        C.innerText = "X";
        C3 = "X";
        player1 = false;
        player2 = true;
        console.log(player1);
        console.log(player2);
        C.classList.add('disable')
    }
    else if (player2 == true && player1 == false){
        C.innerText = "O";
        C3 = "O";
        player1 = true;
        player2 = false;
        console.log(player1);
        console.log(player2);
        C.classList.add('disable')
    }
    else{
        spk.innerText = "Aye, you dun fucked up fam.";
    }
}
function selectionD(){
    if (player1 == true && player2 == false){
        //a's turn to mark X
        D.innerText = "X";
        D4 = "X";
        player1 = false;
        player2 = true;
        console.log(player1);
        console.log(player2);
        D.classList.add('disable')
    }
    else if (player2 == true && player1 == false){
        D.innerText = "O";
        D4 = "O";
        player1 = true;
        player2 = false;
        console.log(player1);
        console.log(player2);
        D.classList.add('disable')
    }
    else{
        spk.innerText = "Aye, you dun fucked up fam.";
    }
}
function selectionE(){
    if (player1 == true && player2 == false){
        //a's turn to mark X
        E.innerText = "X";
        E5 = "X";
        player1 = false;
        player2 = true;
        console.log(player1);
        console.log(player2);
        E.classList.add('disable')
    }
    else if (player2 == true && player1 == false){
        E.innerText = "O";
        E5 = "O";
        player1 = true;
        player2 = false;
        console.log(player1);
        console.log(player2);
        E.classList.add('disable')
    }
    else{
        spk.innerText = "Aye, you dun fucked up fam.";
    }
}
function selectionF(){
    if (player1 == true && player2 == false){
        //a's turn to mark X
        F.innerText = "X";
        F6 = "X";
        player1 = false;
        player2 = true;
        console.log(player1);
        console.log(player2);
        F.classList.add('disable')
    }
    else if (player2 == true && player1 == false){
        F.innerText = "O";
        F6 = "O";
        player1 = true;
        player2 = false;
        console.log(player1);
        console.log(player2);
        F.classList.add('disable')
    }
    else{
        spk.innerText = "Aye, you dun fucked up fam.";
    }
}
function selectionG(){
    if (player1 == true && player2 == false){
        //a's turn to mark X
        G.innerText = "X";
        G7 = "X";
        player1 = false;
        player2 = true;
        console.log(player1);
        console.log(player2);
        G.classList.add('disable')
    }
    else if (player2 == true && player1 == false){
        G.innerText = "O";
        G7 = "O";
        player1 = true;
        player2 = false;
        console.log(player1);
        console.log(player2);
        G.classList.add('disable')
    }
    else{
        spk.innerText = "Aye, you dun fucked up fam.";
    }
}
function selectionH(){
    if (player1 == true && player2 == false){
        //a's turn to mark X
        H.innerText = "X";
        H8 = "X";
        player1 = false;
        player2 = true;
        console.log(player1);
        console.log(player2);
        H.classList.add('disable')
    }
    else if (player2 == true && player1 == false){
        H.innerText = "O";
        H8 = "O";
        player1 = true;
        player2 = false;
        console.log(player1);
        console.log(player2);
        H.classList.add('disable')
    }
    else{
        spk.innerText = "Aye, you dun fucked up fam.";
    }
}
function selectionI(){
    if (player1 == true && player2 == false){
        //a's turn to mark X
        I.innerText = "X";
        I9 = "X";
        player1 = false;
        player2 = true;
        console.log(player1);
        console.log(player2);
        I.classList.add('disable')
    }
    else if (player2 == true && player1 == false){
        I.innerText = "O";
        I9 = "O";
        player1 = true;
        player2 = false;
        console.log(player1);
        console.log(player2);
        I.classList.add('disable')
    }
    else{
        spk.innerText = "Aye, you dun fucked up fam.";
    }
}