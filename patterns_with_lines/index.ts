function setup() {
    createCanvas(601, 301);
    background("black");

    fill("aqua");
    noStroke();

    textSize(50);
    textAlign(CENTER, CENTER);
    text("Move the mouse to start", 0, 0, width, height);
}

function mouseMoved() {
    resetMatrix();
    background("black");
    strokeWeight(2);

    noFill();
    stroke("aqua");
let height1 = 0
let height2 = 0
for (let x = 0; x < 601; x++){
    for (let i = 0; i < 50; i += 1) {
        line()

    }
}

}