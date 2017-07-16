function Player(player, svg, id) {
	this.player = player;
	this.svg = svg;
	this.id = id;
}

Player.prototype.isActive = function(){
	if (this.player.classList.contains('active')) {
		return true;
	} else {
		return false;
	}
};

Player.prototype.activate = function(){
		this.player.className = `active players ${this.id}`;
}

Player.prototype.deActivate = function(){
		this.player.className = `players ${this.id}`;
}
