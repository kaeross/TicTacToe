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