let currentVal = '';
let buttons = document.querySelectorAll(".btn");
let answerVal = document.querySelector("#displayAns");

buttons.forEach(button =>{
    button.addEventListener("click" ,()=>{
        let btnText = button.innerText 
        
        if(btnText == 'C'){
            currentVal = '';
            answerVal.value = '';
        }
        else if(btnText === '='){
            answerVal.value = eval(currentVal);
            currentVal = answerVal
        }else{
            answerVal.value += btnText; 
            currentVal += btnText; 
        }
        // console.log(typeof +button.innerText)
    });
});







    
