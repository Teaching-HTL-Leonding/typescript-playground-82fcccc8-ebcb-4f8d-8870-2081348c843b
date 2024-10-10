function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    fill("red");
    rect(0, 0, width / 3);

    fill("green");
    rect(width / 3, 0, width / 3);

    fill("yellow");
    rect(width / 3 * 2, 0, width / 3);
}

function mouseClicked() {

    fill("black");
    rect(0, 150, width, 50);

    fill("white");
    let message: string;
    if (mouseX < width / 3) {
        message = "red"
    } else if (mouseX < width / 3 * 2) {
        message = "green";

    } else {
        message = "yellow";

    }
    textAlign(CENTER);
    textSize(40);
    text(message, 200, 180);


}
