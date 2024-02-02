const questions = [
    {
        question:"Which is the largest animal in the world",
        answer:[
            { text:'Shark', correct: false},
            { text:'Blue Whale', correct: true},
            { text:'Elephant', correct: false},
            { text:'Giraffe', correct: false},
            
        ]
    },
    {
        question:"Which is the Smallest country in the world",
        answer:[
            { text:'Vatican City', correct: true},
            { text:'Bhutan', correct: false},
            { text:'Nepal', correct: false},
            { text:'Srilanka', correct: false},
            
        ] 
    },
    {
    question:"Which is the largest Desert in the world",
    answer:[
        { text:'Kalahari', correct: false},
        { text:'Gopi', correct: false},
        { text:'Sahara', correct: false},
        { text:'Antarctica', correct: true},
        
    ]
},
{
    question:"Which is the Smallest Continent in the world",
    answer:[
        { text:'Asia', correct: false},
        { text:'Australia', correct: true},
        { text:'Arctic', correct: false},
        { text:'Africa', correct: false},
        
    ]
}
];


const questionElement = document.getElementById('question');
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score =0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState()   
     let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1 ;
    questionElement.innerHTML = questionNo+ ". " + currentQuestion. question;

    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct= answer.correct;
        }
        button.addEventListener("click", seleteAnswer)
    });
}

function resetState(){
    nextButton.style.display="none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}


function seleteAnswer(e){
    const seletedBtn =e.target;
    const isCorrect = seletedBtn.dataset.correct === "true";
    if(isCorrect){
        seletedBtn.classList.add("correct")
        score++;
    }else{
        seletedBtn.classList.add('incorrect')
    }

    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display="block"
}


function showScore(){
    resetState();
    questionElement.innerHTML =`You scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block"
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz()
    }
})
startQuiz();