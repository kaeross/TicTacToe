(function ticTacToe() {

	const body = document.body;
	const board = document.getElementById("board");
	const startScreen = document.getElementById("start");
	const endScreen = document.getElementById("finish");
	const player1 = document.querySelector("#player1");
	const player2 = document.querySelector("#player2");
	const playerOne = new Player(player1, "url('img/o.svg')", "player1");
	const playerTwo = new Player(player2, "url('img/x.svg')", "player2");


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

	function activate(player) {
		if (player === player1) {
			player1.className = "active players player1";
			player2.className = "players player2";
		}
		else if (player === player2) {
			player2.className = "active players player2";
			player1.className = "players player1";
		}
	}

	//Choose player to start
	(function selectPlayer() {
		player1.addEventListener('click', function(){
			activate(player1)
		});
		player2.addEventListener('click', function(){
			activate(player2)
		});
	})();

	function isActive(player) {
		if (player.classList.contains('active')) {
			return true;
		} else {
			return false;
		}
	}

	function boxhover(event, bgImage1, bgImage2) {
		const allBox = document.getElementsByClassName("box");
		for (let i = 0; i < allBox.length; i += 1) {
			allBox[i].addEventListener( event, function(e) {
				var box = e.target;
				if (isActive(player1)) {
					box.style.backgroundImage = bgImage1;
				} else if (isActive(player2)) {
					box.style.backgroundImage = bgImage2;
				}
			});
		}
	}

	boxhover('mouseenter', 'url("img/o.svg")', 'url("img/x.svg")');
	boxhover('mouseleave', '', '');

	function boxClick() {
		boxhover('click', 'url("img/o.svg")', 'url("img/x.svg")');
		if (isActive(player1)) {
			activate(player2);
		} else if (isActive(player2)) {
			activate(player1);
		}
	}









})();

