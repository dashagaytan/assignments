let readline = require('readline-sync');
let input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
let shift = parseInt(readline.question('How many letters would you like to shift? '));
let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

//mapping over input in an array
const cipher = input.split('').map(char => {
    if(alphabet.includes(char)){
        //loop back around the aphabet when reaches index of z
        let index = (alphabet.indexOf(char) + shift) %26
        return alphabet[index]
    }else{
        return char;
    }
})

console.log(`Your cipher text is: ${cipher.join('')}`)
