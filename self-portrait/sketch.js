function setup(){
  createCanvas(800,800);
  colorMode(RGB);
  background(236, 216, 198);
  noStroke()
}

function draw(){
 
/*center is the upper part of the body:
combine with the small city village I grew up
*/
//top of the head
  //left triangle
  fill(27,50,19);
  triangle(400,50,275,200,400,200);
  
  //right triangle
  fill(135,176,158);
  triangle(400,50,400,200,525,200);
  rect(475,25,25,200);
  
  //windows
  fill(236, 216, 198);
  rect(375,120,20,20);
  rect(375,150,20,20);
  rect(405,120,20,20);
  rect(405,150,20,20);
  
  
//neck
  //left side
  fill("#b09875");
  rect(325,405,75,85);
  quad(325,490,400,490,400,750,170,750);
  
  fill(67,88,54);
  arc(150,750,200,200,PI,TWO_PI);
  
  //right side
  fill("#5a8385");
  rect(400,405,75,85);
  quad(400,490,475,490,550,650,400,650);
  
//face
  //left side
  fill(135,176,158);
  rect(275,200,125,125);
  arc(400,325,250,200,0,-HALF_PI);
  
  // blush
  fill(232,187,145);
  ellipse(330,325,40,40);
  
  //left mouth
  strokeWeight(5);
  stroke(1);
  line(370,325,400,325);

  //right side
  noStroke();
  fill(232,187,145);
  rect(400,200,125,125);
  arc(400,325,250,200,0,HALF_PI);
  
  //eye
  fill(103,122,93);
  ellipse(460,250,30,30);
  
/*left of the picture is symbol of modern cities: 
Shanghai,New York that each lived for two years
*/
   //river
  fill("#77bbbd")
  quad(50,500,250,500,225,515,50,515);
  quad(50,525,225,525,200,540,50,540);
  quad(50,550,200,550,175,565,50,565);
  
  
  //apartment
  fill(255, 51, 51);
  rect(50,300,70,25);
  
  fill(255, 153, 0);
  rect(50,325,70,25)
  
  fill(255, 255, 0);
  rect(50,350,70,25);

  fill(0, 128, 0);
  rect(50,375,70,25);
  
  fill(51, 153, 255);
  rect(50,400,70,25);
  
  fill(50, 30, 30);
  rect(50,425,70,50);
  
  fill(236, 36, 40);
  rect(65,450,30,35);
  
  //building
  //full body
  fill(179,155,129);
  rect(120,100,100,375);
  
  //top of the building
  fill(216,178,114);
  quad(140, 80,   
       200, 80,   
       220, 100,   
       120, 100); 
  
  fill(255,193,102);
  quad(160, 60,   
       180, 60,   
       200, 80,   
       140, 80);
  
  fill(255,159,18);
  triangle(170,50,160,60,180,60);
  
  stroke(0);
  strokeWeight(1);
  line(170,20,170,50);
  
 
  //windows
  noStroke();
  fill("#415938");
  rect(140,140,20,40);
  rect(180,140,20,40);
  
  rect(140,200,20,40);
  rect(180,200,20,40);
  
  rect(140,260,20,40);
  rect(180,260,20,40);
  
  rect(140,320,20,40);
  rect(180,320,20,40);
  
  //river
  
  
  arc(170,420,40,40,PI,TWO_PI);
  rect(150,420,40,55);
  
/*right of the picture is symbol of nature,travel around China: 
sea,hills,mountains
*/

  //mountains and sun
  fill("#6ca3a5");
  triangle(600,50,550,200,650,200);
  
  fill("#7e5f3e");
  triangle(680,100,600,200,750,200);
  
  fill(255, 153, 0);
  ellipse(725,75,30,30);
  
  //forests and hill
  fill("#415938");
  triangle(580,225,550,375,610,375);
  fill("#889d7a");
  triangle(650,225,620,375,680,375);
  fill("#b9c43d");
  triangle(720,225,690,375,750,375);
  
  stroke(1);
  strokeWeight(3);
  line(580,325,580,400);
  line(650,325,650,400);
  line(720,325,720,400);
  
  noStroke();
  fill("#5f734f");
  arc(650,520,175,175,PI,TWO_PI);
  
  fill("#6ca3a5");
  arc(545,750,350,380,PI,TWO_PI);
    
}
