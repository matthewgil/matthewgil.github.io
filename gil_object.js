var drawBitmojiObjects = function(bitmojiObjects)
{
    noStroke();
        fill(122, 1, 1);//hoodie color
        ellipse(bitmojiObjects.x+298, bitmojiObjects.y+196, 104, bitmojiObjects.h+120);//hoodie
        fill(255, 224, 189);//skin color
        ellipse(bitmojiObjects.x+302,bitmojiObjects.y+200,91,bitmojiObjects.h+100);//head
        fill(122, 1, 1);//hoodie color
        rect(bitmojiObjects.x+-32, bitmojiObjects.y+60, 63, bitmojiObjects.h+73);//body

        stroke(0, 0, 0);//black glasses
        fill(255, 224, 189);//skin color
        rect(bitmojiObjects.x+-33,bitmojiObjects.y+-20,31,bitmojiObjects.h+21);//glasses-left
        rect(bitmojiObjects.x+10,bitmojiObjects.y+-20,31,bitmojiObjects.h+21);//glasses-right
        line(bitmojiObjects.x+-21,bitmojiObjects.y+119,bitmojiObjects.x+-15,bitmojiObjects.y+80);//m
        line(bitmojiObjects.x+10,bitmojiObjects.y+-11,bitmojiObjects.x+-7,bitmojiObjects.y+-10);//nose bridge
        line(bitmojiObjects.x+-44,bitmojiObjects.y+-12,bitmojiObjects.x+-32,bitmojiObjects.y+-9);//glasses left
        fill(54, 19, 0);//hoodie color
        ellipse(bitmojiObjects.x+-15,bitmojiObjects.y+-8,23,bitmojiObjects.h+14);//eyes-lefty
        fill(54, 19, 0);//hoodie color
        ellipse(bitmojiObjects.x+26,bitmojiObjects.y+-8,23,bitmojiObjects.h+14);//eyes-righty
        line(bitmojiObjects.x+45,bitmojiObjects.y+-13,bitmojiObjects.x+41,bitmojiObjects.y+-6);//mouth

         
    if(bitmojiObjects.initials === true)
    {
      fill(133, 3, 240);
    textSize(bitmojiObjects.h/100*40);
    text("MG",bitmojiObjects.x-(bitmojiObjects.h/100*35),bitmojiObject.y+(bitmojiObjects.h/100*120));//initials on shirt  
    }
};


var firstBitmoji = {x:100, y:200, h:75, shirtColor:color(255, 0, 0), initials: false};
drawBitmoji(firstBitmoji);

var secondBitmoji = {x:300, y:250, h:120, shirtColor:color(255, 255, 0), initials:true};
drawBitmoji(secondBitmoji);