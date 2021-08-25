// importing libraries
var readlineSync=require('readline-sync');
var chalk = require('chalk');

// 1st Message 
console.log(chalk.red(`Welcome to the Basics of JS QUIZ
Give Correct Answers to gain Points. All the best!!
`))

// Getting name of the user
var userName=readlineSync.question(`What's your name? `);
console.log(chalk.green(`Okay, ${userName} lets begin `))

// Initial value for keeping the score
var score = 0;

// List of Questions as an array of objects
var questionList=[
  {
    question:"Who developed Javascript?",
    options:['Brandon Eich','Linus Trovalds','Dennis Ritchie','Papa ki Pari'],
    answer:"Brandon Eich"
  },
  {
    question:"When was JavaScript developed?",
    options:['1988','1997','1992','1995'],
    answer:'1995'
  },
  {
    question:"Is JavaScript interpreted or compiled",
    options:['interpreted' ,'Compiled', 'programming language'],
    answer:"interpreted"
  },
  {
    question:"Where can we use JavaScript?",
    options:['Clinet', 'Server', 'Native', 'All of the above'],
    answer:"All of the above"
  },
  {
    question:"Which is not a paradigm of JS",
    options:['Imperative', 'Procedural', 'Functional', 'Object-oriented','Prototpical Inheritance', 'multi-line-comments'],
    answer:"multi-line-comments"
  }
];



// function to perform operations

function play(question,answer,options){

  var useranswer= options[readlineSync.keyInSelect(options,question)];

  if(useranswer===answer){
    console.log(chalk.bgRed(`Bingo It's correct 🥳 `));
    score += 1;
    console.log(chalk.yellowBright(`Your score is ${score}`))
   
  }  else{
        console.log(chalk.bgGray(`Oh No!!! It's incorrect 😭`));
  }
  console.log(`📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝📝
  `)
}



// Iterate through Array of Objects 
for(let i=0;i<questionList.length;i++){
  play(questionList[i].question,questionList[i].answer,questionList[i].options);
}

// print the score
console.log(`Your overall score is ${score}`)
console.log(`

`)

// hall of Fame
hallOfFame = [
    {
        username: "Vegeta",
        point: 5
    },
    {
        username: "Goku",
        point: 5
    },
    {
        username: "MimiKyu",
        point: 4
    }
   
];

// Displaying hall of Fame
console.log(chalk.bgBlueBright(" High Score Achievers "));

console.table(hallOfFame);

if(score >=5) {
    console.log("You have made it to the hall of Fame")
    hallOfFame = [
        {
            username: "Vegeta",
            point: 5
        },
        {
            username: "Goku",
            point: 5
        },
        {
            username: userName,
            point: 5
        },
        {
            username: "MimiKyu",
            point: 4
        }
       
    ];    

    console.table(hallOfFame)
}
