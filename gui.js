
function gui() {

  var  SSL = createP('Select size of link:');
  SSL.position(10,15);
  var SNL = createP('Select Number of links:');
  SNL.position(10,45);
  var  MOD = createP('Adjust Modifier');
  MOD.position(10,90);
  var MAT = createP('Select Material:');
  MAT.position(10,135);

  var linkCounterDisp = createP(currentNumLinks).id('test');
  linkCounterDisp.position(150,62);
      
  numLinks = createSlider(8, 50, currentNumLinks);
  numLinks.position(10, 80);
  
  
  button1 = createButton('Close Chain');
  button1.position(10, 210);
  button1.mousePressed(closeChains);

  modifierWeight = createSlider(-.1, .1, 0, 0.01);
  modifierWeight.position(10, 125);

  // button2 = createButton('Modifier');
  // button2.position(10, 70);
  // button2.mousePressed(modify);

  // colorSelect = createSelect();
  // colorSelect.position(10, 175);
  // colorSelect.option('White');
  // colorSelect.option('Red');
  // colorSelect.option('Green');
  // colorSelect.option('Blue');
  // colorSelect.option('Black');
  // colorSelect.changed(changeColor);
  
  colorSelectLink = createSelect();
  colorSelectLink.position(100, 175);
  colorSelectLink.option('Pink');
  colorSelectLink.option('Purple');
  colorSelectLink.option('Orange');
  colorSelectLink.option('Blue');
  colorSelectLink.option('Black');
  colorSelectLink.option('White');
  colorSelectLink.option('Green');
  colorSelectLink.option('Yellow');
  colorSelectLink.changed(changeColor);

  sizeSelect = createSelect();
  sizeSelect.position(135, 30);
  sizeSelect.option('Medium');
  sizeSelect.option('Small');
  sizeSelect.option('Large');
  sizeSelect.changed(changeSize);
}

function closeChains() {
  if (closeChain) {
    closeChain = false;
  } else {
    closeChain = true;
  }
}

function changeColor() {
  var changeTo = colorSelect.value();
  if (changeTo == 'Purple') {
    linkColorR = (151);
    linkColorG = (32);
    linkColorB = (154);
  }
  
  if (changeTo == 'Yellow') {
    linkColorR = (247);
    linkColorG = (191);
    linkColorB = (54);
  }
  
  if (changeTo == 'Pink') {
    linkColorR = (153);
    linkColorG = (11);
    linkColorB = (84);
  }
  
  if (changeTo == 'Orange') {
    linkColorR = (249);
    linkColorG = (148);
    linkColorB = (0);
  }
  
  if (changeTo == 'Red') {
    linkColorR = (225);
    linkColorG = (22);
    linkColorB = (49);
  }

  if (changeTo == 'Green') {
    linkColorR = (63);
    linkColorG = (101);
    linkColorB = (65);
  }

  if (changeTo == 'Blue') {
    linkColorR = (34);
    linkColorG = (105);
    linkColorB = (203);
  }

  if (changeTo == 'White') {
    linkColorR = (230);
    linkColorG = (230);
    linkColorB = (230);
  }
  if (changeTo == 'Black') {
    linkColorR = (20);
    linkColorG = (20);
    linkColorB = (20);
  }

}

function changeSize() {
  var changeTo = sizeSelect.value();
  if (changeTo == 'Medium') {
    linkSize = 1;
  }

  if (changeTo == 'Small') {
    linkSize = .5;
  }

  if (changeTo == 'Large') {
    linkSize = 1.5;
  }
}