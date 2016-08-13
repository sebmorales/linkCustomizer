var link,linkEnd;
var xCenter;
var orbitX = 0;
var orbitY = 0;
var oldNumLinks=0;
var currentNumLinks=8;
chainLenght=0;
oldchainLenght=0;

var numLinks, modifierWeight,button,input, button1, button2, colorSelect, colorSelectLink, sizeSelect, colorRadio, linkCounterDisp;
var linkColorR = 200; var linkColorG = 200; var linkColorB = 200;
var endLinkColorR =34; var endLinkColorG = 105; var endLinkColorB = 203;

var linkSize = 1.5;
var linkScale = 1.5;
var spacing=65;
var dimSpacing=65;

var closeChain = false;
var modifier = false;
var emailSent=false;
var done=false;

var offDomX=20;
var img;
var offDomY=20;

var colorPaletDia=20;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  link = loadModel('assets/unityMain.obj', true);
  linkEnd = loadModel('assets/unityLink.obj', true);
  gui();
  //camera(0,0,0);
  directionalLight(180, 180, 180, -.1, -.003, 1.2);
//  directionalLight(255, 255, 255, 0, 0, 1);

}

function draw() {
	  // push();
	  // specularMaterial(111, 200, 100);
	  // //line
	  // translate(-windowWidth/2, -windowHeight/2+300, 0);
  	// ellipse(50,50,0,20,20);
  	// //print("x: "+mouseX+ " y: "+mouseY);
  
   // pop();
	
	
	if(emailSent){
		background(40);
	
		//var emailCongrats= createP("Congratulations order submitted!").id('emailSent');
		if(!done){
			var emailCongrats= createP("Congratulations order submitted!"+'<br>'+
				"You will be contacted at: "+ input.value()+" shortly."+'<br><br>'+
				"Refresh to submit another one.").id('emailSent');
			emailCongrats.position(width/2-100,height/2-100);
		  emailCongrats.class("menu");	
			done=true;
		}
	}
	
	if(!emailSent){
	  currentNumLinks = numLinks.value();
	  chainLenght=round(dimSpacing*currentNumLinks/7)/10;
	  if(oldNumLinks!=currentNumLinks || chainLenght!=oldchainLenght){
	      var elem = document.getElementById('test');
	      var elem2 = document.getElementById('dimensions');
	      elem.parentElement.removeChild(elem); 
	      elem2.parentElement.removeChild(elem2); 
	      var linkCounterDisp = createP(currentNumLinks).id('test');
	      linkCounterDisp.position(156,offDomY+64);
	      linkCounterDisp.class("menu");
	      
	      var lengthChain=createP("Chain Dimensions: "+chainLenght+" cm").id('dimensions');
				lengthChain.position(offDomX,offDomY+15);
				lengthChain.class("menu");
				
				oldChainLenght=chainLenght;
	      oldNumLinks=currentNumLinks;
	   }//update numLinks on display
	   
	  if (closeChain) {
	    xCenter = 0;
	    scaleValue=linkSize / (.3 * currentNumLinks) + .4;
	  } 
	  
	  else {
	    xCenter = -((currentNumLinks+2) * spacing)/2
	  }
	  var scaleByNumber = 10 / (.9 * currentNumLinks) + .3;
		push();
	  scale(scaleByNumber);
		translate(250,-100,0);//center on "window"
		//orbit
	  rotateX(orbitX);
	  rotateY(orbitY);
	  
	  for (var i = 0; i < currentNumLinks; i++) {
	    translate(xCenter + (i * spacing),0 , 0);//Prep Position for link
	    if (i - currentNumLinks / 2 < 0) {//Apply Modifier
	      scale(1, 1 + modifierWeight.value()*15/currentNumLinks, 1);//modify based on number of links
	    } else {
	      scale(1, 1 - modifierWeight.value()*15/currentNumLinks, 1);
	    }
	
	    if (closeChain) {
	      rotateY(TWO_PI / currentNumLinks);
	    }
	    var scaleValue = linkSize / (4.5) + .3;
			push();
		  scale(scaleValue);
	
	    if (i===0){
	    	specularMaterial(endLinkColorR, endLinkColorG, endLinkColorB);
	    	model(linkEnd);
	    }
	    else if(i>0 && i<currentNumLinks-1){
	    	specularMaterial(linkColorR, linkColorG, linkColorB);
	    	model(link);
	    }
	    else{
	    	specularMaterial(linkColorR, linkColorG, linkColorB);
	    	push();
	    	rotateX(PI);
		   	model(linkEnd);
		   	pop();
	    }
	    pop();
	
	    translate(-xCenter + (-i * spacing), 0, 0);//return origin to original position
	  }
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, WEBGL);
}

function mouseDragged() {
  if (mouseX > 150) {
    orbitX += -((pmouseY - mouseY) * 0.01);
    orbitY += -((pmouseX - mouseX) * 0.01);
  }
}

