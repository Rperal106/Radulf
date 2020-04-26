const yAx = 1;
var table, x, y, ps, lootColor, buttColor, buttStroke, texColor, disc, type, noun, verb, charges, value, protector, c1, c2;
//this doesn't feel like the most efficient way to list these but it makeSound
//the most sense to me??
var index1 = 0;
var index2 = 0;
var index3 = 0;
var index4 = 0;
var index5 = 0;
var index6 = 0;
var index7 = 0;

//call my info
function preload() {
  table = loadTable('assets/vault2.csv', 'csv', 'header');
}

function setup() {

  createCanvas(1800, 720);
  background(0);

  //call the rows in my table
  //what's the likelyhood matt's name pops up during critique?
  disc = table.getColumn('Disc');
  type = table.getColumn('Type');
  noun = table.getColumn('Noun');
  verb = table.getColumn('Verb');
  charges = table.getColumn('Charges');
  value = table.getColumn('Value');
  protector = table.getColumn('Protector');
  // my parameters
  texColor = color('White');
  buttcolor = color('red');
  lootColor = color('black');
  butstroke = color('black');
  c1 = color(value[index6], 255, 65);
  c2 = color(255, 65, 63);
  ps = 23
  textAlign(CENTER, CENTER);
}

function draw() {
  MakeBG();
  push();
  translate(1600, 650);
  makeButton(0, 0, 150, 50);
  pop();
  push();
  translate(900, 325);
  genLoot(0, 0, width * (2 / 3), height * (2 / 3));
  pop();
}

function genLoot(x, y, w, h) {
  rectMode(CENTER);
  push();
  fill(lootColor);
  stroke('yellow');
  rect(0, 0, w, h, 25);
  pop();
  fill(texColor);
  translate(0, 25);
  messageTime(0, 0, );
}

function makeButton(x, y, w, h) {
  //lol 'butt'
  if (
    mouseX >= 1600 &&
    mouseX <= 1750 &&
    mouseY >= 650 &&
    mouseY <= 700
  ) {
    buttColor = color('black')
  } else {
    buttColor = color('red');
  }
  fill(buttColor);
  rect(0, 0, w, h, 25);
  fill(texColor);
  translate(75, 25);
  drawWords(0, 0);
}


function MakeBG(x, y) {
  setGradient(0, 0, width, height / 2, c1, c2, yAx);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  //sets gradient
  if (axis === yAx) {
    for (let i = 0; i <= 720; i += 50) {
      //map the called value (how snazzy the item should be in a gradient)
      let inter = map(i, value[index6], 500, 0, 1);
      let g = lerpColor(color('yellow'), color('black'), inter);
      fill(g);
      noStroke();
      rect(x, i, x + w, 50);
    }
  }
}
//words in button with default font
function drawWords() {
  fill(texColor);
  textAlign(CENTER, CENTER);
  text('Event time!', 0, 0);
}
//messaged for the call card as well as the call of the information called
//from the graph
function messageTime() {
  textSize(50)
  textAlign();
  text('Summon now! The ______________________  ________________of ________________ _______________ protected by ______________________', 0, 0, width / 2, height / 2)
  push();
  fill('red');
  text(disc[index1], 0, -85);
  text(type[index2], 0, -30);
  text(noun[index3], -200, 40);
  text(verb[index4], 200, 40);
  text(protector[index7], 0, 150);
  pop();
}
//if the mouse is pressed when the button is black and the mouse in over it
// it will make the thing happen
function mousePressed() {
  if (
    mouseX >= 1600 &&
    mouseX <= 1750 &&
    mouseY >= 650 &&
    mouseY <= 700) {
    index1 = floor(random(disc.length));

    console.log(disc[index1]);

    if (index1 == disc.length) {
      index1 = 0;
    }
    index2 = floor(random(type.length));

    console.log(type[index2]);

    if (index2 == type.length) {
      index2 = 0;
    }
    index3 = floor(random(noun.length));

    console.log(noun[index3]);

    if (index3 == noun.length) {
      index3 = 0;
    }
    index4 = floor(random(verb.length));

    console.log(verb[index4]);

    if (index4 == verb.length) {
      index4 = 0;
    }
    index5 = floor(random(charges.length));

    console.log(charges[index5]);

    if (index5 == charges.length) {
      index5 = 0;
    }
    index6 = floor(random(value.length));

    console.log(value[index6]);

    if (index6 == value.length) {
      index6 = 0;
    }
    index7 = floor(random(protector.length));

    console.log(protector[index7]);

    if (index7 == protector.length) {
      index7 = 0;
    }
    lootColor = color('white');
    buttStroke = color('red');
  }
}

function mouseReleased() {
  if (
    mouseX >= 1600 &&
    mouseX <= 1750 &&
    mouseY >= 650 &&
    mouseY <= 700) {
    lootColor = color('black');
    buttstroke = color('black');
  }
}
// var x = [], y = [], c = [], n = 20
//
//
//   function setup(){
//
//     createCanvas(windowWidth, windowHeight);
//     background(0);
//
//     for(var i=0; i<n; i++) {
//       x[i] = random(width);
//       y[i] = random(height);
//       c[i] = color(random(255), random(255), random(255));
//     }
// }
//
// function draw(){
//   colorMode(HSB);
//   translate(30, 30);
//         drawBoard();
// }
//
// function drawBoard(i){
//    for(var i=0; i < n; i++) {
//       drawPip(x[i], y[i] , n = n - (x[i] / y[i]));
//     }
// }
//
// function drawPip(x, y, size){
//   fill((20 + y) % 255, 100, 100);
//   square(x, y, n);
// }




//FIRST ITTERATION
//   function setup(){
//
//     createCanvas(windowWidth, windowHeight);
//     background(255);
// }
//
//
// function draw(){
//   background(0);
//   colorMode(HSB);
//   var loc1 = map(mouseX, 100, width, 0, 255)
//   var loc2 = map(mouseY, 100, height, 0, 255)
//   for (let i= 0; i < 100; i = i + 20){
//
//     drawBoard();
//
//   frameRate(24);
//   }
// }
//
// function drawBoard(i){
//   for (let i= 0; i < 300; i = i + 25){
//     drawPal(10, 10, 50, i+5);
//   drawPip(20, i , 20);
//   drawPip(45, i , 20);
//   }
// }
//
// function drawPip(x, y, size){
//   fill((20 + y) % 255, 100, 100);
//   square(x, y, size);
// }
//
// function drawPal(x, y, s, s2){
//   for (let i= 0; i < 300; i = i + 25){
//     rectMode(CORNER);
//
//     rect(x, y, s, s2);
//   }
// }
