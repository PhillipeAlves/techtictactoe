// Dom Variables //

var cells = document.querySelectorAll('i');
var title = document.querySelector('h1');
var reset = document.querySelector('span')

var turn = 0;
var winner = false;

function play(e) {
    
    var select = e.target;

    if (winner === false) {

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

    var selectedCell = board.map(function(move) { 
        return move.dataset.player; 
    });

    var win = [
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6]
    ];

    win.find(winningMove => {
        
        var isWinner = selectedCell[winningMove[0]] !== "" && selectedCell[winningMove[1]] !== "" && selectedCell[winningMove[2]] !== "" 
        && selectedCell[winningMove[0]] === selectedCell[winningMove[1]] && selectedCell[winningMove[1]] === selectedCell[winningMove[2]];
        

        if (isWinner) {
            
            winningMove.forEach((index) => {
                
                title.textContent = `${selectedCell[index]} wins!`;
            
                cells.forEach(cell => {
                    cell.removeEventListener('click', play);
                    cell.dataset.player = '';
                });
                
            })
            
            return  winner = true;

        }
    })

    return

}

// Reset //

function resetGame() {
    
    title.textContent = 'Tic Tac Toe';

    cells.forEach(cell => {
        cell.dataset.player = ''
        cell.classList.add('fa-circle-o');
        cell.classList.remove('red');
        cell.classList.remove('blue');
        cell.classList.remove('fa-times-circle');
        cell.classList.remove('fa-dot-circle-o');
        cell.addEventListener('click', play);
    });
    
    winner = false;

    turn++;

}


// Event Listeners //

cells.forEach(cell => {
    cell.addEventListener('click', play);
});
reset.addEventListener('click', resetGame);
