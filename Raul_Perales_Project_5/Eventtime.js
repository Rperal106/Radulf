let button = [];
var index = 0;
let deer = [];
//call my info
function preload() {
  table = loadTable('assets/ENCH.csv', 'csv', 'header');
  song = loadSound('assets/Chest2.mp3');
  doodot = loadSound('assets/item.wav');
  img = loadImage('assets/chest.png');
  }

  function setup() {
    song.play();
    song.loop();
    createCanvas(640, 360);
    col = color(0, 0, 0, 90);
    bgcol = color(0, 0, 0);
    lessE = table.getColumn('Lesser Enchantments');
    medE = table.getColumn('Medium Enchantments');
    magE = table.getColumn('Major Enchantments');
    legE = table.getColumn('Legendary Enchantments');
    // my parameters
    textAlign(CENTER, CENTER);
    buttX = ((width / 13) + 10);
    buttY = ((height / 4) - 10);
    background(img, 640, 360);
    allButtons();
    reC();
    push();
    textSize(35);
    fill(103, 133, 100)
    stroke(0, 0, 0);
    strokeWeight(4);
    text("RADULF'S UNRELIABLE FORGE", width/2, 25);
    pop();
  }
  //
  function draw() {
  }
  //make a list of for all version, perhaps make a forloop here so it's dependant on what is pressed as towhich called oject is called
  function resetTbl1() {
    rstQ();
    caLess();
    doodot.play();
  }

  function resetTbl2() {
    rstQ();
    caMed();
    doodot.play();
  }

  function resetTbl3() {
    rstQ();
    caMag();
    doodot.play();
  }

  function resetTbl4() {
    rstQ()
    caLeg();
    doodot.play();
  }

  function rstQ() {
    clear();
    background(img, 640, 360);
    push();
    textSize(35);
    fill(103, 133, 100)
    stroke(0, 0, 0);
    strokeWeight(4);
    text("RADULF'S UNRELIABLE FORGE", width/2, 25);
    pop();
  }

  function caLess() {
    index = floor(random(lessE.length));

    console.log(lessE[index]);
    console.log(index);

    if (index == lessE.length) {
      index = 0;
    };
    message = (lessE[index]);
    messageBeep();
  }

  function caMed() {
    index = floor(random(medE.length));

    console.log(medE[index]);
    console.log(index);

    if (index == medE.length) {
      index = 0;
    };
    message = (medE[index]);
    messageBeep();
  }

  function caMag() {
    index = floor(random(magE.length));

    console.log(magE[index]);
    console.log(index);

    if (index == magE.length) {
      index = 0;
    };
    message = (magE[index]);
    messageBeep();
  }

  function caLeg() {
    index = floor(random(legE.length));

    console.log(legE[index]);
    console.log(index);

    if (index == legE.length) {
      index = 0;
    };
    message = (legE[index]);
    messageBeep();
  }

  function allButtons() {
    button[0] = createButton('Lesser Forge (50GP)');
    back();
    button[0].size(100);
    button[0].position(buttX, buttY);
    button[0].mousePressed(resetTbl1);
    button[1] = createButton('Medium Forge (100GP)');
    back();
    button[1].size(100);
    button[1].position(button[0].x, button[0].y + button[0].height);
    button[1].mousePressed(resetTbl2);
    button[2] = createButton('Major Forge (500GP)');
    back();
    button[2].size(100);
    button[2].position(button[1].x, button[1].y + button[1].height);
    button[2].mousePressed(resetTbl3);
    button[3] = createButton('Legendary Forge (1000GP)');
    back();
    button[3].size(100);
    button[3].position(button[2].x, button[2].y + button[2].height);
    button[3].mousePressed(resetTbl4);
  }
  //calls the same button viarables
  function back() {
    //make it so the code with all buttons in string
    for (let j = 0; j < button.length; j++) {
      button[j].style('background-color', col);
      button[j].style('color', 'white');
      button[j].style("font-family", "Palatino");
      button[j].style('border-radius', '15px');
      button[j].style('padding', '5px');
    }
  }
  //creates a paragraph in the html that allows the
  //text to be hilighted
  function messageBeep() {
    jar = createDiv(message)
    jar.position(buttX + 100, buttY);
    jar.style('background-color', bgcol);
    jar.size(width - 300, 140);
    jar.style('color', 'white');
    jar.style('padding', '30px');
    jar.style('stroke-color', 'black');
    jar.style('border-radius', '20px');
    jar.style('font-size', '12px');
  }

  function reC(){
lin = createA('https://www.dndbeyond.com/sources/dmg/between-adventures#CraftingaMagicItem',
 'want to make your own items?');
lin.position(20,325);
lin.style('color', 'white');
lin.style('font-size','17px');
  }
  // ATTEMPT AT MAKING A TEST BACKGROUND TO SEE HOW THINGS RESIZE, DOES NOT BUT THAT'S BECAUSE IT'S DONE THROUGH PROSSESSING
  // function testsq(){
  //   push();
  //   fill('red');
  // rect(0,0,1920,1080);
  //   pop();
  //   for (let i = 0; i < 800; i+=100){
  //   rect(i, 0, 20, height);
  //   }
  // }
  //
  // function genLoot(x, y, w, h) {
  //   rectMode(CENTER);
  //   push();
  //   fill(lootColor);
  //   stroke('yellow');
  //   rect(0, 0, w, h, 25);
  //   pop();
  //   fill(texColor);
  //   translate(0, 25);
  //   messageTime(0, 0, );
  // }
  //
  // function makeButton(x, y, w, h) {
  //   //lol 'butt'
  //   if (
  //     mouseX >= 1600 &&
  //     mouseX <= 1750 &&
  //     mouseY >= 650 &&
  //     mouseY <= 700
  //   ) {
  //     buttColor = color('black')
  //   } else {
  //     buttColor = color('red');
  //   }
  //   fill(buttColor);
  //   rect(0, 0, w, h, 25);
  //   fill(texColor);
  //   translate(75, 25);
  //   drawWords(0, 0);
  // }
  //
  //
  // function MakeBG(x, y) {
  //   setGradient(0, 0, width, height / 2, c1, c2, yAx);
  // }
  //
  // function setGradient(x, y, w, h, c1, c2, axis) {
  //   noFill();
  //   //sets gradient
  //   if (axis === yAx) {
  //     for (let i = 0; i <= 720; i += 50) {
  //       //map the called value (how snazzy the item should be in a gradient)
  //       let inter = map(i, value[index6], 500, 0, 1);
  //       let g = lerpColor(color('yellow'), color('black'), inter);
  //       fill(g);
  //       noStroke();
  //       rect(x, i, x + w, 50);
  //     }
  //   }
  // }
  // //words in button with default font
  // function drawWords() {
  //   fill(texColor);
  //   textAlign(CENTER, CENTER);
  //   text('Event time!', 0, 0);
  // }
  // //messaged for the call card as well as the call of the information called
  // //from the graph
  // function messageTime() {
  //   textSize(50)
  //   textAlign();
  //   text('Summon now! The ______________________  ________________of ________________ _______________ protected by ______________________', 0, 0, width / 2, height / 2)
  //   push();
  //   fill('red');
  //   text(disc[index1], 0, -85);
  //   text(type[index2], 0, -30);
  //   text(noun[index3], -200, 40);
  //   text(verb[index4], 200, 40);
  //   text(protector[index7], 0, 150);
  //   pop();
  // }
  // //if the mouse is pressed when the button is black and the mouse in over it
  // // it will make the thing happen
  // function mousePressed() {
  //   if (
  //     mouseX >= 1600 &&
  //     mouseX <= 1750 &&
  //     mouseY >= 650 &&
  //     mouseY <= 700) {
  //     index1 = floor(random(disc.length));
  //
  //     console.log(disc[index1]);
  //
  //     if (index1 == disc.length) {
  //       index1 = 0;
  //     }
  //     index2 = floor(random(type.length));
  //
  //     console.log(type[index2]);
  //
  //     if (index2 == type.length) {
  //       index2 = 0;
  //     }
  //     index3 = floor(random(noun.length));
  //
  //     console.log(noun[index3]);
  //
  //     if (index3 == noun.length) {
  //       index3 = 0;
  //     }
  //     index4 = floor(random(verb.length));
  //
  //     console.log(verb[index4]);
  //
  //     if (index4 == verb.length) {
  //       index4 = 0;
  //     }
  //     index5 = floor(random(charges.length));
  //
  //     console.log(charges[index5]);
  //
  //     if (index5 == charges.length) {
  //       index5 = 0;
  //     }
  //     index6 = floor(random(value.length));
  //
  //     console.log(value[index6]);
  //
  //     if (index6 == value.length) {
  //       index6 = 0;
  //     }
  //     index7 = floor(random(protector.length));
  //
  //     console.log(protector[index7]);
  //
  //     if (index7 == protector.length) {
  //       index7 = 0;
  //     }
  //     lootColor = color('white');
  //     buttStroke = color('red');
  //   }
  // }
  //
  // function mouseReleased() {
  //   if (
  //     mouseX >= 1600 &&
  //     mouseX <= 1750 &&
  //     mouseY >= 650 &&
  //     mouseY <= 700) {
  //     lootColor = color('black');
  //     buttstroke = color('black');
  //   }
  // }
