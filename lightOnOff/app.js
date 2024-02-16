
const Offimg = document.querySelector(".Offimg");
const Onimg = document.querySelector(".Onimg");
const onBtn = document.querySelector(".onbtn");
const head =document.querySelector(".heading")
const offBtn = document.querySelector(".offbtn");


const onbulb = () =>{
    Onimg.classList.remove("hide");
    Offimg.classList.add("hide");
    head.innerText =`Can you turn the light off ?`
}
onBtn.addEventListener("click", onbulb);


const offbulb = () =>{
    Onimg.classList.add("hide");
    Offimg.classList.remove("hide");
    head.innerText =`Can you turn the light on ?`
}
offBtn.addEventListener("click", offbulb);
