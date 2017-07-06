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

Box.prototype.isSelected = function(num){
	if (this.boxArray[num].classList.contains('selected')) {
		return true;
	} else {
		return false;
	}
}

// Box.prototype.boxhover = function(event, playerOne, playerTwo) {
// 	for (let i = 0; i < this.boxArray.length; i += 1) {
// 		this.boxArray[i].addEventListener(event, function(e) {
// 			var thisBox = e.target;
// 			if (playerOne.isActive()) {
// 				if (event === 'mouseenter' && this.isSelected[i] === false ) {
// 					box.style.backgroundImage = playerOne.svg;
// 				} else if (event === 'mouseleave' && this.isSelected[i] === false ){
// 					box.style.backgroundImage = "";
// 				} else if (event === 'click' && this.isSelected[i] === false ){
// 					box.style.backgroundImage = playerOne.svg;
// 					box.style.backgroundColor = '#FFA000';
// 					box.className = 'box selected player1';
// 					playerTwo.activate();
// 				}
// 			} else if (playerTwo.isActive()) {
// 				if (event === 'mouseenter' && this.isSelected[i] === false ) {
// 					box.style.backgroundImage = playerTwo.svg;
// 				} else if (event === 'mouseleave' && this.isSelected[i] === false ) {
// 					box.style.backgroundImage = "";
// 				} else if (event === 'click' && this.isSelected[i] === false ){
// 					box.style.backgroundImage = playerOne.svg;
// 					box.style.backgroundColor = '#3688C3';
// 					box.className = 'box selected player1';
// 					playerOne.activate(); 
// 				}
// 			}
// 		});
// 	}
// }

// Box.prototype.boxEvents = function(playerOne, playerTwo) {
// 	this.boxhover('mouseenter');
// 	this.boxhover('mouseleave');
// 	this.boxhover('click');
// }
