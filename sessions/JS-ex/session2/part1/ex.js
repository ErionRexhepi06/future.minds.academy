let age = 19;
console.log("E shenove: " + age);

age = 10;
console.log("E shenove: " + age);

/*
let userInput = prompt('Write something below');

console.log(`E ke shkru: ${userInput}`);
*/

console.log("--------------------------");

console.log("---Operators---");

let numberOne = parseInt(prompt("Write your first number"));
let numberTwo = parseInt(prompt("Write your second number"));

console.log("THANK YOU FOR COOPERATING WITH ME");

if (numberOne < numberTwo) {
    alert("Please type a number smaller than: " + numberOne);
    numberTwo = parseInt(prompt("Write your second number: "));
}

    let sum = numberOne + numberTwo;
    let subtract = numberOne - numberTwo;
    let multiply = numberOne * numberTwo;
    let divide = numberOne / numberTwo;

    console.log("shuma eshte: " + sum);
    console.log("zbritja eshte: " + subtract);
    console.log("shumezimi eshte: " + multiply);
    console.log("pjestimi eshte: " + divide);