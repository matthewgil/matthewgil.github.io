var drawHead = function(X,Y,H){
    ellipse(X, Y, 104, 120);//hoodie
        fill(255, 224, 189);
        ellipse(X+2,Y+0,91,100);//head
        fill(122, 1, 1);
        rect(X+-32, Y+60, 68, 76);//body

        stroke(0, 0, 0);//black glasses
        fill(255, 224, 189);//skin color
        rect(X+-33,Y+-20,31,21);//glasses-left
        rect(X+10,Y+-20,31,21);//glasses-right
        
        line(X+10,Y+-11,X+-7,Y+-10);//nose bridge
        line(X+-44,Y+-12,X+-32,Y+-9);//glasses left
        fill(54, 19, 0);
        ellipse(X+-15,Y+-8,23,14);//eyes-lefty
        fill(54, 19, 0);
        ellipse(X+26,Y+-8,23,14);//eyes-righty
        line(X+47,Y+-13,X+41,Y+-6);//glasses-right

        text("MG",X-(H/100*60),Y+(H/100*134));//initials on
        line(X+-9,Y+21,X+26,Y+28);//mouth
    };
    
    
    
var drawBitmoji = function(X,Y,H){
    drawHead(X,Y-31,H);
    
};

var Scene = 0;
var currentScene;

var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
};

Button.prototype.draw = function() {
    fill(0, 234, 255);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

var yellowButton = new Button({
    x:300,
    y:100,
    width:70,
    label:"Yellow",
    onClick: function(){
        fill(255,255,0);
    }
});

var redButton = new Button({
    x:300,
    y:170,
    width:70,
    label:"Red",
    onClick: function(){
        fill(255, 0, 0);
    }
});

var blueButton = new Button({
    x:300,
    y:236,
    width:70,
    label:"Blue",
    onClick: function(){
        fill(0, 0, 255);
    }
});


var clearButtonM = new Button({ // the clear button for the letter M that will get rid of the paint 
    x:30,
    y:350,
    width:70,
    label:"Clear",
    onClick: function(){
        currentScene = 2;
        Scene = 2;
        background(0, 0, 0);
        textSize(300);
        fill(255, 255, 255);
        text("M",50,0);
        noStroke();
        yellowButton.draw();
        blueButton.draw();
        redButton.draw();
        clearButtonM.draw();
    }
});

var clearButtonG = new Button({ // the clear button for the letter G that will get rid of the paint 
    x:130,
    y:350,
    width:70,
    label:"Clear",
    onClick: function(){
        currentScene = 3;
        Scene = 3;
        background(0, 0, 0);
        textSize(300);
        fill(255, 255, 255);
        text("G",50,0);
        noStroke();
        yellowButton.draw();
        blueButton.draw();
        redButton.draw();
        clearButtonG.draw();
    }
});

var SceneM = function() // the scene for M
{
    currentScene = 2;
    Scene = 2;
    background(0, 0, 0);
    textSize(300);
    fill(255, 255, 255);
    text("M",50,0);
    noStroke();
    yellowButton.draw();
    blueButton.draw();
    redButton.draw();
    clearButtonM.draw();
};

var SceneG = function(){ //the scene for the letter G
    currentScene = 3;
    Scene = 3;
    background(0, 0, 0);
    textSize(300);
    fill(255, 255, 255);
    text("G",50,0);
    noStroke();
    yellowButton.draw();
    blueButton.draw();
    redButton.draw();
    clearButtonG.draw();
};

var btnM = new Button({ // Button for M
    x:152,
    y:275,
    width:35,
    label:"M",
    onClick: function() {
        SceneM();
        noFill();
        noStroke();
    }
});

var btnG = new Button({ // the button for g
    x:201,
    y:275,
    width:35,
    label:"G",
    onClick: function() {
        SceneG();
        noFill();
        noStroke();
    }
});

var splashScene = function(){
    background(38, 149, 189);
    fill(0, 0, 0);
    textSize(45);
    text("Learn Your Initials!",16,30);
    text("By:Matthew Gil",12,330);
    drawBitmoji(194,160,50);
    btnM.draw();
    btnG.draw();
    noFill();
    noStroke();
};

draw = function() {
     if(Scene === 0)
     {
         splashScene();
     }
};

mouseDragged = function() {
    if (currentScene === 1 || 2)
    {
        yellowButton.handleMouseClick();
        blueButton.handleMouseClick();
        redButton.handleMouseClick();
    }
    ellipse(mouseX, mouseY, 10, 10);
};

mouseClicked = function() {
    if(Scene === 0)
    {
        btnM.handleMouseClick();
        btnG.handleMouseClick();
    }
    else if (currentScene === 1||2)
    {
        yellowButton.handleMouseClick();
        redButton.handleMouseClick();
        blueButton.handleMouseClick();
        clearButtonM.handleMouseClick();
        clearButtonG.handleMouseClick();
    }
};

