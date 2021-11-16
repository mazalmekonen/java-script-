const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const url = new URL(window.location.href);

let userName = document.getElementById('userName');
let userEmail = document.getElementById('userEmail');
let historyResults = document.getElementById('history');

userName.innerHTML = url.searchParams.get("fullName")
userEmail.innerHTML = url.searchParams.get("email") 
historyResults.innerHTML = url.searchParams.get("history")
historyResults.innerHTML = historyResults.innerHTML.replaceAll(',','\n')

let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let operator;

const historyContainer = document.getElementById('historyContainer');
let stringToInsert;
for(let i = 0; i < historyResults.innerHTML.split("\n").length  ; i ++){
  stringToInsert = historyResults.innerHTML.split('\n')[i];
  var node = document.createElement("li");                
  node.innerHTML = stringToInsert;
  historyContainer.appendChild(node)
}

const operationButtons = document.querySelectorAll('[data-operation]')

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.innerText
    })
  })

  let mailIt = document.getElementById('mailIt');
  let whatsappIt = document.getElementById('whatsappIt');

  mailIt.addEventListener('click', (event) => {
      if(number1.value && number2.value && operator){
    mailIt.setAttribute('href', 
    'mailto:?subject=file:///C:/finalTest%20October21/calculator/calculator.html?number1=' + number1.value + '?operator=' + operator + '?number2=' + number2.value)
  }
})

    whatsappIt.addEventListener('click', (event) => {
        if(number1.value && number2.value && operator){
        whatsappIt.setAttribute('href', 
        'https://wa.me/?text=file:///C:/finalTest%20October21/calculator/calculator.html?number1=' + number1.value + '?operator=' + operator + '?number2=' + number2.value)
        }
    })
