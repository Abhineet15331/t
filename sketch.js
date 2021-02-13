let h = hour();
text('Current hour:\n' + h, 5, 50);
let m = minute();
text('Current minute: \n' + m, 5, 50);
let s = second();
text('Current second: \n' + s, 5, 50);






function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
   // Scale the mouseX value from 0 to 720 to a range between 0 and 175
   let c = map(mouseX, 0, width, 0, 175);
   // Scale the mouseX value from 0 to 720 to a range between 40 and 300
   let d = map(mouseX, 0, width, 40, 300);
  drawSprites();
 


  arc(50, 55, 50, 50, 0, HALF_PI);
  noFill();
  arc(50, 55, 60, 60, HALF_PI, PI);
  arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
  arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);


function line(){
  //drawing seconds hand
  push();
  rotate(scAngle); //rotate the hand based on angle calculated
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
}
}
async function timetravel(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON=await response.json();
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13)
  console.log(hour)
  }
