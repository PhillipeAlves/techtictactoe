// Dom Variables //

var cells = document.querySelectorAll('i');
var display = document.querySelector('h1');
var reset = document.querySelector('span')

var turn = 0;
var gameOver = false;

function play(e) {
    
    var select = e.target;

    if (gameOver === false) {

        var player1 = 'X';
        var player2 = 'O';

        if (select.dataset.player === '') {
            
            if (turn % 2 === 0) {
                select.classList.toggle('fa-circle-o');
                select.classList.toggle('fa-times-circle');
                select.setAttribute('data-player', player1);
                select.classList.add('red');
            } else {
                select.classList.toggle('fa-circle-o');
                select.classList.toggle('fa-dot-circle-o');
                select.setAttribute('data-player', player2);
                select.classList.add('blue');
            }
            
            turn++;

            checkWinner();

        }
        
    } else {

        return

    }

}

function checkWinner() {

    var board = Array.from(cells);

    var selectedCells = board.map(function(selectedCell) { 
        return selectedCell.dataset.player; 
    });

    var wins = [
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6]
    ];

    wins.find(win => {
        
        var isWinner = selectedCells[win[0]] !== "" && selectedCells[win[1]] !== "" && selectedCells[win[2]] !== "" 
        && selectedCells[win[0]] === selectedCells[win[1]] && selectedCells[win[1]] === selectedCells[win[2]];

        if (isWinner) {
            
            win.forEach((index) => {
                
                var winner = selectedCells[index];

                display.textContent = `${winner} wins!`;
            
                cells.forEach(cell => {
                    cell.removeEventListener('click', play);
                    cell.dataset.player = '';
                });
                
            })
            
            return gameOver = true;

        }
    })

    return

}

// Reset //

function resetGame() {
    
    display.textContent = 'Tic Tac Toe';

    cells.forEach(cell => {
        cell.dataset.player = ''
        cell.classList.add('fa-circle-o');
        cell.classList.remove('red');
        cell.classList.remove('blue');
        cell.classList.remove('fa-times-circle');
        cell.classList.remove('fa-dot-circle-o');
        cell.addEventListener('click', play);
    });
    
    gameOver = false;

}


// Event Listeners //

cells.forEach(cell => {
    cell.addEventListener('click', play);
});
reset.addEventListener('click', resetGame);
