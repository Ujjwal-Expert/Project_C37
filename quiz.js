class Quiz{
    constructor(){
        this.title = createElement("h1");
        this.line = createElement("h3")
    }
    getState(){
        var dbref = database.ref('gameState').on("value",(data)=>{
            gameState = data.val();
        })
    }
    async start(){
        if(gameState===0){
            player = new Player();
            player.getCount();
            question = new Question();
            question.display();
        }
    }

    play(){
        gameState =1
        question.title.hide();
        Player.getContestantInfo();
        this.title.html('Result');
        this.title.position(400,50);
        this.line.html('*Names highlighted in green has correct Answer');
        this.line.position(175,90)

        if(allPlr!=undefined){
            var x = 175;
            var y = 150;
            for (var plr in allPlr){
                
                var correctAns = "2";
                textSize(20);
                if(correctAns === allPlr[plr].answer){
                    fill("green");
                }
                else{
                    fill("red");
                }
                text(allPlr[plr].name,x,y);
                y += 25;
            }
        }
    }
}