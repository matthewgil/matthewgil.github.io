 var x= -127;
var y=-7;
var speed=7;
draw= function() {
    background(255, 255, 255);
    noStroke();
    fill(122, 1, 1);
    ellipse(x+119, y+67, 106, 119);//hoodie
    fill(255, 224, 189);
    ellipse(x+121,y+69,91,100);//head
    fill(122, 1, 1);
    rect(x+79, y+119, 85, 107);//body

    stroke(0, 0, 0);//black glasses
    fill(255, 224, 189);//skin color
    rect(x+87,y+50,31,21);//glasses-left
    rect(x+126,y+50,31,21);//glasses-right
    line(x+119,y+59,x+128,y+60);//nose bridge
    line(x+167,y+54,x+156,y+60);//glasses wire left
    line(x+88,y+64,x+78,y+54);//glasses wire right
    fill(54, 19, 0);
    ellipse(x+102,y+59,23,14);//eyes-lefty
    fill(54, 19, 0);
    ellipse(x+140,y+59,23,14);//eyes-righty
    line(x+153,y+93,x+121,y+90);//mouth


    line(x+93,y+139,x+85,y+184);//m
    line(x+95,y+138,x+104,y+180);//m
    line(x+119,y+141,x+104,y+180);//m
    line(x+119,y+138,x+124,y+182);//m

    line(x+135,y+139,x+159,y+134);//g
    line(x+134,y+178,x+136,y+139);//g
    line(x+134,y+178,x+162,y+175);//g
    line(x+158,y+147,x+159,y+175);//g
    line(x+158,y+149,x+143,y+151);//g

    x= x+speed;
};