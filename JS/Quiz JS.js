const container = document.getElementById("quiz-container");
const start = document.getElementById("quiz-start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("quiz-question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("quiz-counter");
const timeGauge = document.getElementById("quiz-timeGauge");
const results = document.getElementById("quiz-resultsContainer");

let questions = [
    {
        question : "What Apeture Should Be Used for Potraits?",
        choiceA : "f1.4 - f5",
        choiceB : "f6-f10",
        choiceC : ">f10",
        correct : "A"
    },

    {
        question : "What is the Most Common Edit Required?",
        choiceA : "Smoothening",
        choiceB : "White Balance",
        choiceC : "Noise-Cancellation",
        correct : "B"
    },

    {
        question : "How Can You Improve the Impact of Your Shot?",
        choiceA : "Take the Shot While Moving",
        choiceB : "Move Further Away",
        choiceC : "Move Closer",
        correct : "C"
    },

    {
        question : "What is the Appropriate Shutter Speed for Photographing Children?",
        choiceA : "1/250",
        choiceB : "1/125",
        choiceC : "1/200",
        correct : "A"
    },

    {
        question : "What Apeture Should Be Used for Scenery?",
        choiceA : "f5-f10",
        choiceB : "f16-f22",
        choiceC : "f10-f16",
        correct : "B"
    },

    {
        question : "What is the Best Investment as a Beginner?",
        choiceA : "100mm f22 lens",
        choiceB : "Extra Battery",
        choiceC : "50mm f1.8 lens",
        correct : "C"
    },

    {
        question : "WHat is the Appropriate ISO for Day-lit Photography?",
        choiceA : "ISO 100-200",
        choiceB : "ISO 500-700",
        choiceC : "ISO 3200+",
        correct : "A"
    },

    {
        question : "What Format Should You Photograph In?",
        choiceA : "PNG",
        choiceB : "RAW",
        choiceC : "JPEG",
        correct : "B"
    },

    {
        question : "What is the Best Source of Light for 'Catchlights'?",
        choiceA : "Dark Room",
        choiceB : "Outdoors",
        choiceC : "An Open Door",
        correct : "C"
    },

    {
        question : "What Apeture is known as the 'Story-Telling' Apeture?",
        choiceA : "f5",
        choiceB : "f16",
        choiceC : "f22",
        correct : "C"
    }
];

const lastQuestion = 9;
let runningQuestion = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let count = questionTime;
let timer;
let score = 0;
let time = 0;
let answers = [];

// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);

function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    timer = setInterval(renderCounter,1000); // 1000ms = 1s
}

function renderCounter() {
    if (count >= 0) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count--;
    }else {
        count = questionTime;
        time += 10;
        score -= 1;
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        }else {
            clearInterval(timer);
            scoreRender();
        }
    }
}

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        score+=2;
    }else {
    score-=1;
    }

    time += (10-count);
    answers.push(answer);
    count = questionTime;

    if (runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else {
    clearInterval(timer);
    scoreRender();
    }
}

function scoreRender() {
    quiz.style.display = "none";
    results.style.display = "block";
    container.style.height = "500px";

    results.innerHTML += "<h3> Score: "+ score + ", Time: " + time +" seconds </h3>";

    for (let i = 1; i < 11; i++) {
        if (answers[i-1] == questions[i-1].correct) {
            results.innerHTML += "<p> Question " + i + ": Correct <p>";
        }else {
            results.innerHTML += "<p> Question " + i + ": Incorrect <p>";
        }
    }

    if (score == 20) {
    container.style.background = "Green";
    }else if (score >= 14) {
        container.style.background = "Cyan";
    }else if (score > 0) {
        container.style.background = "Orange";
    }else {
        container.style.backgroundColor = "Red";
    }
}
