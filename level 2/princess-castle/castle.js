const readline = require("readline-sync");
const namePicked = ["Mario", "Luigi"]

class Player {
    constructor(name, totalCoins = 0, status = "", hasStar = false, gameActive = true){
        this.name = name
        this.totalCoins = totalCoins;
        this.status = status
        this.hasStar = hasStar;
        this.gameActive = gameActive;
    }


    setName(){
        const names = readline.keyInSelect(namePicked)
        if(names === 0){
            this.name = "Mario "
        }else if (names === 1){
            this.name = "Luigi"
        }
    }

    gotHit(){
        if(this.status === "Power Up" && this.hasStars === true){
            console.log("Your star has protected you!")
        }else if(this.status === "Power Up"){
            this.status = "Big"
            console.log("You got hit!")
        }else if(this.status === "Big"){
            this.status = "Small"
            console.log("You got hit!")
        }else if(this.status === "Small"){
            this.status = "Dead"
            this.gameActive = false
            console.log("You lost the game. You died.")
            // console.log(`Your final score was ${this.totalCoins}`)
        }
    }


    addCoins(){
        this.totalCoins++
        return this.totalCoins
    }

    powerUp(){
        if(this.status === "Small"){
            this.status = "Big"
        }else if(this.status === "Big"){
            this.status = "Power Up"
        }else if(this.status === "Power Up"){
            this.hasStar = true
            console.log("You've got a star 🌟")
        }
    }

    print(){
      console.log(`Name: ${this.name} 
      Total Coins: ${this.totalCoins} 
      Status: ${this.status}`)
    }
}

const player = new Player();
player.setName()

function randomNumber(){
    let number = Math.floor(Math.random() * 3)

    if(number === 0){
        player.gotHit()
        console.log("You got hit!")
    }else if(number === 1){
        player.powerUp()
        console.log("You powered up!")
    }else if(number === 2){
        player.addCoins()
        console.log("You found a coin!")
    }

    if(player.gameActive === false){
        clearInterval(intervalId)
    }
    player.print()

}

const intervalId = setInterval(randomNumber, 2000)