(function ticTacToe() {

	const body = document.body;
	const board = document.getElementById("board");
	const startScreen = document.getElementById("start");
	const endScreen = document.getElementById("finish");
	const player1 = document.querySelector("#player1");
	const player2 = document.querySelector("#player2");
	const playerOne = new Player(player1, "url('img/o.svg')", "player1");
	const playerTwo = new Player(player2, "url('img/x.svg')", "player2");
	const gridSquares = new Box();
	gridSquares.add();


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
		alert("Please select a player to start");

	});


	//Choose player to start
	(function selectPlayer() {
		player1.addEventListener('click', function(){
			playerOne.activate()
		});
		player2.addEventListener('click', function(){
			playerTwo.activate()
		});
	})();



	//Board controls
	(function gridSelection() {
		var grid = document.querySelector(".boxes");
		function disabledBox(target) {
			if (target.classList.contains('selected')) {
				return true;
			} else {
				return false;
			}
		}

		//show player's tile image on mouse hover
		grid.addEventListener('mouseover', (e) => {
			var box = e.target;
			if (disabledBox(box) === false) {
				if (playerOne.isActive()) {
					box.style.backgroundImage = playerOne.svg;
				} else if (playerTwo.isActive()) {
					box.style.backgroundImage = playerTwo.svg;
				}
			}
		});

		//remove background image preview on mouseout
		grid.addEventListener('mouseout', (e) => {
			var box = e.target;
			if (disabledBox(box) === false) {
				box.style.backgroundImage = "";
			}
		});

		//when clicked set tile to appropriate color and background according to active player then swap active player
		grid.addEventListener('click', (e) => {			
			if (board.style.display = 'block' && playerOne.isActive() === false && playerTwo.isActive() === false) {
				alert("Oops! You didn't select a player to start!");
			} else {
				var box = e.target;
				if (disabledBox(box) === false) {
					if (playerOne.isActive()) {
						box.style.backgroundImage = playerOne.svg;
						box.style.backgroundColor = '#FFA000';
						box.className = 'box selected player1';
						playerTwo.activate();
					} else if (playerTwo.isActive) {
						box.style.backgroundImage = playerTwo.svg;
						box.style.backgroundColor = '#3688C3';
						box.className = 'box selected player2';
						playerOne.activate(); 
					}
				}
			}
		});

		//check if game has been won/drawn/lost and show appropriate end screen
		function checkwin(boxes) {
			const winP = document.querySelector("p.message");
			const player1name = document.querySelector(".player1name").textContent;
			//show correct screen according to winner or if tied
			function endGame(gameState, winText) {
				showPage(endScreen, startScreen, board);
				endScreen.className = `screen screen-win screen-win-${gameState}`;
				winP.textContent = winText;
				newGame();
			}
			//new game - clear board
			function newGame() {
				function deactivatePlayers() {
					player2.className = "players player2";
					player1.className = "players player1";
				}
				const newGameButton = document.querySelector('#finish .button');
				newGameButton.addEventListener('click', () => {
					gridSquares.clearBoard();
					deactivatePlayers();
					showPage(board, endScreen, startScreen);
				}) 
			}
			if (boxes.allSelected() === true) {
				endGame('tie', 'tie');
			} else if (boxes.win('player1', player1name)) {
				endGame('one', 'Winner');
			} else if (boxes.win('player1', player1name) === false) {
				if (boxes.win('player2', 'computer')) {
					endGame('two', 'Winner');
				}
			}
		}
		grid.addEventListener('click', (e) => {
			checkwin(gridSquares);
		});

	})();

})();

