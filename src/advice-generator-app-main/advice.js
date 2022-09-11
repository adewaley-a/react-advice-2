const quote = document.querySelector(".maintext")
const num = document.querySelector(".fest")
const dicebtn = document.querySelector(".dic")

dicebtn.addEventListener('click', getquote)

function getquote(){
    fetch("https://api.adviceslip.com/advice")
    .then((response) => {return response.json()})
    .then((response) => {
        num.innerHTML = `Advice #${response.slip.id}`
        quote.innerHTML =  `&#8220${response.slip.advice}&#8221`
    })

}
