const readlineSync = require("readline-sync");

let result;

const num1 = readlineSync.question('Please enter your fist number: ');

const num2 = readlineSync.queston('Please enter your second number: ');

const operation = readlineSync.question('Please enter the operation to perform: add, sub, mul, div  ');

switch (operation){
    case "add":
        result = num1 + num2;
        console.log("The result is: " + `${num1} + ${num2} = ${result}`);
        break;

    case "sub":
        result = num1 - num2;
        console.log("The result is: " + `${num1} - ${num2} = ${result}`);
        break;   

    case "mul":
        result = num1 * num2;
        console.log("The result is: " + `${num1} * ${num2} = ${result}`);
        break;

    case "div":
        result = num1 / num2;
        console.log("The result is: " + `${num1} / ${num2} = ${result}`);
        break;  

    default:
        console.log("Invalid input");
        break;
}


