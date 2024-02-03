const start_btn = document.querySelector(".start_btn");
const info_box = document.querySelector(".info_box");
const quit_quiz = document.querySelector(".quit");
const start_quiz = document.querySelector(".restart");
const quiz_box = document.querySelector(".quiz_box");

start_btn.addEventListener('click', (event) =>{
    info_box.classList.add('activeInfo');
});

quit_quiz.addEventListener('click', (event) =>{
    info_box.classList.remove('activeInfo');
});

start_quiz.addEventListener('click', (event) =>{
    info_box.classList.remove('activeInfo');
    quiz_box.classList.add('activeQuiz');
    showQuestion(0);
});

function showQuestion(index){
    let que_text = document.querySelector(".que_text");
    let option_list = document.querySelector(".option_list");

    que_text.innerHTML = "<span>" + questions[index].numb + '. ' + questions[index].question + "</span>";

    let hold_options ="";

        hold_options += '<div class="option"><span>' + questions[index].options[i] + '</span></div>';

      }

    option_list.innerHTML = hold_options;
