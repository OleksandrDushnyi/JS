const questions = [
    {
        question: "Which is larget animal in the world?",
        answers: [
            {text: "Shark", correect: false},
            {text: "Blue whale", correect: true},
            {text: "Elephant", correect: false},
            {text: "Giraffe", correect: false},

        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correect: false},
            {text: "Australia", correect: true},
            {text: "Artic", correect: false},
            {text: "Africa", correect: false},

        ]  
    },
    {
    question: "Which is the largest desert in the world?",
    answers: [
        {text: "Kalahari", correect: false},
        {text: "Gobi", correect: false},
        {text: "Sahara", correect: false},
        {text: "Antarctica", correect: true},
       ]
    }
]

const questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButton.appendChild(button)
        if(answer.correect){
            button.dataset.correect = answer.correect
        }
        button.addEventListener("click", selectAnswer)
    })

}
function resetState(){
    nextButton.style.display = "none"
    while(answerButton.firstChild)
    answerButton.removeChild(answerButton.firstChild)
}

function selectAnswer(e){
    const selectBtn = e.target
    const isCorrect = selectBtn.dataset.correect === "true"
    if (isCorrect) {
        selectBtn.classList.add("correct")
        score++
    } else {
        selectBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correect === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextButton.style.display = "block"
}

function showScore() {
    resetState()
    questionElement.innerHTML = `You score ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}

function handleNextButton() {
     currentQuestionIndex++
     if (currentQuestionIndex < questions.length) {
        showQuestion()
     } else {
        showScore()
     }
}

nextButton.addEventListener("click",() => {
    if(currentQuestionIndex < questions.length){
    handleNextButton()
    }else{
        startQuiz()
    }
})

startQuiz()