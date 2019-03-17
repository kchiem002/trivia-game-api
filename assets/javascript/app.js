let questionsCorrect
let questionsWrong
let questionsUnanswered


const startGame = _ => {
    console.log("Start Game")
    fetch ('https://opentdb.com/api.php?amount=15&category=11&difficulty=medium&type=multiple')
        .then (r => r.json())
        .then (r => {
            let correctAnswer = r.results[0].correct_answer
            console.log(r.results)
            console.log(r.results[0].correct_answer)
            // let btn = document.createElement('div')
            document.querySelector('#question').innerHTML = `<h2>${r.results[0].question}</h2>`
            document.querySelector('#answers').innerHTML = `${r.results[0].correct_answer}`
            document.querySelector('#answers').innerHTML = `<p>${r.results[0].incorrect_answers}</p>`
            document.querySelector('#answers').innerHTML = `<p>${r.results[1].incorrect_answers}</p>`
            document.querySelector('#answers').innerHTML = `<p>${r.results[2].incorrect_answers}</p>`
        })
}
