class Question{
    constructor(){
        this.title = createElement("h1");
        this.question = createElement("h2");
        this.option1 = createElement("h3");
        this.option2 = createElement("h3");
        this.option3 = createElement("h3");
        this.option4 = createElement("h3");

        this.input = createInput('Enter Name');
        this.input2 = createInput('Enter Correct Option');
        this.button = createButton('Submit');

        this.error = createElement("h3");
        this.error2 = createElement("h3");
    }
    hide(){
        this.question.hide();
        this.option1.hide();
        this.option2.hide();
        this.option3.hide();
        this.option4.hide();

        this.input.hide();
        this.input2.hide();
        this.button.hide();
        this.error.hide();
        this.error2.hide();
    }

    display(){
        this.title.html("Quiz game");
        this.title.position(350,20);

        this.question.html("What is the fastest Man made object ever made?");
        this.question.position(50,100);

        this.option1.html("1) Voyager 1");
        this.option1.position(50,150);
        this.option2.html("2) Parker Solar Probe");
        this.option2.position(350,150);
        this.option3.html("3) Hubble");
        this.option3.position(50,200);
        this.option4.html("4) Voyager 2");
        this.option4.position(350,200);

        this.input.position(50,300);
        this.input2.position(350,300);
        this.button.position(500,300);

        this.button.mousePressed(()=>{
            if(this.input.value()!="Enter Name"&&this.input2.value()!="Enter Correct Option"){
                if(this.input2.value()==1||this.input2.value()==2||this.input2.value()==3||this.input2.value()==4){
                    question.hide();
                    player.name = this.input.value();
                    player.answer = this.input2.value();
                    playerCount = playerCount+1;
                    player.update();
                    player.updateCount(playerCount);
                    quiz.play();
                }
                else{
                    this.error2.html('Enter a Numeric value b/w 1 and 4');
                }
            }
            else{
                this.error.html('Enter your Name & Option');
            }
        })
        
    }
}