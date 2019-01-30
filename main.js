

var grid = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

let currentPlayer = 'X';
var count = 0;

var gameOver = false;

// check if the cell is empty or not and if not , do not change the prevuos vlaues

function makeMove(event) {



    $content = $(event.target).text();
    // check if empty
    if ($content === '' && gameOver === false) {
        // yes it is empty 

        // add player to html
        $(event.target).text(currentPlayer);
        count++;

        // add player to js array

        grid[event.target.id] = currentPlayer

        // check winner
        findWinner()

        // change player
        if (currentPlayer === 'X') {
            currentPlayer = 'O'
        } else {
            currentPlayer = 'X'
        }

    }
    else if (gameOver == true) {

    }


}

function findWinner() {
    // Horizintal Conditions
    if (grid[0] === grid[1] && grid[0] === grid[2] && grid[0] !== ' ') {
        $('.message').text('winner is ' + grid[0])
        gameOver = true;

    }
    else if (grid[3] === grid[4] && grid[3] === grid[5] && grid[3] !== ' ') {
        $('.message').text('winner is ' + grid[3])
        gameOver = true;
    }
    else if (grid[6] === grid[7] && grid[6] === grid[8] && grid[6] !== ' ') {
        $('.message').text('winner is ' + grid[6])
        gameOver = true;
    }
    //Vertical Conitions
    else if (grid[0] === grid[3] && grid[0] === grid[6] && grid[0] !== ' ') {
        $('.message').text('winner is ' + grid[0])
        gameOver = true;
    }
    else if (grid[1] === grid[4] && grid[1] === grid[7] && grid[1] !== ' ') {
        $('.message').text('winner is ' + grid[1])
        gameOver = true;
    }
    else if (grid[2] === grid[5] && grid[2] === grid[8] && grid[2] !== ' ') {
        $('.message').text('winner is ' + grid[2])
        gameOver = true;
    }
    //diagonal Conditions
    else if (grid[0] === grid[4] && grid[0] === grid[8] && grid[0] !== ' ') {
        $('.message').text('winner is ' + grid[0])
        gameOver = true;
    }
    else if (grid[2] === grid[4] && grid[2] === grid[6] && grid[2] !== ' ') {
        $('.message').text('winner is ' + grid[2])
        gameOver = true;
    }
    // Tie
    else if (count === 9) {
        $('.message').text('Drawn ')
    }

}

// when user clicks on board
$('td').on('click', makeMove);