const readlineSync = require('readline-sync');

const num1 = readlineSync.question('Please enter your fist number: ');
const num2 = readlineSync.question('Please enter your second number: ');
const operation = readlineSync.question('Please enter the operation to perform: add, sub, mul, div: ');

// switch statement to perfom operation based on user input
switch (operation){
    case "add":
        console.log("The result is: " + Number(num1 + num2));
        break;

    case "sub":
        console.log("The result is: " + Number(num1 - num2));
        break; 

    case "mul":
        console.log("The result is: " + Number(num1 * num2));
        break;

    case "div":
        console.log("The result is: " + Number(num1 / num2));
        break;
}       