
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function Game(canvas, fillStyle) {
	var context = canvas.getContext("2d");

	this.getContext = function() {
		context.fillStyle = fillStyle;
		return context;
	}
}

var games = [];
var splitscreen = new SplitScreen(document.body);

function createGame() {
	var canvas = splitscreen.createScreen();
	var game = new Game(canvas,getRandomColor());
	games.push(game);
}

function update() {
	games.forEach(game=>{
		var context = game.getContext();
		context.fillRect(0,0,context.canvas.width, context.canvas.height);
	})
	requestAnimationFrame(update);
}

update();