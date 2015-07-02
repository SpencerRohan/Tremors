
var WIDTH = window.innerWidth, HEIGHT = window.innerHeight;
var MAPWIDTH = 4000, MAPHEIGHT = 4000;
var player1, player2, board, map;

document.addEventListener("keydown", function (e) { //disables scrolling? Found on tutorial
  if([37,38,39,40].indexOf(e.keyCode) > -1){
    e.preventDefault();
  }
}, false);

	document.onkeydown = function(event) {
		if (event.keyCode == 39) //right arrow
			player1.pressingRight = true;
		else if (event.keyCode == 40) //down arrow
			player1.pressingDown = true;
		else if (event.keyCode == 37) //left arrow
			player1.pressingLeft = true;
		else if (event.keyCode == 38) //up arrow
			player1.pressingUp = true;
	}

	document.onkeyup = function(event) {
		if (event.keyCode == 39) //right arrow
			player1.pressingRight = false;
		else if (event.keyCode == 40) //down arrow
			player1.pressingDown = false;
		else if (event.keyCode == 37) //left arrow
			player1.pressingLeft = false;
		else if (event.keyCode == 38) //up arrow
			player1.pressingUp = false;
	}


player1 = {
  x: WIDTH*0.25,
  y: HEIGHT/2,
  spdx:0,
  spdy:0,
  h:10,
  w:10,
  noise:10,
  color:'#3276bb',

  draw: function() {
    ctx.fillRect(this.x, this.y, this.h, this.w);
  }

};

player2 = {
  x: WIDTH*0.75,
  y: HEIGHT/2,
  spdx:0,
  spdy:0,
  h:10,
  w:10,
  noise:10,
  color: '#f22129',
};

map = {
  x: -1600,
  y: -1600,
  spdx:0,
  spdy:0,
  h: MAPHEIGHT,
  w: MAPWIDTH,
  noise:0,
  color: '#ebdbb8',
};

var graboid1 = {
  x: -1550,
  y: -1550,
  spdx:10,
  spdy:10,
  h: 50,
  w: 100,
  noise:0,
  color: 'black',
};

var graboid2 = {
  x: 1550,
  y: -1550,
  spdx:10,
  spdy:10,
  h: 50,
  w: 100,
  noise:0,
  color: 'black',
};

var graboid3 = {
  x: 1550,
  y: 1550,
  spdx:10,
  spdy:10,
  h: 50,
  w: 100,
  noise:0,
  color: 'black',
};

var graboid4 = {
  x: 1550,
  y: 1550,
  spdx:10,
  spdy:10,
  h: 50,
  w: 100,
  noise:0,
  color: 'black',
};




board = {
  objects: [map, player1, player2, graboid1, graboid2, graboid3, graboid4],
  draw: function() {
    console.log("drawing");
    for (var obj in this.objects) {
      ctx.fillStyle = this.objects[obj].color;
      ctx.fillRect(this.objects[obj].x, this.objects[obj].y, this.objects[obj].h, this.objects[obj].w);
    };
  },
  update: function() {
    for (var obj in this.objects) {
      (this.objects[obj].x+= this.objects[obj].spdx);
      (this.objects[obj].y+= this.objects[obj].spdy);
    }
  }
};

function init(){
  canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  ctx = canvas.getContext('2d');
  document.body.appendChild(canvas);
  setInterval(run,40);

};

function run(){
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  board.draw();
  board.update();
};

function draw(){
  player1.draw();
}
init();
