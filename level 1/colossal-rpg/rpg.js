// see note file for ****** Project Requirements ********** 
const readlineSync = require("readline-sync")
let isAlive = true;

const user = readlineSync.question("Before we start, what is your name?  ")
console.log( 'Hi ' + user + '!')
const welcome = readlineSync.question("Welcome to my RPG game. You are about to set out on a journey through THE DEATH FOREST. ")
const name = readlineSync.question("Before we go any further...What would you like to name your player?  ")
//console.log(name)

const random = function(max, min){
    return Math.floor((Math.random()* max)+min)
}

// player information
const player = {
    name: name,
    hp: 50,
    inventory: ["crossbow", "dagger", "axe"]
}

class Player{
    constructor(name= "name",  hp = 50, inventory = []){
        this.name = name,
        this.hp = 50,
        this.inventory = ["crossbow", "dagger", "axe"]   
    }
}
console.log(`${name}, as you travel through the forest you must defend your life agains potential enemies. You are supplied with an inventory of weapons and you will have 100hp.  `)

// enemy information
class Enemy{
    constructor(enemyName, enemyHp, enemyTreasure){
        this.enemyName = enemyName,
        this.enemyHp = enemyHp,
        this.enemyTreasure = enemyTreasure
    }
}

// enemy array, push new enemy into it
const enemies = []
const madara = new Enemy("Madara", 40, "gold")
const itachi = new Enemy("Itachi", 30, "food")
const orochimaru = new Enemy("Orochimaru", 25, "sword")
enemies.push(madara, itachi, orochimaru)
//console.log(enemies)

// player gets to choose between walking, printing an inventory or to exit the game.
while(isAlive){
    const option = readlineSync.keyIn("You are all set up for your journey, please make your selection: 'w' if you want to Walk, 'p' to print your Inventory, or 'q' to Exit the game.  ")
    if(option === 'w'){
        walk()
    }else if (option === 'p'){
        inventory()
    }else if(option === 'q'){
        isAlive = false
        console.log("You ended your game. Good Bye!")
    }
}

// random enemy selector function
function randomEnemy(){
    const enemyEncounter = enemies[Math.floor(Math.random()* enemies.length)]
}

// when enemy is defeated player gets a prize
function enemyTreasure(){
    const prize = ["gold", "food", "sword"]
    const randomPrize = randomPrize(0,2) // 1 out of 3 prizes available 
    const newPrize = prize[randomPrize]
    playerInfo.inventory.push(newPrize) 
    return newPrize
}

// player option functions: walk, print inventory, fight if enemy encountered
function inventory(){
    console.log(player);
    walk()
}

// walk function, in instance of enemy encounter player can choose to fight or run, else print inventory
function walk(){
    const attackOrWalk = Math.random() * 100;
    if(attackOrWalk <= 33){
        randomEnemy();
        console.log(enemyEncounter.enemyName, 'has attacked you!');
        const fightOrRun = readlineSync.keyIn(`${name} your life is in danger! If you choose to defend yourself pick 'F' to fight or 'R' if you want to run like a coward!  `);
        if(fightOrRun === 'f'){
            fight();
        }else if(fightOrRun === 'r'){
            run(); 
        }
    }else {
        const travelOn =readlineSync.keyIn("You are a lucky bastard! You are yet to see another day of travel. To keep walking press 'w', to see your inventory status press 'p'  ");
        if(travelOn === 'p'){
            inventory();
        }
    }
}

// fight and run functions 
function fight(){

}

function run(){
    
}