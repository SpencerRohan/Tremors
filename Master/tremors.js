
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
  x: -1600,
  y: -1600,
  speed: 10,
  mod: 1,
  h: 20,
  w: 20,
  color: 'black',
  angle: 45,

  update: function(){
    (this.x+= this.mod * this.speed * Math.cos(Math.PI/180 * this.angle));
    (this.y+= this.mod * this.speed * Math.sin(Math.PI/180 * this.angle));},


  draw: function(){
    ctx.save();
    ctx.fillStyle = this.color;
    var graboid=new Path2D();
    ctx.translate(this.x, this.y);
    ctx.rotate((Math.PI/180 * this.angle));
    ctx.beginPath();
    ctx.arc(this.w/2-145, 0, 10, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-135, 0, 15, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-125, 0, 20, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-110, 0, 25, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-85, 0, 30, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-60, 0, 32, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-35, 0, 25, 0, 2 * Math.PI, false);
    ctx.fill();
    graboid.moveTo(this.w/2,0);
    graboid.lineTo(this.w/2-this.w,0-this.h);
    graboid.lineTo(this.w/2-this.w,0+this.h);
    ctx.fill(graboid);
    ctx.restore();}
};

var graboid2 = {
  x: 2400,
  y: -1600,
  speed: 9,
  mod: 1,
  h: 20,
  w: 20,
  color: 'black',
  angle: 135,

  update: function(){
    (this.x+= this.mod * this.speed * Math.cos(Math.PI/180 * this.angle));
    (this.y+= this.mod * this.speed * Math.sin(Math.PI/180 * this.angle));},


  draw: function(){
    ctx.save();
    ctx.fillStyle = this.color;
    var graboid=new Path2D();
    ctx.translate(this.x, this.y);
    ctx.rotate((Math.PI/180 * this.angle));
    ctx.beginPath();
    ctx.arc(this.w/2-145, 0, 10, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-135, 0, 15, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-125, 0, 20, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-110, 0, 25, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-85, 0, 30, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-60, 0, 32, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-35, 0, 25, 0, 2 * Math.PI, false);
    ctx.fill();
    graboid.moveTo(this.w/2,0);
    graboid.lineTo(this.w/2-this.w,0-this.h);
    graboid.lineTo(this.w/2-this.w,0+this.h);
    ctx.fill(graboid);
    ctx.restore();}
};

var graboid3 = {
  x: 2400,
  y: 2400,
  speed: 6,
  mod: 1,
  h: 20,
  w: 20,
  color: 'black',
  angle: 225,

  update: function(){
    (this.x+= this.mod * this.speed * Math.cos(Math.PI/180 * this.angle));
    (this.y+= this.mod * this.speed * Math.sin(Math.PI/180 * this.angle));},


  draw: function(){
    ctx.save();
    ctx.fillStyle = this.color;
    var graboid=new Path2D();
    ctx.translate(this.x, this.y);
    ctx.rotate((Math.PI/180 * this.angle));
    ctx.beginPath();
    ctx.arc(this.w/2-145, 0, 10, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-135, 0, 15, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-125, 0, 20, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-110, 0, 25, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-85, 0, 30, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-60, 0, 32, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-35, 0, 25, 0, 2 * Math.PI, false);
    ctx.fill();
    graboid.moveTo(this.w/2,0);
    graboid.lineTo(this.w/2-this.w,0-this.h);
    graboid.lineTo(this.w/2-this.w,0+this.h);
    ctx.fill(graboid);
    ctx.restore();}
};

var graboid4 = {
  x: -1600,
  y: 2400,
  speed: 8,
  mod: 1,
  h: 20,
  w: 20,
  color: 'black',
  angle: 315,

  update: function(){
    (this.x+= this.mod * this.speed * Math.cos(Math.PI/180 * this.angle));
    (this.y+= this.mod * this.speed * Math.sin(Math.PI/180 * this.angle));},


  draw: function(){
    ctx.save();
    ctx.fillStyle = this.color;
    var graboid=new Path2D();
    ctx.translate(this.x, this.y);
    ctx.rotate((Math.PI/180 * this.angle));
    ctx.beginPath();
    ctx.arc(this.w/2-145, 0, 10, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-135, 0, 15, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-125, 0, 20, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-110, 0, 25, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-85, 0, 30, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-60, 0, 32, 0, 2 * Math.PI, false);
    ctx.arc(this.w/2-35, 0, 25, 0, 2 * Math.PI, false);
    ctx.fill();
    graboid.moveTo(this.w/2,0);
    graboid.lineTo(this.w/2-this.w,0-this.h);
    graboid.lineTo(this.w/2-this.w,0+this.h);
    ctx.fill(graboid);
    ctx.restore();}
};



board = {
  objects: [map, player1, player2],
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
  graboid1.draw();
  graboid2.draw();
  graboid3.draw();
  graboid4.draw();
  graboid1.update();
  graboid2.update();
  graboid3.update();
  graboid4.update();
  board.update();
};

function draw(){
  player1.draw();
}
init();
