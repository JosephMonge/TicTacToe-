Tic Tac Toe RULES
<hr>
1. The game is played on a grid that's 3 squares by 3 squares.

2. You are X, your friend (or the computer) is O, Players take turns putting their marks in empty cells.

3. The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.

4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a draw.
<hr>
<br>

FILES
<br>
<br>
HTML
<hr>
Main Container div class="mainContainer" Container for all game elements.

Title div class="title" Game title.

Table Status div class="tableStatus" Buttons for selecting game mode.

Game Container div class="gameContainer" Grid cells for the game.

Game Mode Header h2 id="t2" Displays current game mode.

Restart Container div class="restartContainer" player status and restart button.

Score Container div class="scoreContainer" Displays scoreboard.

<hr>
<br>

CSS
<hr>
Body
Sets the background color to dark grey.

Main Container (.mainContainer)
Centers the content.

.title
Centers the text, sets the background color, font, padding, and color.

.celda
Sets dimensions, border, font size, cursor style, font, and text alignment.

.gameContainer
Defines a 3x3 grid layout, centers it, and adds top margin.

.restartContainer
Centers the content, sets the font and style.

.tableStatus
Sets the background color, padding, and centers the text.

Buttons (#playerBtn1, #playerBtn2, #restartBtn)
Sets background color, text color, border radius, padding, border, cursor style, font style, and hover effects.

Score (.score, #scoresWinX, #scoresWinO, #scoresDraw)
Sets background color, text color, padding, and text alignment.

.scoreSub
Sets text color and relative position.

Game Mode Header (.t2)
Hides the element and adds an animation for the text color and position.

@keyframes twoPlayer
Defines the animation for the game mode header.
<hr>
<br>
JS
<hr>
Game Setup

initializeGame: Sets up the initial game state, event listeners, and default player.

Single Player Mode
playerBtn1.addEventListener("click") Reloads the page and triggers the computer move.
randomPc: Selects a random empty cell for the computer's move.

cellClicked: Handles cell click events, updates the game state, and checks for a winner.

updateCell(cell, index) Updates the clicked cell with the current player's symbol.

changePlayer: Switches the current player and updates the status display.

checkWinner: Checks for winning conditions, updates scores, and declares the winner.

restartGame: Reloads the page to restart the game.

Two Player Mode
playerBtn2.addEventListener("click"): Activates two-player mode, resets the grid, and sets the initial player.
