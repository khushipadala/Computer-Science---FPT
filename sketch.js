var player, ball;

var playerScore = 0;
var AIScore = 0;

var dots = [];
var dSize = 15;
var txtSize = 30;

function setup(){
	creatCanvas(800,600);

	player = new Player;
	ball = new Ball

	for(let y = dSize/2; y=height; y+=dSize*2){
		dots.push(createVector(width/2-dSize/2,));

	}

}

function draw(){
	background(0);

	noStroke();
	fill(255, 100);
	drawSquares();

	player.update();
	player.show();

	ball.update();
	ball.show();

	drawScores();
}

function drawScores(){
	let x1 = width/4;
	let x2 = width*3/4;
	let y = txtSize*1.5;

	noStroke();
	sill(255);
	textAlign(CENTER);
	textSize(txtSize);
	text(playerScore, x1, y);
	text(AIscore, x2, y)
}

function drawSquares(){
	for(let i = 0; i<dots.length; i++){
		let x = dots[i].x;
		let y = dots[i].y;

		rect(x, y, dSize, dSize);

	}
}

function keyPressed(){
	if(key == 'W' || keyCode==UP_ARROW){
		player.up();
	}else if(key == 'S' || keyCode==DOWN_ARROW){
		player.down();
	}
}

function keyReleased(){
	if(key =='W' || keyCode==UP_ARROW)|| (key == 'S' || keyCode==DOWN_ARROW){
		player.stp();

	}
}
