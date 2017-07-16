//if player 2
	//player 2 goes first select at random square 0, 2, 4, 
	function getRandomBox(num) {
		var randomNumber = Math.floor(Math.random()* num);
		return randomNumber;
	}

	function firstGo() {
		function getBox(index) {
			var box = gridSquares.boxArray[(index)];
			return box;
		}
		var winningOptions = [ getBox(0), getBox(2), getBox(6), getBox(8) ];
		computerSelect(getRandomBox(4));
	}
	
	function freeBoxArray() {
		for (let i = 0; i < gridSquares.freeBoxes.length; i += 1) {
			if(gridSquares.freeBoxes[i].classList.contains('selected')) {
				gridSquares.freeBoxes.splice([i], 1)
			} 
		} 
		return gridSquares.freeBoxes;
	}

	function computerSelect(index) {
		selectBox(playerTwo, gridSquares.freeBoxes[index]);
		switchPlayer(playerTwo, playerOne);
	}

	function randomComputerSelect() {
		computerSelect(getRandomBox(freeBoxArray.length));
	}



