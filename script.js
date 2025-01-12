const alternatives = [
    {text: "", images: "IMAGES/mee.png"},
    {text: "I promise it will be unforgettable", images: "IMAGES/cat-02.gif"},
    {text: "Think again", images: "IMAGES/cat-03.gif"},
    {text: "Come on, dare to say yes", images: "IMAGES/cat-04.gif"},
    {text: "Don't let fear stop you", images: "IMAGES/cat-05.gif"},
];
const ohyes = {text: "I knew you would accept", images: "IMAGES/cat-yes1.png"};
const cat = document.querySelector('.cat');
const text = document.querySelector('.text');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');

let count = 0;
  
  function updateDisplay(item){
    cat.src = item.images
    text.innerHTML = item.text
  }
  
  errorButton.addEventListener('click', ()=>{
    count = 0;
    updateDisplay(alternatives[count])
    buttons.forEach(btn => btn.style.display = 'inline-block')
    errorButton.style.display = 'none'
  })
  
  buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        if(button.textContent == "Yes"){
            updateDisplay(ohyes)
            buttons.forEach(btn => btn.style.display = 'none')
        }
        if(button.textContent == 'No'){
            count++
            if(count < alternatives.length){
                updateDisplay(alternatives[count])
            }else{
                buttons.forEach(btn => btn.style.display = 'none')
                errorButton.style.display = 'inline-block'
            }
        }
    })
  })
