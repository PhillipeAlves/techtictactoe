TIC-TAC-TOE


RULES

1. The game is played on a grid that's 3 squares by 3 squares.

2. You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares.

3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.

4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

-----------------------------------------
                    
HOW CAN I WIN?
     
To beat the computer (or at least tie), you need to make use of a little bit of strategy. Strategy means figuring out what you need to do to win.

Part of your strategy is trying to figure out how to get three Xs in a row. The other part is trying to figure out how to stop the computer from getting three Os in a row.

After you put an X in a square, you start looking ahead. Where's the best place for your next X? You look at the empty squares and decide which ones are good choices—which ones might let you make three Xs in a row.

You also have to watch where the computer puts its O. That could change what you do next. If the computer gets two Os in a row, you have to put your next X in the last empty square in that row, or the computer will win. You are forced to play in a particular square or lose the game.

If you always pay attention and look ahead, you'll never lose a game of Tic-Tac-Toe. You may not win, but at least you'll tie.


src: https://www.exploratorium.edu/brain_explorer/tictactoe.html

--------------------------------------------

HTML

Initially the way this project was designed it meant to be following this structure:

1. <div> tag containing the game.
2. <ul><li> provided the initial structures for the buttons.
3. <i> came in hand after when I decided to use icons instead of text. Initially, they got grouped together with:
4. <input> tags to connect them with a button.
5. <span> wore used for buttons after <li>'s.
6. <label> was used to hold that combo.

Through the process of refinement of the design from the transformation of ul/li's to label/i's some tags lost meaning and remained in the document for the sole purpose of maintaining a working program. 

Further refinements will be made to get rid of unnecessary tags and shrink the CSS code necessary to maintain it.

----------------------------

CSS

The approach with the design as mentioned before evolved from creating a hash grid to a cleaner (slightly futuristic) design of this ancient game. The way that it's presented at this moment follows this logic:

1. Style the <div> tag with a wrapper class which constrains the size and determines where the game elements are stored. Shadows were created to mimic led lights all around.
2. A (led) display was created using the h1 selector using a blue-grey as a background color and blue for inside shadows. A slightly lighter blue was used for the text inside to match the effect. 
3. Icons were used to create the buttons. An O-shaped icon was used as a "placeholder". Then replaced by a red cross icon for player one and a blue dot for the player two as they select their cells. They were displayed in the grid filling three columns.
4. A reset button was placed under the buttons. When clicked it turns blue. To the present moment, no success was achieved to turn the light automatically off. Two clicks are necessary for resetting the color to its original state. This doesn't affect the functionality of the button when targeted in Javascript.
5. A p selector was used to style a "reset" indication of the functionality of the button under that one.

----------------------------

Javascript

For the initial structure followed these steps:

1. DOM selectors were placed at the top of the text.
2. Functions triggered by event listeners or invoked by other functions were placed in the middle.
3. Initial event listeners were placed at the end.

The logic worked in the following way:

1. The game starts with all the buttons deactivated and the name of the game "Tic Tac Toe" displayed. 
2. An initial condition of the game over is set to false and a turn counter is set to zero. 
3. When the user clicks on the circle that indicates the position he wants the function played is triggered. The "play" function has the following purpose:

3.1. Checks if the initial condition of the game over is true or false. If true the function returns and no further selections are allowed.
3.2. If true however the function proceeds to check who's turn is it to play. If "turn" is 0 or even the player one makes the move. If odd the second player proceeds.
3..3. Each player has different classes and data attributes reassigned to the cells they chose. As it follows:

3.3.1. The placeholder icon is replaced by either a cross icon (player one) or by a dot in a circle icon (player 2).
3.3.2. The color of the icon changes by adding a class to each one of the players <i> tag. Red for the player one. Blue for player 2.
3.3.3. A data attribute named "data-player" is assigned with each player's value. "X" for player one and "O" for player 2.

3.4. A value is added to the turn variable so next round a different player takes a turn.
3.5. Then it checks if the player wins by calling the function "checkWinner".

4. The "checkWinner" function works on the following way:

4.1. A variable called "board" creates an array from a node list of "i" elements. 
4.2. A new variable called "selectedCells" was created to map the board array. The purpose of this to make the data usable for this context.
4.3. An array with possible winning combinations was made under the name "wins".
4.4. A loop was made on the array "wins" with the "find" method to see if there was a match between the player's choices and the possible winning moves. 
4.5. The first condition was checked was if there were no empty strings. Then both arrays ("wins" and "board") were matched to check for the index of each data attribute.
4.6. The matching values were stored in a variable called "isWinner". 
4.7. The condition to check for a winner is evaluated by an if/else statement.
4.8. If the condition is "true" the following steps will run:

4.8.1. A loop was run in each winning cell to retrieve the winner, stored in a variable with the respective name.
4.8.2. Then the winner was displayed for the user using the h1 selector.
4.8.3. The game over condition is set to true and the game is over. 

4.9. If the "isWinning" condition is "false" then the function returns and the user goes another turn.

5. A "resetGame" function was created to reset the values to the initial game display.
