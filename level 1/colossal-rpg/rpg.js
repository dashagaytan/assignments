// see note file for ****** Project Requirements ********** 

// Intro: get users name and welcome them to the game 
//****************************************************

const readlineSync = require("readline-sync")
const gamer = readlineSync.question("HELLO GAMER! What is your name? ")
console.log(gamer)

const welcome = readlineSync.question(`Welcome ${gamer}! You are about to enter The Forest of Death. As you travel through the dark, deep forest you'll have to defend your life from potential enemies.`)
const playerName = readlineSync.question("Before we start, what do you want to name your player? ")
console.log(playerName)

let isAlive = true;

// set up gamers information using constructor function  
//***************************

let player = {
    name: playerName, 
    hp: 100,
    inventory: ["crossbow", "dagger", "axe"],
}

class Player { 
    constructor(name, hp, inventory){
        this.player = player,
        this.name = playerName,
        this.hp = hp,
        this.inventory = ["crossbow", "dagger", "axe"]
    }
}
console.log(`${playerName} you are supplied with 100 hp and 3 weapons to help you defend yourself as you travel through the forest`)

// set up enemy information using constructor function
//**************************

class  Enemy {
    constructor(name, hp, enemyPrize){
        this.name = name,
        this.hp = hp,
        this.enemyPrize = enemyPrize
    }
}

const madara = new Enemy("Madara", 80, "gold")
const itachi = new Enemy("Itachi", 75, "food")
const orochimaru = new Enemy("Orochimaru", 90, "sword")

const enemies = [madara, itachi, orochimaru]

// player gets to choose to walk, print inventory or exit the game
// while(isAlive){
//     const action =
// }

// Functions 
//**********************

// when enemy is defeated player gets a prize
function enemyPrize(){
    const prize = ["gold", "food", "sword"]
    const randomPrize = randomPrize(0,2) // 1 out of 3 prizes available 
    const newPrize = prize[randomPrize]
    playerInfo.inventory.push(newPrize) 
    return newPrize
}


// random number function that picks a number in range
const randomNum = function(max, min){
    return Math.floor((Math.random()* max) + min)
}