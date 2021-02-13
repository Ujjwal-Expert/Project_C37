var database;
var answer;
var playerCount;
var gameState=0;
var allPlr;
var quiz,player,question;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");
  if(gameState===1){
    background('yellow');
    quiz.play();
  }
  
  //question.display();
  
}
