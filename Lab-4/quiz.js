// Quiz questions
const quizQuestions = [
    {
        question: "What is the capital of India?",
        answer: "delhi"
    },
    {
        question: "Which language runs in a web browser?",
        answer: "javascript"
    },
    {
        question: "What keyword is used to declare a variable in JavaScript?",
        answer: "let"
    },
    {
        question: "What does HTML stand for?",
        answer: "hypertext markup language"
    },
    {
        question: "What symbol is used for comments in JavaScript (single-line)?",
        answer: "//"
    }
];

// Function to Run the Quiz
function runQuiz() {
    let score = 0; 

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);

        
        if (userAnswer === null) {
            alert("Quiz cancelled!");
            return;
        }

       
        userAnswer = userAnswer.toLowerCase().trim();

        
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct! ");
        } else {
            alert(`Wrong \nCorrect answer: ${quizQuestions[i].answer}`);
        }
    }

    
    alert(`Quiz Completed!\nYour Score: ${score} / ${quizQuestions.length}`);
}


runQuiz();