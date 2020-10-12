 //Program draws circles following the mouse
   // When mouse is clicked, it stops
   
   
  

   var stillplaying = true;
    
   var draw = function() {
       if (stillplaying)
       {
        ellipse(mouseX, mouseY, 104, 120);//hoodie
        fill(255, 224, 189);
        ellipse(mouseX+2,mouseY+0,91,100);//head
        fill(122, 1, 1);
        rect(mouseX+-32, mouseY+60, 63, 73);//body

        stroke(0, 0, 0);//black glasses
        fill(255, 224, 189);//skin color
        rect(mouseX+-33,mouseY+-20,31,21);//glasses-left
        rect(mouseX+10,mouseY+-20,31,21);//glasses-right
        line(mouseX+-21,mouseY+119,mouseX+-15,mouseY+80);//m
        line(mouseX+10,mouseY+-11,mouseX+-7,mouseY+-10);//nose bridge
        line(mouseX+-44,mouseY+-12,mouseX+-32,mouseY+-9);//glasses left
        fill(54, 19, 0);
        ellipse(mouseX+-15,mouseY+-8,23,14);//eyes-lefty
        fill(54, 19, 0);
        ellipse(mouseX+26,mouseY+-8,23,14);//eyes-righty
        line(mouseX+45,mouseY+-13,mouseX+41,mouseY+-6);//mouth


        line(mouseX+-7,mouseY+21,mouseX+26,mouseY+28);//m
        line(mouseX+-14,mouseY+80,mouseX+-8,mouseY+113);//m
        line(mouseX+0,mouseY+80,mouseX+-8,mouseY+113);//m
        line(mouseX+0,mouseY+80,mouseX+5,mouseY+113);//m

        line(mouseX+12,mouseY+78,mouseX+12,mouseY+112);//g
        line(mouseX+30,mouseY+112,mouseX+13,mouseY+112);//g
        line(mouseX+30,mouseY+112,mouseX+31,mouseY+90);//g
        line(mouseX+20,mouseY+91,mouseX+31,mouseY+90);//g
        line(mouseX+13,mouseY+75,mouseX+30,mouseY+75);//g    //add bitmoji
           if (mouseIsPressed) 
           {
            fill (255, 255, 255);
             //make a border
            {stillplaying = false;}
          } 
       }};
       
    mouseOut = function() {
    background(255, 0, 0);
    };
    
    mouseOver = function() {
    background(255, 255, 255);
};
   //Hit Restart to try again

