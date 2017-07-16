(function ticTacToe() {
	const body = document.body;
	const board = document.getElementById("board");
	const startScreen = document.getElementById("start");
	const endScreen = document.getElementById("finish");
	const player1 = document.querySelector("#player1");
	const player2 = document.querySelector("#player2");

	/************************************
	Player constructor function
	************************************/
	function Player(player, svg, id, bgColor) {
		this.player = player;
		this.svg = svg;
		this.id = id;
		this.bgColor = bgColor;
	}
	//check if player is active
	Player.prototype.isActive = function(){
		if (this.player.classList.contains('active')) {
			return true;
		} else {
			return false;
		}
	};

	//swap player - activate inactive player and deactivate active player
	Player.prototype.activate = function(){
		this.player.className = `active players ${this.id}`;
	}

	Player.prototype.deActivate = function(){
		this.player.className = `players ${this.id}`;
	}

	//create player 1 and player 2
	const playerOne = new Player(player1, "url('img/o.svg')", "player1", "#FFA000");
	const playerTwo = new Player(player2, "url('img/x.svg')", "player2", "#3688C3");

	/************************************
	Grid constructor function
	************************************/

	function Box() {
		this.gridsquares = document.getElementsByClassName("box");
		this.boxArray = [];
		this.freeBoxes = [];
	}

	Box.prototype.add = function(){
		for (let i = 0; i < this.gridsquares.length; i += 1) {
			this.boxArray.push(this.gridsquares[i]);
			this.freeBoxes.push(this.gridsquares[i]);
		}
	}

	Box.prototype.allSelected = function() {
		let selectedBoxes = 0;
		for (i = 0; i < this.boxArray.length; i++) {
			if (this.boxArray[i].classList.contains('selected')) {
				selectedBoxes += 1;
			}
		}
		if (selectedBoxes === this.boxArray.length) {
			return true;
		}
	}

	// Box.prototype.isFree = function(index) {
	// 	let freeboxArray = this.boxArray;
	// 	for (i = 0; i < freeboxArray.length; i++) {
	// 		if (freeboxArray[i].classList.contains('selected')) {
	// 			freeboxArray.splice([i], 1);
	// 		}
	// 	}
	// 	return freeboxArray;
	// }

	Box.prototype.clearBoard = function() {
		for (i = 0; i < this.boxArray.length; i++) {
			this.boxArray[i].className = 'box';
			this.boxArray[i].style.backgroundImage = '';
			this.boxArray[i].style.backgroundColor = '#EFEFEF';
		}
	}

	Box.prototype.isPlayer = function(num, playerID){
		if (this.boxArray[num].classList.contains(`${playerID}`)) {
			return true;
		} else {
			return false;
		}
	}

	Box.prototype.win = function(playerID, name) {
		//if any of these grids are selected - win
		if (this.isPlayer(0, playerID) && this.isPlayer(1, playerID) && this.isPlayer(2, playerID) || this.isPlayer(3, playerID) && this.isPlayer(4, playerID) && this.isPlayer(5, playerID) || this.isPlayer(6, playerID) && this.isPlayer(7, playerID) && this.isPlayer(8, playerID)) {
			console.log(name + ' has won');
			return true;
		} else if (this.isPlayer(0, playerID) && this.isPlayer(3, playerID) && this.isPlayer(6, playerID) || this.isPlayer(1, playerID) && this.isPlayer(4, playerID) && this.isPlayer(7, playerID) || this.isPlayer(2, playerID) && this.isPlayer(5, playerID) && this.isPlayer(8, playerID)) {
			console.log(name + ' has won');
			return true;
		} else if (this.isPlayer(0, playerID) && this.isPlayer(4, playerID) && this.isPlayer(8, playerID) || this.isPlayer(2, playerID) && this.isPlayer(4, playerID) && this.isPlayer(6, playerID)) {
			console.log(name + ' has won');
			return true;
		} else {
			return false;
		}
	}
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
			playerTwo.activate();
			firstGo();
		});
	})();

	function switchPlayer(currentPlayer, nextPlayer) {
		currentPlayer.deActivate();
		nextPlayer.activate();
	}

	function selectBox(player, target) {
		target.style.backgroundImage = player.svg;
		target.style.backgroundColor = player.bgColor;
		target.className = `box selected ${player.id}`;
	}


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



		//check if game has been won/drawn/lost and show appropriate end screen
		function checkwin() {
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
					playerOne.deActivate();
					playerTwo.deActivate();
				}
				const newGameButton = document.querySelector('#finish .button');
				newGameButton.addEventListener('click', () => {
					gridSquares.clearBoard();
					deactivatePlayers();
					showPage(board, endScreen, startScreen);
				}) 
			}
			if (gridSquares.allSelected() === true) {
				endGame('tie', 'tie');
			} else if (gridSquares.win('player1', player1name)) {
				endGame('one', 'Winner');
			} else if (gridSquares.win('player1', player1name) === false) {
				if (gridSquares.win('player2', 'computer')) {
					endGame('two', 'Winner');
				}
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
						selectBox(playerOne, box);
						checkwin();
						switchPlayer(playerOne, playerTwo);
					} else if (playerTwo.isActive) {
						selectBox(playerTwo, box);
						checkwin();
						switchPlayer(playerTwo, playerOne);
					}
				}
			}
		});


	})();
})();

