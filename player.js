class Player{
    constructor(){
        this.name=null;
        this.index = null;
        this.answer = null;
    }
    update(){
        var playerIndex = "player"+playerCount;

        var dbref = database.ref('players/player'+playerCount).set({
            name: this.name,
            answer:this.answer
        })
    }
    getCount(){
        var dbref = database.ref('playerCount').on("value",(data)=>{
            playerCount = data.val();
            console.log(playerCount);
        })
    }
    updateCount(x){
        var dbref = database.ref('/').update({
            playerCount:x
        })
    }
    static getContestantInfo(){
        var dbref = database.ref('players');

        dbref.on("value",(data)=>{
            allPlr = data.val();
        })
    }
}