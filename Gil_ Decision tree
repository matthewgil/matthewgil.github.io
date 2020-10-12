var questionNumber = 1;  

fill(0, 0, 0);
text("Do I have my lab coat and goggles?", 50,50); //root node question
text("is it in my backpack?", 50,100);
text("yes", 75,120);
text("no",125,120);


fill(122, 1, 1);
ellipse(298, 196, 104, 120);//hoodie
fill(255, 224, 189);
ellipse(302,200,91,100);//head
fill(122, 1, 1);
rect(268, 254, 63, 73);//body

stroke(0, 0, 0);//black glasses
fill(255, 224, 189);//skin color
rect(264,180,31,21);//glasses-left
rect(309,180,31,21);//glasses-right
line(311,188,293,188);//nose bridge
line(339,191,351,188);//glasses left
line(265,191,258,188);//glasses right
fill(54, 19, 0);
ellipse(281,191,23,14);//eyes-lefty
fill(54, 19, 0);
ellipse(324,190,23,14);//eyes-righty
line(334,215,285,210);//mouth


line(285,265,276,304);//m
line(287,265,292,280);//m
line(293,281,298,265);//m
line(298,265,304,302);//m

line(328,268,309,268);//g
line(310,269,310,299);//g
line(329,300,309,301);//g
line(327,300,326,275);//g
line(328,277,317,276);//g


mouseClicked = function()
{
    println(mouseX+"   "+mouseY);
    //yes ANSWER TO QUESTION 1
    if (mouseX < 109 && mouseX >54 && mouseY >98 && mouseY<130 && questionNumber === 1)
    {  
        questionNumber = 2;
        text("do you have your car keys", 50,150);
        text("yes",75,170);
        text("no",125,170);
    }
    
    else if (mouseX >120 && questionNumber ===1)//no to question 1 
    {
        text("You forgot the labcoat", 100,300);
    }
    
    else if (mouseY < 175 && mouseY >155 && mouseX > 75 && mouseX < 95 && questionNumber === 2)//yes to questions 2
    {
        questionNumber = 3;
        text("do u have gas?", 50,200);
        text("yes", 75,225);
        text("no", 125,225);
    }
    
    else if (mouseX > 120 && mouseX < 140 && mouseY > 155 && mouseY < 175 && questionNumber === 2)//no to question 2 
    {
        text("GO GET YOUR KEYS", 100,300);
    }
    
    else if (mouseX > 125 && mouseX < 145 && mouseY > 215 && mouseY < 235 && questionNumber=== 3)
    {
       text("Go fill up your tank", 100,300); 
    }
    else if (mouseX > 75 && mouseX < 90 && mouseY > 210 && mouseY <230 && questionNumber ===3)
    {
        questionNumber = 4;
        text("Go job you're ready to go!", 100,300); 
    }
};
