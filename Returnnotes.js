//Parameters are placeholder variables that allow us to reuse functions

// Example 1: Without Parameter
function printYes(){
    console.log('yes');
}

printYes();
printYes();

//Example 2: With parameter
function printText(text){ //one parameter called text
    console.log(text);
}

printText("poyo");
printText("poyo :D");

//Return statements provide values to the rest of the program
//Returned values can be used by other parts of the code
//console.log only produces "side effects" that cannot be used by other parts of the code

//Example 3: With side effects (no return)

function double(num){
    console.log(num*2);
}

double(3);

//Example 4: Using return

function triple(num){
    return (num*3);
}

// console.log(triple(5));
let answer = triple(12);
answer -=2;
console.log(answer);

//Example 5: Another return

function loselife(lives) {
    return (lives - 1);
}

let totallives = 10;
totallives = loselife(totallives);
console.log(totallives);

//Scope is the part of the program where the binding (value of a variable) is visible.
//global scope: created outside all {} and accessible everywhere
//local scope: created inside a specific {} and only accessible inside that {}

//Example 6: Different scopes

let x=10; //global x

if (true){
    let y=20; //local y
    let z= 30; //local z
    console.log(x + y + z);
}

console.log(x); //y and z are not accessible outside the {} where they were created

//Example 7: no naming conflict

function half(n){ //local n
    return (n/2);
}

let n=10; //global n
console.log(half(100)); //go to the half function and use THAT n.
console.log(n); //since there is no direction to go to {}, use the global n