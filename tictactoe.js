const celdas = Array.from(document.getElementsByClassName("celda"))
const statusPlayer = document.querySelector("#statusPlayer")
const restartBtn = document.querySelector("#restartBtn")
const playerBtn1 = document.getElementById("playerBtn1")
const playerBtn2 = document.getElementById("playerBtn2")
const text2Player = document.getElementById("t2")
const scoresWinX = document.getElementById("scoresWinX")
const scoresWinO = document.getElementById("scoresWinO")
const scoresDraw = document.getElementById("scoresDraw")

scoresWinX.textContent = localStorage.getItem("winsX")
scoresWinO.textContent = localStorage.getItem("WinsO")
scoresDraw.textContent = localStorage.getItem("draws")
let ganador = false
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//Para hacer un array a los placeholders
let options = ["", "", "", "", "", "", "", "", ""];
let twoPlayersMode = false
let CurrentPlayer = "X";
let victoriasX = localStorage.getItem("winsX") || 0
let derrotasX = 0
let draws = localStorage.getItem("draws") || 0
let victoriasO = localStorage.getItem("WinsO") || 0
let derrotasO = 0
let moveCount = 0
let running = false;
let draw = false

initializeGame();

function initializeGame(){
    celdas.forEach(celda => celda.addEventListener("click", cellClicked ));
    innerHTML = ("X")
    restartBtn.addEventListener("click", restartGame);
    statusPlayer.textContent = `${CurrentPlayer}'s turn`;
    running = true;
}

//Para jugar contra la pc
playerBtn1.addEventListener("click", ()=>{
    window.location.reload()
    randomPc()
})
function randomPc() {
   const vacias = celdas.filter((celda)=>celda.innerHTML == "")
   const aleatorio = Math.floor((Math.random() * vacias.length));
   if (vacias.length > 0) {
    const celdaSeleccionada = vacias[aleatorio];
    celdaSeleccionada.innerHTML = "O";
    const cellIndex = celdaSeleccionada.getAttribute("cellIndex");
    options[cellIndex] = "O"; 
    moveCount++;
    checkWinner();
  }
}
function cellClicked(){
    moveCount++
    
    const cellIndex = this.getAttribute("cellIndex"); //el this se refiere a cualquier celda que se le click
                        //No es igual a un espacio vacio o no está running
    if (options[cellIndex] != "" || !running) {
        return;
    }
    updateCell(this, cellIndex);
    checkWinner();
    if (!twoPlayersMode && !roundWon) {
       
        if(!ganador){
            setTimeout(() => {
                randomPc();
            }, 1000);
            checkWinner()
        }
        checkWinner()
    }
    if (twoPlayersMode) {
        changePlayer()
        console.log(CurrentPlayer)
        checkWinner()
    }
    checkWinner();
}
function updateCell(cell, index){
    options[index] = CurrentPlayer;
//Para cambiar el contenido de cada una de las celdas
    cell.textContent = CurrentPlayer;
}
function changePlayer(){
    CurrentPlayer = (CurrentPlayer == "X") ? "O" : "X";
    statusPlayer.textContent = `${CurrentPlayer}'s turn`;
}

let roundWon = false;
function checkWinner() {
    console.log(roundWon);
    for (const pos of winConditions) {
        const [pos1, pos2, pos3] = pos;
        if (celdas[pos1].textContent !== "" && celdas[pos1].textContent === celdas[pos2].textContent && celdas[pos1].textContent === celdas[pos3].textContent) {
            roundWon = true;
            if (celdas[pos1].textContent === "X") {
                CurrentPlayer = "X";
                localStorage.setItem("winsX", victoriasX);
                scoresWinX.textContent = victoriasX;
                victoriasX++;
                roundWon = true;
                ganador = true;
            } else if (celdas[pos1].textContent === "O") {
                CurrentPlayer = "O";
                localStorage.setItem("WinsO", victoriasO);
                scoresWinO.textContent = victoriasO;
                victoriasO++;
                roundWon = true;
                ganador = true;
            }
       
        }
    }
        //Para verificar si hay empate
    if (!roundWon && moveCount === 9) {
        localStorage.setItem("draws", draws);
        scoresDraw.textContent = draws;
        draws++;
        statusPlayer.textContent = `Draw!`; 
        running = false;
        return;  
    }
        //Si se cumple el ganador que termine el juego
    if (roundWon) {
        statusPlayer.textContent = `${CurrentPlayer} wins!`;
        running = false;
    }
}

function restartGame (){
    window.location.reload()
}
    //Para activar el modo de 2 jugadores 
playerBtn2.addEventListener("click",function(){
    twoPlayersMode = true
    text2Player.style.display = "block"
    celdas.forEach(celda=>{
        celda.innerHTML = ""
    })
    CurrentPlayer = "X"
    statusPlayer.textContent = `${CurrentPlayer}'s turn`;
})


 