function gui() {

  var  SSL = createP('Select size of link:');
  SSL.position(offDomX,offDomY-10);
  SSL.class("menu");
  var  lengthChain = createP('Chain Dimensions: ').id('dimensions');
  lengthChain.position(offDomX,offDomY);
  lengthChain.class("menu");
  
  var SNL = createP('Select Number of links:');
  SNL.position(offDomX,offDomY+40);
  SNL.class("menu");

  var  MOD = createP('Adjust Modifier');
  MOD.position(offDomX,offDomY+90);
  MOD.class("menu");

  var MAT = createP('Select Materials:');
  MAT.position(offDomX,offDomY+135);
  MAT.class("menu");

  var linkCounterDisp = createP(currentNumLinks).id('test');
  linkCounterDisp.position(150,offDomY+62);
  linkCounterDisp.class("menu");
  


      
  numLinks = createSlider(15, 22, currentNumLinks);
  numLinks.position(offDomX, offDomY+80);
  
  
  button1 = createButton('Close Chain');
  button1.position(offDomX, offDomY+210);
  button1.mousePressed(closeChains);
  
  button = createButton('Print!');
  button.position(160, height-35);
  button.mousePressed(printOrder);
  
  input = createInput('email');
  input.position(20, height-35);


  modifierWeight = createSlider(0, .1, 0, 0.01);
  modifierWeight.position(offDomX, offDomY+125);

  // button2 = createButton('Modifier');
  // button2.position(10, 70);
  // button2.mousePressed(modify);

  colorSelect = createSelect();
  colorSelect.position(100, offDomY+175);
  colorSelect.option('White');
  colorSelect.option('Red');
  colorSelect.option('Green');
  colorSelect.option('Blue');
  colorSelect.option('Black');
  colorSelect.changed(changeColor);
  
  colorSelectEnd = createSelect();
  colorSelectEnd.position(offDomX, offDomY+175);
  colorSelectEnd.option('Blue');
  colorSelectEnd.option('Green');
  colorSelectEnd.option('White');
	colorSelectEnd.option('Pink');
  colorSelectEnd.option('Purple');
  colorSelectEnd.option('Orange');
  colorSelectEnd.option('Black');
  colorSelectEnd.option('Yellow');
  colorSelectEnd.changed(changeColorEnd);

  sizeSelect = createSelect();
  sizeSelect.position(145, offDomY+5);
  sizeSelect.option('Medium');
  sizeSelect.option('Small');
  sizeSelect.option('Large');
  sizeSelect.changed(changeSize);
}

function printOrder(){
	var bodyEmail="Congratulations on the new order!" +'\n\n'+
		input.value() + " has submitted a design:"+'\n\n'+
		"Number Of Links: " + currentNumLinks + '\n\n' +
		"Color Chain: " + colorSelect.value() +'\n\n' +
		"Color Link: " + colorSelectEnd.value() + '\n\n' +
		"Modifier: " + modifierWeight.value() + '\n\n' +
    "Size: " + sizeSelect.value();
		emailSent=true;

    Email.send(
    	"moralesenelprado@gmail.com",
    	"sebmoralesprado@gmail.com",
    	"New Order From Unity Customizer!",
    	bodyEmail,
    	"smtp.sendgrid.net",
    	"adorevolution",
    	"testForP5"
    	);
		print(bodyEmail);
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
    linkColorR = (200);
    linkColorG = (200);
    linkColorB = (200);
  }
  if (changeTo == 'Black') {
    linkColorR = (40);
    linkColorG = (40);
    linkColorB = (40);
  }
}

function changeColorEnd() {
  var changeEndTo = colorSelectEnd.value();
  if (changeEndTo == 'Purple') {
    endLinkColorR = (151);
    endLinkColorG = (32);
    endLinkColorB = (154);
  }
  
  if (changeEndTo == 'Yellow') {
    endLinkColorR = (247);
    endLinkColorG = (191);
    endLinkColorB = (54);
  }
  
  if (changeEndTo == 'Pink') {
    endLinkColorR = (153);
    endLinkColorG = (11);
    endLinkColorB = (84);
  }
  
  if (changeEndTo == 'Orange') {
    endLinkColorR = (249);
    endLinkColorG = (148);
    endLinkColorB = (0);
  }
  
  if (changeEndTo == 'Red') {
    endLinkColorR = (225);
    endLinkColorG = (22);
    endLinkColorB = (49);
  }

  if (changeEndTo == 'Green') {
    endLinkColorR = (63);
    endLinkColorG = (101);
    endLinkColorB = (65);
  }

  if (changeEndTo == 'Blue') {
    endLinkColorR = (34);
    endLinkColorG = (105);
    endLinkColorB = (203);
  }

  if (changeEndTo == 'White') {
    endLinkColorR = (200);
    endLinkColorG = (200);
    endLinkColorB = (200);
  }
  if (changeEndTo == 'Black') {
    endLinkColorR = (40);
    endLinkColorG = (40);
    endLinkColorB = (40);
  }
}

function changeSize() {
  var changeTo = sizeSelect.value();
  if (changeTo == 'Medium') {
    //linkSize = linkScale;
    //directionalLight(180, 180, 180, -.1, -.003, 1.3);
    dimSpacing=65;
  }

  if (changeTo == 'Small') {
    //linkSize = linkScale-.5;
    //directionalLight(180, 180, 180, -.1, -.003, 1.);
		dimSpacing=53;
  }

  if (changeTo == 'Large') {
    //linkSize = linkScale+.5;
    //directionalLight(180, 180, 180, -.1, -.003, 1.4);
    dimSpacing=75;
  }
}

function drawing2D(){
	for(var i = 0; i < 500; i+=100){
	  push();
	  fill(i * 0.1, 100, 100);
	
	  //line
	  translate(0, 100, 0);
	  line(-100, 0, i, 100, 0, i);
	  pop();
	}
}