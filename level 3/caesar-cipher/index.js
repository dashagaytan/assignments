let readline = require('readline-sync');
let input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
let shift = parseInt(readline.question('How many letters would you like to shift? '));
let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

//mapping over input in an array
const cipher = input.split('').map(char => {
    if(alphabet.includes(char)){
        let index = (alphabet.indexOf(cahr) + shift) %26
        return alphabet[index]
    }else{
        return char;
    }
})

console.log(`Secret message is: ${cipher}`)
