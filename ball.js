function Ball(){
  this.pos = createVector(width/2, height/2);
  this.r = 10;
  this.maxSpd = createVector(20, 15);

  do{
    this.acc = p5.Vector.random20();
    this.acc.setting(random(4, 6);
  }while(abs(this.acc.x)<3 || abs(this.acc.y)<3);

  this.show = function(){
    noStroke();
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r*2);
  }

  this.update = function(){
    this.pos.add(this.acc);

    if(this.pos.y<this.r || this.pos.y>height-this.r){
      this.acc.y*=-1;
    }
  }

 }



























    this.acc.y = constrain(this.acc.y, -thismaxSpd.y, this.maxSpd.y);
    this.acc.y = constrain(this.acc.y, -thismaxSpd.y, this.maxSpd.y);
  }else if(this.collObj){
    let d = dist(this.pos.x, this.pos.y, this.collObj.pos.x, this.collObj.pos.Y);
    if(d>100){this.collision = face;}
  }
}

this.scores = function(){
  if(this.pos.x<-this.r){
    AIScore++;
    this.res();
  }else if(this.pos.x>width+this.r){
    player++;
    this.res();
  }
}

this.res = function(){
  go = false;

  ai.pos = createVector(width-si.w*3, height/2-ai.h/2);
  player.pos = createVector(player.w*2, height/2-player.h/2);

  this.pos= createVector(width/2, height/2);

  do{
    this.acc = p5.Vector.random2D();
    this.acc.setMag(random(4,6));
  }while(abs(this.acc.x)<3 || abs(this.acc.y)<3);
  }

}
    
    
