const readlineSync = require("readline-sync")
const statuses = ["Power Up", "Big", "Small", "Dead"]
const setName = ["Mario", "Luigi"]


class Player {
    constructor(name, totalCoins = 0, status = "", hasStar = false, gameActive = ture){
        this.name = name
        this.totalCoins = totalCoins;
        this.status = status
        this.hasStar = hasStar;
        this.gameActive = gameActive;
    }
    setName(){
        const names = readlineSync.keyInSelect(namePicked)
        if(names === 0){
            this.name = "Mario "
        }else if (names === 1){
            this.name = "Luigi"
        }
    }

    gotHit(){
        if(this.status === statuses[0] && this.hasStars === true){
            console.log("Your star has protected you!")
        }else if(this.status === statuses[0]){
            this.status = statuses[1]
            console.log("You got hit!")
        }else if(this.status === statuses[1]){
            this.status = statuses[2]
            console.log("You got hit!")
        }else if(this.status === statuses[2]){
            this.status = statuses[3]
            this.gameActive = false
            console.log("You got hit!")
            console.log("You lost the game. You died.")
            console.log(`Your final score was ${this.totalCoins}`)
        }
    }
}