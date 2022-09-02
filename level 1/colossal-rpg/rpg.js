// see note file for ****** Project Requirements ********** 
const readlineSync = require("readline-sync")
let isAlive = true;

const user = readlineSync.question("Before we start, what is your name?  ")
console.log( 'Hi ' + user + '!')
const welcome = readlineSync.question("Welcome to my RPG game. You are about to set out on a journey through THE DEATH FOREST. ")
const name = readlineSync.question("Before we go any further...What would you like to name your player?  ")
//console.log(name)

// player information
class Player{
    constructor(name, hp, inventory){
        this.name = name,
        this.hp = hp,
        this.inventory = ["crossbow", "dagger", "axe"]   
    }
}

// enemy information
class Enemy{
    constructor(enemyName, enemyHp, enemyTreasure){
        this.enemyName = enemyName;
        this.enemyHp = enemyHp;
        this.enemyTreasure = enemyTreasure
    }
}

const enemies = []
const madara = new Enemy("Madara", 100, "gold")
const itachi = new Enemy("Itachi", 100, "food")
const orochimaru = new Enemy("Orochimaru", 100, "sword")

enemies.push(madara, itachi, orochimaru)

const inventory = ["crossbow", "dagger", "axe"] 
const player = new Player (name, 100, ["crossbow", "dagger", "axe"])

// player gets to choose between walking, printing an inventory or to exit the game.
while(isAlive){
    const option = readlineSync.keyIn("Please make your selection: 'W' if you want to Walk, 'P' to print your Inventory, or 'Q' to Exit the game. ", {limit: ['w','p','q']})
    if(option === 'w'){
        walk()
    }else if (option === 'p'){
        console.log(inventory)
    }else if(option === 'q'){
        console.log("You ended your game. Good Bye!")
   process.exit()}  // will end the game and not the while loop
}

function walk(){
    const random = Math.random();
    if(random > 0.70){
        console.log("Keep on with your travel through THE DEATH FOREST")
    }else{
        console.log(enemies.length + " enemies left to fight!")
        if(enemies.length <=0){
            console.log("You have fought a great fight and killed your enemies. You are safe at last!!!")
            isAlive = false
        }else{
            fightEnemy()
        }
    }
}

// enemy encounter: player get to choose to ether run or attack back
function fightEnemy(){
        let run = Math.random()
        let randomEnemy = enemies[Math.floor(Math.random()* enemies.length)]
        const option3 = readlineSync.keyIn(`${name}, ` + randomEnemy.enemyName + " ,is in your path!!! Do you want to fight back [a] or run away [r]?! ", {limit: ['A', 'R']})
        if(option3 === 'a'){
            attack(randomEnemy)
        }else if(option3 === 'r'){
            runaway(run)
        }
    }


// player attacks the enemy, they ether defeat them or get killed
function attack(randomEnemy){
    console.log(randomEnemy.enemyName + " " + randomEnemy.enemyTreasure)
    const playerLoss = Math.floor(Math.random()* 100)
    const enemyLoss = Math.floor(Math.random()* 100)

    console.log("Your bravery is not paying off. You have lost " + playerLoss+ " of your health points.")
    console.log("There is no room for failure, keep fighting!" + randomEnemy.enemyName + " does not stand a chance againt your will to live! ")
    console.log(`${name}, you put up a great fight and earned ${randomEnemy.enemyTreasure} which is now added to your inventory!`)
    const randomEnemyTreasure = enemies.indexOf(randomEnemy)
    enemies.splice(randomEnemyTreasure, 1) // takes away an enemy from an array when player wins the battle
    inventory.push(randomEnemy.enemyTreasure)

    const option4 = readlineSync.keyIn("You may view your inventory by pressing 'p'. If you want to EXIT the game press 'q' ", {limit: ['P', 'Q']})
    if(option4 === 'p'){
        console.log(inventory)
        console.log("Your will to live is strong, keep walking through THE DEATH FOREST.")
        walk()
    }else if(option4 === 'q'){
        console.log("You have quit the game, GOOD BYE!")
        isAlive = false
    }
}

//player has 50% getting away from the enemy
function runaway(run){
    if(run > 0.50){
        console.log(`${name}, you run fast and you were able to get away!`)
    }else{
        console.log("Your fear has failed you, they cought up to you! You did not die fighting like a true warior!")
        console.log("GAME OVER! GOOD BYE!")
        isAlive = false
    }
}