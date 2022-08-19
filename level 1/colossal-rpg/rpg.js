// see note file for ****** Project Requirements ********** 

// Intro: get users name and welcome them to the game 
//****************************************************

const readlineSync = require("readline-sync")
const gamer = readlineSync.question("HELLO GAMER! What is your name? ")
console.log(gamer)

const welcome = readlineSync.question(`Welcome ${gamer}! You are about to enter The Forest of Death. As you travel through the dark, deep forest you'll have to defend your life from potential enemies.`)
const playerName = readlineSync.question("Before we start, what do you want to name your player?")
console.log(playerName)

let isAlive = true;

// set up gamers information 
//***************************

let playerInfo = {
    name: playerName, 
    hp: 100,
    inventory: ["crossbow", "dagger", "axe"],
}

class PlayerInfo { 
    constructor(name, hp, inventory){
        this.player = playerInfo,
        this.name = playerName,
        this.hp = hp,
        this.inventory = ["crossbow", "dagger", "axe"]
    }
}
console.log(`${playerName} you are supplied with 100 hp and 3 weapons to help you defend yourself as you travel through the forest`)

// set up enemy information 
//**************************

class  Enemy {
    constructor(name, hp, enemyPrize){
        this.name = name,
        this.hp = hp,
        this.enemyPrize = enemyPrize
    }
}
const enemies = [madara, itachi, orochimaru]

const madara = new Enemy("Madara", 80, "gold")
const itachi = new Enemy("Itachi", 75, "food")
const orochimaru = new Enemy("Orochimaru", 90, "sword")

// Functions 
//**********************

