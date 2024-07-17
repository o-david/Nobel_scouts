function getAnswer(event) {
    // event.preventDefault()
    let q1= document.quiz.q1.value
    let q2= document.quiz.q2.value
    let q3= document.quiz.q3.value
    let score =0
    if(q1==="Abuja"){
        score++
    }
    if(q2==="Blue"){
        score++
    }
    if(q3==="Spaghetti"){
        score++
    }

    alert(`You scored ${score} out of 3`)
}