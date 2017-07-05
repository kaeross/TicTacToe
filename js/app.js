(function ticTacToe() {
	const body = document.body;
	const board = document.getElementById("board");
	const startScreen = document.getElementById("start");
	const endScreen = document.getElementById("finish");

	function showPage(show, hide1, hide2) {
		show.style.display = 'block';
		hide1.style.display = 'none';
		hide2.style.display = 'none';
	}
	
	//when start button is clicked hide startup screen and show board
	const button = document.querySelector("a.button");
	button.addEventListener('click', function() {
		//collect player name
		let namePrompt = prompt('What is your name?');
		showPage(board, startScreen, endScreen);

		//add player names
		(function playerNames() {
			const boardHeader = board.getElementsByTagName("HEADER")[0];
			const playersNames = `<div class="playerNames"><h2 class="playerName player1name">${namePrompt}</h2><h2 class="playerName player2name">Computer</h2></div>`;
			boardHeader.insertAdjacentHTML('beforeend', playersNames);
		})();

	});



	// var player1 = document.querySelector("#player1");
	// var player2 = document.querySelector("#player2");
	// player1.className = "active players player1";
	// function activate(player) {
		

		

	// 	else if (player2) {
	// 		player2.className = "active players player2";
	// 	}
	// }

	// activate(player1);

})();

// var playerOne = document.querySelector(".player1");
// var player1 = new Player(playerOne);
//Indicate current player
//if active add id "player1"
	//add class "active"

//if player 1 mouse over board
	//background-image: url("img/o.svg");

//if player 2 mouse over board
	//background-image: url("img/x.svg");