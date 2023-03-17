const readline= require('readline-sync');
//Name Swapper
// function nameSwapper() {
//     let first = readline.question("first name:");
//     let last = readline.question("last name:");
// return (`${last}, ${first}`)
// }
// console.log(nameSwapper());

// function numGen() {
//     let digit1 = readline.question("Enter the first number between 0-9:");
//     let digit2 = readline.question("Enter the second number between 0-9:");
//     return (`Your number is ${digit1}${digit2}`)
// }
// console.log(numGen());

function averagetemperature() {
    let temp1 = Number(readline.question("Enter a temperature for Monday: "));
    let temp2 = Number(readline.question("Enter a temperature for Tuesday: "));
    let temp3 = Number(readline.question("Enter a temperature for Wednesday: "));
    let temp4 = Number(readline.question("Enter a temperature for Thursday: "));
    let temp5 = Number(readline.question("Enter a temperature for Friday: "));
    let temp6 = Number(readline.question("Enter a temperature for Saturday: "));
    let temp7 = Number(readline.question("Enter a temperature for Sunday: "));

    let total = (temp1 + temp2 + temp3 + temp4 + temp5 + temp6 + temp7) / 7
    return (total.toFixed(2));

}
console.log(averagetemperature())