// import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'

// import { handleErrors, quiz } from '../../api'
// import messages from '../../messages'
// import apiUrl from '../../../apiConfig'


const questions = [
    {
        question: "What is 10 + 10 ?",
        options: ["8", "28", "30", "20"],
        answer: "20"
    },
    {
        question: "What color is the sky ?",
        options: ["Blue", "Orange", "Purple", "Yellow"],
        answer: "Blue"
    },
    {
        question: "What is infinity ?",
        options: ["God", "Never Ending", "Pee Wee", "Gomer Pyle"],
        answer: "Never Ending"
    }
];

let question_number = 0;

let correct = 0;

document.addEventListener("DOMContentLoaded", () => {
    load_question();
});

function load_question() {
    document.querySelector("#question").innerHTML = questions[question_number].question;
    const options = document.querySelector("#options");
    options.innerHTML = "";
    for (const option of questions[question_number].options) {
        options.innerHTML += `<button class="option">${option}</button>`;
        // console.log(option);
    }

    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {
            // alert("You clicked Something !");
            alert(option.textContent);
        }
    });
}


// export default withRouter(quiz)
