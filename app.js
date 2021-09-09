const correctAnswers = ['B','B','B','B']
console.log(correctAnswers)
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')
console.log(form)
console.log(result)

form.addEventListener('submit', e=>{
    e.preventDefault()
    let score = 0
    const userAnsers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    console.log(userAnsers)
    userAnsers.forEach((answer, index) => {
        console.log(`answer is ${answer} for index ${index}`)
        if( answer == correctAnswers[index]){
            score += 25
        }
    })
    scrollTo(0,0)
    result.querySelector('span').textContent = `${score}%`
    result.classList.remove('d-none')
    console.log(score)

    let output = 0
    const timer = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`
        if( output === score ){
            clearInterval(timer)
        }
        output++ 
    },10)
})

const timer = setInterval(()=>{
}, 500)
