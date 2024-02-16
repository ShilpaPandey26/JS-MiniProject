
const tempLoad = () =>{
    const temp = document.querySelector("#temp");
    const fa = document.querySelector(".fa");
    temp.innerHTML = "&#xf2cb";
   
    setTimeout(()=>{
        temp.innerHTML = "&#xf2cb";
        fa.style.color = "#f8b627";
    },1000);

    setTimeout(()=>{
        temp.innerHTML = "&#xf2ca";
    },2000);

    setTimeout(()=>{
        temp.innerHTML = "&#xf2c9";
    },3000);
    setTimeout(()=>{
        temp.innerHTML = "&#xf2c8";
        fa.style.color = "#d63031";
    },4000);
   
}

tempLoad();

setInterval(tempLoad,5000)