const readline= require('readline-sync');

let answerList = ['yes', 'no', 'maybe', 'most likely', 'most likely not', 'perhaps', '100% certain', 'negative', 'to be determined', 'try again', 'outcome is not looking good'  ];

readline.question('Write a question for the 8 ball to answer:');
let randomNum = Math.floor(Math.random()*answerList.length);
let randomAnswer = answerList[randomNum];
console.log(randomAnswer);