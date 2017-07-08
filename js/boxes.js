function Box() {
	this.gridsquares = document.getElementsByClassName("box");
	this.boxArray = [];
	this.boxIndex = 0;
}

Box.prototype.add = function(){
	for (let i = 0; i < this.gridsquares.length; i += 1) {
		this.boxArray.push(this.gridsquares[i]);
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
