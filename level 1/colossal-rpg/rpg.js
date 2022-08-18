// see note file for ****** Project Requirements **********

// Intro: get users name and welcome them to the game. 
const readlineSync = require("readline-sync")
const userName = readlineSync.question("HELLO GAMER! What's your name? ")
const welcome = readlineSync.question(`Welcome ${userName}! You are about to enter The Forest of Death. \n As you travel through the dark, deep forest you'll have to defend your life from potential enemies. \n Die trying if you want to make it out alive! \n ****** KEEP YOUR TAIL SHARP! GOOD LUCK!!! ******`)

// set up enemies and inventory. 
