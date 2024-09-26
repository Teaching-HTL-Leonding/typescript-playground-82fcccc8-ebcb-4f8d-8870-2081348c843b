function setup() {
  createCanvas(5000, 5000);
  background("skyblue");
}

function mouseMoved() {
  background("lightblue");
  noFill();
  stroke("black");
  circle(mouseX, mouseY, 50);
  circle(mouseX, mouseY, 22);

  line(mouseX, mouseY - 35, mouseX, mouseY + 35);
  line(mouseX - 35, mouseY, mouseX + 35, mouseY);
  
  


  
}
