//1
function printFirst(arr){
console.log(arr[0])
}

printFirst([3,12,7,14]);
printFirst(['a', 'b', 'c']);

//2
function printLast(arr) {
    let lastIndex = arr.length - 1;
    console.log(arr[lastIndex]);
}

//3
function upgradedPrintFirst(arr){
    let arrayLength = arr.length;
    if (arrayLength == 0){
        console.log('Empty array')
    } else {
        console.log(arr[0])
    }
}

upgradedPrintFirst([3,12,7,14]);
upgradedPrintFirst(['a', 'b', 'c']);
upgradedPrintFirst([]);

function upgradedPrintLast(arr) {
    let arrayLength = arr.length;
    if (arrayLength == 0) {
        console.log('Empty array')
    } else {
        let lastIndex = arr.length - 1;
        console.log(arr[lastIndex]);
    }
}
upgradedPrintLast([3,12,7,14]);
upgradedPrintLast(['a', 'b', 'c']) ;
upgradedPrintLast([]);

//4
function reverseArray(arr){
    let lastIndex = arr.length-1;
    for (let i=lastIndex; i>=0; i--){
        console.log(arr[i])
    }
}

reverseArray([20, 10, 5, 1]);
reverseArray(['a', 'b', 'c', 'd', 'e']);

//5
function everyThird(arr){
    for (let i = 2; i<arr.length; i=i+3){
        console.log(arr[i])
    }
}

everyThird([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]);

//6
function everySecond(arr) {
    for (let i = 2; i < arr.length; i = i + 2) {
        console.log(arr[i])
    }
}

everySecond([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]);

//7
function biggerThanFour(arr){
    for (let i =0; i<arr.length; i++){
        let item = arr[i];
        if (item > 4){
            console.log(item);
        }
    }
}

biggerThanFour([-10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]);

//8
function biggerThanNum(arr, num){
    for (let i =0; i<arr.length; i++){
        let item = arr[i];
        if (item > num){
            console.log(item);
        }
    }
}

biggerThanNum([-10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60], 20);