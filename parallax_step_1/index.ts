let backgroundimages: p5.Image[] = []
function preload(){
    for(let i = 0; i<winter.length; i++){
    backgroundimages.push(loadImage(`${BASE_URL}/winter/${winter[i]}`))};
}
function setup (){
    createCanvas(500,500)
}

function draw(){
  for(let i =0; i<backgroundimages.length; i++){
    image(backgroundimages[i],0,0,500,500)}
}