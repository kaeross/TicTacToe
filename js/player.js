function Player(player, svg) {
	this.player = player;
	this.svg = svg;
}

Player.prototype.isActive = function(id){
	if (this.className = `active players ${this.id}`) {
		return true;
	} else {
		return false;
	}
};

Player.prototype.makeActive = function(activatePlayer, deactivatePlayer){
	
};
