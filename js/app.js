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


	//Choose player to start
	(function selectPlayer() {
		player1.addEventListener('click', function(){
			playerOne.activate()
		});
		player2.addEventListener('click', function(){
			playerTwo.activate()
		});
	})();

	//uses gridUI.js for constructor function
	//grid shows naught or cross on hover and keeps it there when clicked
	function boxhover(event) {
		const boxes = new Box();
		boxes.add();
		function checkwin(boxes) {
			const winP = document.querySelector("p.message");
			const player1name = document.querySelector(".player1name").textContent;
			if (boxes.win('player1', player1name)) {
				showPage(endScreen, startScreen, board);
				endScreen.className = "screen screen-win screen-win-one";
				winP.textContent = "Winner";
			} else if (boxes.win('player1', player1name) === false) {
				if (boxes.win('player2', 'computer')) {
					showPage(endScreen, startScreen, board);
					endScreen.className = "screen screen-win screen-win-two";
					winP.textContent = "Winner";
				}
			}
		}
		function checkEvents(i, box, boxes, playersvg, bgColor, playerID, nextPlayer) {
			if (event === 'mouseenter' && boxes.isSelected(i) === false) {
				box.style.backgroundImage = playersvg;
			} else if (event === 'mouseleave' && boxes.isSelected(i) === false){
				box.style.backgroundImage = "";
			} else if (event === 'click' && boxes.isSelected(i) === false ){
				box.style.backgroundImage = playersvg;
				box.style.backgroundColor = bgColor;
				box.className = `box selected ${playerID}`;
				nextPlayer.activate();
				checkwin(boxes);
			} 
		}
		for (let i = 0; i < boxes.boxArray.length; i += 1) {
			boxes.boxArray[i].addEventListener(event, function(e) {
				var box = e.target;
				if (playerOne.isActive()) {
					checkEvents(i, box, boxes, playerOne.svg, '#FFA000', playerOne.id, playerTwo);
				} else if (playerTwo.isActive()) {
					checkEvents(i, box, boxes, playerTwo.svg, '#3688C3', playerTwo.id, playerOne);
				} else if (board.style.display = 'block' && event === 'click') {
					alert("Oops! You didn't select a player to start!");
				}
			});
		}
	}

	boxhover('mouseenter');
	boxhover('mouseleave');
	boxhover('click');
	boxhover('mouseup');





})();

