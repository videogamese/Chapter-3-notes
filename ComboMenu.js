const readLine = require('readline-sync');

let order = [];
let writtenorder = [];
let beveragesize = '';
let ordersum = 0;
let frysize = '';
let ketchupquantity = 0;


//written order stuff
let chickenSandwich = 5.25;
let beefSandwich = 6.25;
let tofuSandwich = 5.75;
let beveragesmall = 1;
let beveragemedium = 1.5;
let beveragelarge = 2;
let smallfriesmega = 2;
let smallfries = 1;
let mediumfries = 1.5;
let largefries = 2;




let sandwichChoice = readLine.question('Do you want a chicken sandwich($5.25), a beef sandwich(6.25), or a tofu sandwich($5.75)?: ');

if (sandwichChoice == 'Chicken' || sandwichChoice == 'chicken') {
    console.log('You ordered a chicken sandwich!');
    order.push(chickenSandwich);
    writtenorder.push('Chicken Sandwich');
} else if (sandwichChoice == 'beef' || sandwichChoice == 'Beef') {
    console.log('You ordered a beef sandwich!');
    order.push(beefSandwich);
    writtenorder.push('Beef Sandwich');
} else if (sandwichChoice == 'tofu' || sandwichChoice == 'Tofu') {
    console.log('You ordered a tofu sandwich!');
    order.push(tofuSandwich);
    writtenorder.push('Tofu Sandwich');
}

let beverageboolean = readLine.question('Would you like a beverage?: ');

if (beverageboolean == 'Yes' || beverageboolean == 'yes' || beverageboolean == 'y') {
    beveragesize = readLine.question('Would you like a small($1.00), medium($1.50), or large soda($2.00)?: ');
    console.log(`You chose a ${beveragesize} size!`);
    if (beveragesize == 'small') {
        order.push(beveragesmall);
        writtenorder.push('small beverage');
    } else if (beveragesize == 'medium') {
        order.push(beveragemedium);
        writtenorder.push('medium beverage');
    } else if (beveragesize == 'large') {
        order.push(beveragelarge);
        writtenorder.push('Large beverage');
    }
}
if (beverageboolean == 'No' || beverageboolean == 'no' || beverageboolean == 'n') {
    console.log(`Ok! You didn't choose a drink.`)
}

let fryselection = readLine.question('Would you like fries?: ');
if (fryselection == 'yes' || fryselection == 'Yes' || fryselection == 'y') {
    frysize = readLine.question('Would you like small ($1.00), medium ($1.50), or large ($2.00)?: ');
    if (frysize == 'small' || frysize == 'Small' || frysize == 's' || frysize == 'S') {
        let smallfriesmegasize = readLine.question('Would you like to mega size?: ');
        if (smallfriesmegasize == 'yes' || smallfriesmegasize == 'Yes' || smallfriesmegasize == 'Y' || smallfriesmegasize == 'y') {
            order.push(smallfriesmega);
            writtenorder.push('Mega-size small fries');
            console.log('You mega-sized your fries and now their price is $2.00 dollars!');
        } else if (smallfriesmegasize == 'no' || smallfriesmegasize == 'No' || smallfriesmegasize == 'N' || smallfriesmegasize == 'n') {
            order.push(smallfries);
            writtenorder.push('Small fries');
            console.log(`You didn't mega-size your fries and their price is $1.00 dollar!`);
        }
    }
    if (frysize == 'medium' || frysize == 'Medium' || frysize == 'm' || frysize == 'M') {
        order.push(mediumfries);
        writtenorder.push('Medium fries');
        console.log(`You ordered medium fries and their price is $1.50 dollars!`);
    }    if (frysize == 'large' || frysize == 'Large' || frysize == 'l' || frysize == 'L') {
        order.push(largefries);
        writtenorder.push('Large fries');
        console.log(`You ordered large fries and their price is $2.00 dollars!`);
    }

} else if (fryselection == 'no' || fryselection == 'No' || fryselection == 'n') {
    console.log('Too bad, you did not order fries.');
}

ketchupquantity = readLine.question('How many ketchup packets do you want?: ');
if (ketchupquantity < 0) {
    ketchupquantity = readLine.question('How many ketchup packets do you want?: ');
}
if (ketchupquantity != 0) {
    let ketchupcost = ketchupquantity*0.25;
    order.push(ketchupcost);
    writtenorder.push(`${ketchupquantity} ketchup packets`);
}

if (fryselection != '' && beverageboolean != '' && sandwichChoice != '') {
    for (let i = 0; i < order.length; i++) {
        ordersum += order[i];
    }
}

if (sandwichChoice == 'y' || sandwichChoice == 'yes' || sandwichChoice == 'Y' || sandwichChoice == 'Yes') {
    if (beverageboolean != 'y' || beverageboolean != 'yes' || beverageboolean != 'Y' || beverageboolean != 'Yes') {
        if (fryselection != 'y' || fryselection != 'yes' || fryselection != 'Y' || fryselection != 'Yes') {
            let coupon = -1;
            order.push(coupon);
        }
    }
}
if (fryselection != '' && beverageboolean != '' && sandwichChoice != '') {
    let tax = ordersum*.07;
    tax = Number(tax.toFixed(2));
    order.push(tax);
    console.log(ordersum+tax);
}

console.log(order);
console.log(writtenorder);