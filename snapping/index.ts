function setup() {
  createCanvas(2000, 2000);
  background("lightblue");
}

function mouseMoved() {
  const snap = 40; // marker must snap every 40 pixels
  const markerSize = 10; // size of marker

  background("lightblue");

    noFill();
  stroke("black");
strokeWeight(5);

const x = Math.round(mouseX / 40) * 40;
const y = Math.round(mouseY / 40) * 40;

  line(x, y - 35, x, y + 35);
  line(x - 35, y, x + 35, y);
}
