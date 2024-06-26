const quiz = [
    {
        id: 1,
        question: "Qual o shipp top 1 de Allen?",
        answers: [
            { answer: "Wenclar", isCorrect: true },
            { answer: "Sashannarcy", isCorrect: false },
            { answer: "SuleMio", isCorrect: false },
            { answer: "KakeHai", isCorrect: false },
        ],
    },
    {
        id: 2,
        question: "Qual shipp é canon ? REALMENTE?",
        answers: [
            { answer: "Diakko", isCorrect: false },
            { answer: "KuroMaya", isCorrect: false },
            { answer: " CaitVi", isCorrect: true },
            { answer: "Farcillie", isCorrect: false },
        ],
    },
    {
        id: 3,
        question: "Que anime uniu a gente no mundo dos ships?",
        answers: [
            { answer: "Love Live", isCorrect: false },
            { answer: "Citrus", isCorrect: true },
            { answer: "Pókemon", isCorrect: false },
            { answer: "Yagate kimi ni naru", isCorrect: false },
        ],
    },
    {
        id: 4,
        question: "De qual ship foi a metadinha mais bonita que a gente usou ?",
        answers: [
            { answer: "Wenclair", isCorrect: false },
            { answer: "SumiKeke", isCorrect: true },
            { answer: "KuroMaya", isCorrect: false },
            { answer: "Lumity", isCorrect: true },
        ],
    },
]

const gameScreen = document.querySelector(".game")
const resultScreen = document.querySelector(".results")
const question = document.querySelector(".question")
const answersContainer = document.querySelector(".answers")
const submit = document.querySelector(".submit")
const play = document.querySelector(".play")

let qIndex = 0
let correct = 0
let wrong = 0
let selectedAnswers = 0

const showQuestion = (qNumber) => {
    //question na posição index
    selectedAnswers = null
    if (qIndex === quiz.length) return showResult()
    question.textContent = quiz[qNumber].question
    answersContainer.innerHTML = quiz[qNumber].answers.map((item, index) => `
    <div class="answer" >
      <input name="answers"  id="${index}" type="radio" value="${item.isCorrect}">
      <label for="${index}" >${item.answer}</label>
      </div>
    `
    ).join("")
    selectAnswer()
}

const playAgain = () => {
    qIndex = 0;
    correctCount = 0
    wrongCount = 0
    total = 0
    showQuestion(qIndex)
};

const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach(input => {
        console.log();
        input.addEventListener("click", (e) => {
            selectedAnswers = e.target.value
        })
    })

}

const submitAnswer = () => {
    submit.addEventListener("click", () => {
        if (selectedAnswers !== null) {
            selectedAnswers === "true" ? correct++ : wrong++;
            qIndex++;
            showQuestion(qIndex)
        } else {
            alert("Select a answer!")
        }
    })
}

const showResult = () => {
    gameScreen.style.display = 'none'
    resultScreen.style.display = "block"
    resultScreen.querySelector(".correct").textContent = `Correct answers: ${correct}`
    resultScreen.querySelector(".wrong").textContent = `Wrong answers: ${wrong}`
    resultScreen.querySelector(".score").textContent = `Score: ${(correct - wrong) * 10}`
}

play.addEventListener("click", () => {
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain()
})

//Chama o index pois já tem acesso ao quiz, apenas para 'iterar' pelas questões.
showQuestion(qIndex)
submitAnswer()