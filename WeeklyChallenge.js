//Create a console application using what you have learned so far

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}
function doesHaveWord(sentence, userWord){
    let hasWord = false;
    hasWord = sentence.includes(userWord);
    return hasWord;
}
function countOccurences(sentence, userWord){
    let count = 0;
    let startIndex = 0;
    while(true){
        let indexOfSearchTerm = sentence.toLowerCase().indexOf(userWord, startIndex);
        if(indexOfSearchTerm == -1){
            break;
        }
        count++;
        startIndex = indexOfSearchTerm + 1;
    }
    return count;
}

async function Program() {
    // Your Code Here...
    let quizQuestions = [{
        question: "In what country was Heath Ledger Born? ", //Celebrity
        answer: "Australia"
    },{
        question: "What state of Australia is the Big Banana in? ", //Geography
        answer:"New South Wales",
        answer2: "NSW"
    },{
        question: "Is the recepie for Banana Cake and Banana Bread the same recepie? ", //Food
        answer: "Yes"
    },{
        question: "What year did the Sydney Harbour Bridge Open? ", // History
        answer: "1932"
    }]

    //Welcome to Trivia Quiz
    while(true){
        //list options
        console.log("Welcome to Steph's Trivia");
        console.log("Please select one of the below options: ")
        console.log("[1] Celebrity Question");
        console.log("[2] Geography Question");
        console.log("[3] Food Question");
        console.log("[4] History Question");
        console.log("[5] Add a new Question to the Data Bank")
        console.log("[6] Show off String Extension knowlege")
        console.log("[7] Exit")
        //ask for user input
        let userInput = await askQuestion("Select an option from above: ");
        console.log(); // will print an empty line on the screen
        if( userInput == "1"){
            //Celebrity Question
            console.log("You have selected the Celebrity Question: ");
            let userAnswer = await askQuestion(quizQuestions[0].question);
            if (userAnswer.toLowerCase() == quizQuestions[0].answer.toLowerCase()){
                console.log("Your answer is correct");
                console.log();
                continue;
            } 
              console.log(`Your answer was not correct. The correct answer was ${quizQuestions[0].answer}`);
              console.log();
        
        } else if( userInput == "2"){
            //Geography Question
            console.log("You have selected the Geography Question: ");
            let userAnswer = await askQuestion(quizQuestions[1].question);
            if (userAnswer.toLowerCase() == quizQuestions[1].answer.toLowerCase() || userAnswer.toLowerCase() == quizQuestions[1].answer2.toLowerCase()) {
                console.log("Your answer is correct");
                consple.log();
                continue;
            } 
              console.log(`Your answer was not correct. The correct answer was ${quizQuestions[1].answer}`);
              console.log();
        } else if( userInput == "3"){
            //Food Question
            console.log("You have selected the Food Question: ");
            let userAnswer = await askQuestion(quizQuestions[2].question);
            if (userAnswer.toLowerCase() == quizQuestions[2].answer.toLowerCase()){
                console.log("Your answer is correct");
                console.log();
                continue;
            } 
              console.log(`Your answer was not correct. The correct answer was ${quizQuestions[2].answer}`);
              console.log();
        } else if( userInput == "4"){
            //History Question
            console.log("You have selected the History Question: ");
            let userAnswer = await askQuestion(quizQuestions[3].question);
            if (userAnswer.toLowerCase() == quizQuestions[3].answer.toLowerCase()){
                console.log("Your answer is correct");
                console.log();
                continue;
            } 
              console.log(`Your answer was not correct. The correct answer was ${quizQuestions[3].answer}`);
              console.log();
        } else if( userInput == "5"){
            //New Question
            console.log("You have selected to add a new question to the Data Bank: ");

            let userQuestion = await askQuestion("What question would you like to add? ");
            let userAnswer = await askQuestion("What is the answer to your trivia questions?");
            quizQuestions.push({question: userQuestion, answer: userAnswer});
            console.log();
            console.log(`The question that you asked was: ${quizQuestions[4].question}`);
            console.log(`The answser you provided to your question was ${quizQuestions[4].answer}`);
            let userResponse = await askQuestion("Is this correct [Yes or No]? ");
            if (userResponse.toLowerCase() != "yes")
            {
                quizQuestions.pop();
                console.log("The question and answer have been removed from the database");
                console.log();
            } else{
                console.log("Thank you for the new question");
                console.log();
            }
        } else if ( userInput == "6") {
            //String extension show off
            let userString = await askQuestion("Please type in a sentence for us to analyse: ");
            let userWord = await askQuestion("Please type in a word that you wish for us to search for in your sentence: ");
            console.log();
            if (doesHaveWord(userString, userWord) == true){
                console.log(`The sentence that you typed in does indeed contain the word ${userWord}`);
                console.log(`That word appeared ${countOccurences(userString, userWord)} times`);
                console.log();
            } else {
                console.log("Sorry, that word does not appear in your sentence");
                console.log();
            }

        } else if( userInput == "7"){
            //exit
            console.log("You have chosen to leave. Goodbye");
            break;
        } else{
            //error couldnt read input
            console.log("Error: Please enter a number 1 - 6");
        }
    }
}

Program().then(() => {
    process.exit(0);
});