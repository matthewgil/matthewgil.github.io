var numDrops = 179;

var drawMyBitmoji = function (bitmojiX, bitmojiY)
{
        ellipse(bitmojiX, bitmojiY, 104, 120);//hoodie
        fill(255, 224, 189);
        ellipse(bitmojiX+2,bitmojiY+0,91,100);//head
        fill(122, 1, 1);
        rect(bitmojiX+-32, bitmojiY+60, 68, 76);//body

        stroke(0, 0, 0);//black glasses
        fill(255, 224, 189);//skin color
        rect(bitmojiX+-33,bitmojiY+-20,31,21);//glasses-left
        rect(bitmojiX+10,bitmojiY+-20,31,21);//glasses-right
        line(bitmojiX+-21,bitmojiY+119,bitmojiX+-15,bitmojiY+80);//m
        line(bitmojiX+10,bitmojiY+-11,bitmojiX+-7,bitmojiY+-10);//nose bridge
        line(bitmojiX+-44,bitmojiY+-12,bitmojiX+-32,bitmojiY+-9);//glasses left
        fill(54, 19, 0);
        ellipse(bitmojiX+-15,bitmojiY+-8,23,14);//eyes-lefty
        fill(54, 19, 0);
        ellipse(bitmojiX+26,bitmojiY+-8,23,14);//eyes-righty
        line(bitmojiX+45,bitmojiY+-13,bitmojiX+41,bitmojiY+-6);//mouth


        line(bitmojiX+-7,bitmojiY+21,bitmojiX+26,bitmojiY+28);//m
        line(bitmojiX+-14,bitmojiY+80,bitmojiX+-8,bitmojiY+113);//m
        line(bitmojiX+0,bitmojiY+80,bitmojiX+-8,bitmojiY+113);//m
        line(bitmojiX+0,bitmojiY+80,bitmojiX+5,bitmojiY+113);//m

        line(bitmojiX+12,bitmojiY+78,bitmojiX+12,bitmojiY+112);//g
        line(bitmojiX+30,bitmojiY+112,bitmojiX+13,bitmojiY+112);//g
        line(bitmojiX+30,bitmojiY+112,bitmojiX+31,bitmojiY+90);//g
        line(bitmojiX+20,bitmojiY+91,bitmojiX+31,bitmojiY+90);//g
        line(bitmojiX+13,bitmojiY+75,bitmojiX+30,bitmojiY+75);//g 
    };

var xPositions = [];

var yPositions = [];

var dropColor = [];

for (var j=0; j <numDrops; j++) //this for loop is the x array
{
    xPositions.push(random(10,350));
}

for (var h=0; h <numDrops; h++)  // this for loop is the y array
{
    yPositions.push(random(10,350));
}

for (var x=0; x <numDrops; x++)  //this for loop is the color array
{
    dropColor.push(color(random(0,255),random(0,255),random(0,255)));
}
    
    draw = function() {
        
    background(153, 240, 255);// color of the background
    
    fill(0, 0, 0);//umbrellas color
    
    rect(279,212,8,179,59);//the umbrella

    
    drawMyBitmoji (345,252);// when called it draws the whole bitmoji on the x and y cords
   
   for (var i = 0; i < yPositions.length; i++) {
        noStroke();
        fill(dropColor[i]);
        ellipse(yPositions[i]%400, xPositions[i], 11, 10);//how the raindrops look like
        
        yPositions[i] += random (1,4);//the raindrops speed 
        
        if (yPositions[i] > 279 && xPositions[i] > 187)//where the rain drop will end in the right hand side 
        {
           
            yPositions[i] = 0;//where the rain drop will start from the left 
            
        }
        
    }
    
};
