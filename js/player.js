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
	if (this.player === player1) {
		this.player.className = `active players ${this.id}`;
		player2.className = "players player2";
	}
	else if (this.player === player2) {
		this.player.className = `active players ${this.id}`;
		player1.className = "players player1";
	}
}

