console.clear()
console.log("Loading...");

function Game(canvas, fillStyle) {
	var context = canvas.getContext("2d");

	this.getContext = function() {
		context.fillStyle = fillStyle;
		return context;
	}
}
var canvases = [];
var games = [];

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateCanvases() {
  canvases.forEach(canvas=>{
	var w = Math.sqrt(canvases.length);
	//var h = contexts.length/w;
	canvas.style["max-width"] = canvas.width = document.body.offsetWidth/Math.ceil(w); 
	canvas.height = document.body.offsetHeight*Math.floor(w)/canvases.length;
	canvas.style.flex = "1 0 " + (100/Math.ceil(w)) + "%";
	});
}


function update() {
	games.forEach(game=>{
		var context = game.getContext();
  		context.fillRect(0, 0, context.canvas.width, context.canvas.height);
	});
  requestAnimationFrame(update);
}


function createGame() {
  var canvas = document.createElement("canvas")
	document.body.appendChild(canvas);
	canvases.push(canvas);
  var game = new Game(canvas,getRandomColor());
  games.push(game);
  updateCanvases();
  updateCanvases();
}

update();
console.log("Ready");

setInterval(createGame,125)