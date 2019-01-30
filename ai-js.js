$(document).ready(function () {

    var c00, c01, c02, c10, c11, c12, c20, c21, c22;

    var player;
    var computer;

    var turn = 0;

    // to make the player choose between x or o 


    $('#x').click(function () {
        player = "X";
        computer = "O";

        $("#go-to-2-players").hide();
        $("#choice").fadeOut();
        $("#board").fadeTo("slow", 1);
    });

    $('#o').click(function () {
        player = "O";
        computer = "X";

        $("#go-to-2-players").hide();
        $("#choice").fadeOut();
        $("#board").fadeTo("slow", 1);
    });




    // to clear the board
    function clearBoard() {
        c00 = $('#c00').text('');
        c01 = $('#c01').text('');
        c02 = $('#c02').text('');
        c10 = $('#c10').text('');
        c11 = $('#c11').text('');
        c12 = $('#c12').text('');
        c20 = $('#c20').text('');
        c21 = $('#c21').text('');
        c22 = $('#c22').text('');
        turn = 0;
    }
    //when user click play again button , it should clear the board and open the choice screen
    $('#new-game').click(function () {
        clearBoard();
        $("#go-to-2-players").hide();
        $("#final-screen").hide();
        $("#choice").fadeTo("slow", 1);
    });


    // to make move on the board
    $('td').click(function () {
        if (turn === 0) {
            if ($(this).text() === "") {
                $(this).text(player);
                cellAvailable();
                conWinning();
                turn = 1;
                computermove();
                cellAvailable();
                conWinning();
            }
            // this for prevent click on cell that alredy clicked
            else { }
        }

    });
    // c00, c01, c02, 
    // c10, c11, c12,
    // c20, c21, c22;


    function computermove() {
        // chance to win
        if (c00 === "" && ((c01 === computer && c02 === computer) || (c10 === computer && c20 === computer) || (c11 === computer && c22 === computer))) {
            $("#c00").text(computer);
            turn = 0;
        }
        else if (c01 === "" && ((c00 === computer && c02 === computer) || (c11 === computer && c21 === computer))) {
            $("#c01").text(computer);
            turn = 0;
        }
        else if (c02 === "" && ((c00 === computer && c01 === computer) || (c12 === computer && c22 === computer) || (c11 === computer && c20 === computer))) {
            $("#c02").text(computer);
            turn = 0;
        }
        else if (c10 === "" && ((c00 === computer && c20 === computer) || (c11 === computer && c12 === computer))) {
            $("#c10").text(computer);
            turn = 0;
        }
        else if (c11 === "" && ((c10 === computer && c12 === computer) || (c00 === computer && c22 === computer) || (c02 === computer && c20 === computer))) {
            $("#c11").text(computer);
            turn = 0;
        }
        else if (c12 === "" && ((c10 === computer && c11 === computer) || (c02 === computer && c22 === computer))) {
            $("#c12").text(computer);
            turn = 0;
        }
        else if (c20 === "" && ((c21 === computer && c22 === computer) || (c00 === computer && c10 === computer) || (c02 === computer && c11 === computer))) {
            $("#c20").text(computer);
            turn = 0;
        }
        else if (c21 === "" && ((c20 === computer && c22 === computer) || (c01 === computer && c11 === computer))) {
            $("#c21").text(computer);
            turn = 0;
        }
        else if (c22 === "" && ((c20 === computer && c21 === computer) || (c02 === computer && c12 === computer) || (c00 === computer && c11 === computer))) {
            $("#c22").text(computer);
            turn = 0;
        }

        //
        else if (c00 === "" && ((c01 === player && c02 === player) || (c10 === player && c20 === player) || (c11 === player && c22 === player))) {
            $("#c00").text(computer);
            turn = 0;
        }
        else if (c01 === "" && ((c00 === player && c02 === player) || (c11 === player && c21 === player))) {
            $("#c01").text(computer);
            turn = 0;
        }
        else if (c02 === "" && ((c00 === player && c01 === player) || (c12 === player && c22 === player) || (c11 === player && c20 === player))) {
            $("#c02").text(computer);
            turn = 0;
        }
        else if (c10 === "" && ((c00 === player && c20 === player) || (c11 === player && c12 === player))) {
            $("#c10").text(computer);
            turn = 0;
        }
        else if (c11 === "" && ((c10 === player && c12 === player) || (c00 === player && c22 === player) || (c02 === player && c20 === player))) {
            $("#c11").text(computer);
            turn = 0;
        }
        else if (c12 === "" && ((c10 === player && c11 === player) || (c02 === player && c22 === player))) {
            $("#c12").text(computer);
            turn = 0;
        }
        else if (c20 === "" && ((c21 === player && c22 === player) || (c00 === player && c10 === player) || (c02 === player && c11 === player))) {
            $("#c20").text(computer);
            turn = 0;
        }
        else if (c21 === "" && ((c20 === player && c22 === player) || (c01 === player && c11 === player))) {
            $("#c21").text(computer);
            turn = 0;
        }
        else if (c22 === "" && ((c20 === player && c21 === player) || (c02 === player && c12 === player) || (c00 === player && c11 === player))) {
            $("#c22").text(computer);
            turn = 0;
        }


        else if (c11 === "") {
            $("#c11").text(computer);
            turn = 0;
        }


        else if (c00 === "" && (c02 === player || c20 === player)) {
            $("#c00").text(computer);
            turn = 0;
        }
        else if (c02 === "" && (c00 === player || c22 === player)) {
            $("#c02").text(computer);
            turn = 0;
        }
        else if (c22 === "" && (c02 === player || c20 === player)) {
            $("#c22").text(computer);
            turn = 0;
        }
        else if (c20 === "" && (c00 === player || c22 === player)) {
            $("#c20").text(computer);
            turn = 0;
        }


        else if (c00 === "") {
            $("#c00").text(computer);
            turn = 0;
        }
        else if (c02 === "") {
            $("#c02").text(computer);
            turn = 0;
        }
        else if (c20 === "") {
            $("#c20").text(computer);
            turn = 0;
        }
        else if (c22 === "") {
            $("#c22").text(computer);
            turn = 0;
        }


        else if (c01 === "") {
            $("#c01").text(computer);
            turn = 0;
        }
        else if (c12 === "") {
            $("#c12").text(computer);
            turn = 0;
        }
        else if (c21 === "") {
            $("#c21").text(computer);
            turn = 0;
        }
        else if (c10 === "") {
            $("#c10").text(computer);
            turn = 0;
        }
    }


    // to check which cell is available

    function cellAvailable() {
        c00 = $('#c00').html();
        c01 = $('#c01').html();
        c02 = $('#c02').html();
        c10 = $('#c10').html();
        c11 = $('#c11').html();
        c12 = $('#c12').html();
        c20 = $('#c20').html();
        c21 = $('#c21').html();
        c22 = $('#c22').html();
    }


    // c00, c01, c02, 
    // c10, c11, c12,
    // c20, c21, c22;
    function conWinning() {
        //player Win
        // Horizintal Conditions
        if ((c00 === c01 && c00 === c02 && (c00 === player)) ||
            (c10 === c11 && c10 === c12 && (c10 === player)) ||
            (c20 === c21 && c20 === c22 && (c20 === player)) ||
            // Vertical Conitions
            (c00 === c10 && c00 === c20 && (c00 === player)) ||
            (c01 === c11 && c01 === c21 && (c01 === player)) ||
            (c02 === c12 && c02 === c22 && (c02 === player)) ||
            // diagonal Conditions
            (c00 === c11 && c00 === c22 && (c00 === player)) ||
            (c02 === c11 && c02 === c20 && (c02 === player))) {
            setTimeout(function () {
                $('#board').fadeOut('slow');
                $('#winner').text('You win');
                $('#final-screen').fadeTo('slow', 1);
                $('#go-to-2-players').fadeTo('slow', 1);
            }, 1000);
        }

        //Computer Win
        // Horizintal Conditions
        else if ((c00 === c01 && c00 === c02 && (c00 === computer)) ||
            (c10 === c11 && c10 === c12 && (c10 === computer)) ||
            (c20 === c21 && c20 === c22 && (c20 === computer)) ||
            // Vertical Conitions
            (c00 === c10 && c00 === c20 && (c00 === computer)) ||
            (c01 === c11 && c01 === c21 && (c01 === computer)) ||
            (c02 === c12 && c02 === c22 && (c02 === computer)) ||
            // diagonal Conditions
            (c00 === c11 && c00 === c22 && (c00 === computer)) ||
            (c02 === c11 && c02 === c20 && (c02 === computer))) {
            setTimeout(function () {
                $('#board').fadeOut('slow');
                $('#winner').text('Computer is win');
                $('#final-screen').fadeTo('slow', 1);
                $('#go-to-2-players').fadeTo('slow', 1);
            }, 1000);
        }

        //Tie
        else if (c00 && c01 && c02 && c10 && c11 && c12 && c20 && c21 && c22) {

            setTimeout(function () {
                $('#board').fadeOut('slow');
                $('#winner').text('Its Tie');
                $('#final-screen').fadeTo('slow', 1);
                $('#go-to-2-players').fadeTo('slow', 1);
            }, 1000);
        }

    }

});