

/* QUIZ KE QUESTION YAHA SE START HOTA HAI */

const quizDB = [
    /* these are questions and options and yes you can change it */
    {
        question:" Which country won the 2014 FIFA world cup?",
        a: "Spain",
        b: "Netherlands",
        c: "Germany",
        d: "Argentina", 
        ans:"ans3",
    },
    
    {
        question: "Which player won the 2019 Ballon d'Or ?",
        a:"Cristiano Ronaldo",
        b:"Lionel Messi",
        c:"Kevin Debruyne",
        d:"Luka Modrić",
        ans:"ans2",
    },


    {
        question: "Who won FIFA player of the year 2020?",
        a:"Cristiano Ronaldo",
        b:"Lionel Messi",
        c:"Kylian Mbappe",
        d:"Robert Lewandowski",
        ans:"ans4",
    },


    {
        question: "Which player won the 2018 Golden Boot ?",
        a:"Robert Lewandowski",
        b:"Harry Kane",
        c:"Calcum Hudson-Odoi",
        d:"Cristiano Ronaldo",
        ans:"ans2",
    },

    {
        question: "Which player won the 2010 Golden Glove?",
        a:"Iker Casillas",
        b:"Gianluigi Buffon",
        c:"Manuel Neuer",
        d:"Thibaut Courtois",
        ans:"ans1",
    },

    {
        question: "Who won The Best FIFA Men's Coach of the year 2017 award ?",
        a:"Jürgen Klopp",
        b:"Zinedine Zidane",
        c:"Pep Guardiola",
        d:"José Mourinho",
        ans:"ans2",
    },
    
    {
        question: "Who won The Best FIFA Women's Player award in the year 2019 ?",
        a:"Megan Rapinoe",
        b:"Carli Lloyd",
        c:"Alex Morgan",
        d:"Lieke Martens",
        ans:"ans1",
    },


    {
        question: "Which player won the UEFA Women's Player of the Year Award in the year 2020?",
        a:"Pernille Harder",
        b:"Lieke Martens ",
        c:"Ada Hegerberg",
        d:"Lotta Schelin",
        ans:"ans1",
    },


    {
        question: "Which club won the most UEFA Champion League titles ?",
        a:"FC Bayern Munich",
        b:"FC Barcelona",
        c:"Real Madrid C.F.",
        d:"Juventus",
        ans:"ans3",
    },

    {
        question: "Which club won the 2015 Premier League Title?",
        a:"Manchester United F.C. ",
        b:"Leicester City F.C. ",
        c:"Chelsea F.C.",
        d:"Liverpool F.C.",
        ans:"ans2",
    },

    {
        question: " Which club has won the highest number of Premier League titles ?",
        a:"Manchester United F.C.",
        b:"Arsenal F.C.",
        c:"Chelsea F.C.",
        d:"Manchester City F.C.",
        ans:"ans1",
    },
    
    {
        question: "Which player won the UEFA Men's Player of the Year award for the year 2016 ?",
        a:" Lionel Messi",
        b:" Cristiano Ronaldo",
        c:"Andrés Iniesta",
        d:" Luka Modrić",
        ans:"ans2",
    },


    {
        question: "Which player won the FIFA Best Player for the year 2008?",
        a:"Ricardo Kaká",
        b:"Cristiano Ronaldo",
        c:"Lionel Messi",
        d:" Andrés Iniesta",
        ans:"ans2",
    },


    {
        question: "Which player won the 2006 Golden Glove?",
        a:"Gianluigi Buffon",
        b:" Oliver Kahn",
        c:"Fabien Barthez",
        d:"Iker Casillas",
        ans:"ans1",
    },

    {
        question: "Which player won the Portuguese Golden Ball for the year 2011?",
        a:"Radamel Falcao",
        b:"James Rodríguez",
        c:"Cristiano Ronaldo",
        d:"Ricardo Quaresma",
        ans:"ans1",
    },

    {
        question: "Which country won the Copa América in the year 2015??",
        a:"Argentina",
        b:"Brazil",
        c:"Chile",
        d:"Peru",
        ans:"ans3",
    },
    
    {
        question: "Which club won the title for the Copa del Rey for the year 2019-2020?",
        a:"Real Madrid F.C.",
        b:" F.C Barcelona",
        c:"Real Socieadad",
        d:"Sevilla FC",
        ans:"ans3",
    },


    {
        question: "Who won the La Liga title in the year 2020?",
        a:"Real Madrid F.C.",
        b:"F.C Barcelona",
        c:"Sevilla FC",
        d:"Atletico Madrid",
        ans:"ans1",
    },


    {
        question: "Who won the most consecutive UEFA Champions League matches ?",
        a:"Real Madrid F.C.",
        b:"F.C Bayern Munich",
        c:"Manchester United F.C.",
        d:"F.C Barcelona",
        ans:"ans2",
    },

    {
        question: " Which player holds the record for scoring the highest number of goals in the UEFA Champions League?",
        a:"Cristiano Ronaldo",
        b:"Lionel Messi",
        c:"Pelé",
        d:"Diego Maradona",
        ans:"ans1",
    },

    {
        question: "When was the last time Chelsea football won the UEFA Champions League title ?",
        a:"2008",
        b:"2015",
        c:"2012",
        d:"2014",
        ans:"ans3",
    },
 

]

const question = document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');

const submit=document.querySelector('#submit');

const answers =  document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score=0;

const loadQuestion =()=>{
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer =() =>{

    let answer;

    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });

    return answer;
};

const deselectAll = () =>{
    answers.forEach((curAnsElem)=> curAnsElem.checked=false);

}

submit.addEventListener('click',() =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer)
    
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML= `
        <h3> you score ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()">play again</button>

        `;

        showScore.classList.remove('scoreArea');
    }
});