const counters = document.querySelectorAll(".counter");
counters.forEach((counter)=>{
    counter.innerText = 0;
  const updateCounter = () =>{
     const targetCount = +counter.getAttribute('data-target');
      const startingCount =  Number(counter.innerText);
      const incr = targetCount / 100;
      if(startingCount < targetCount) {
        counter.innerHTML = `${Math.round(startingCount + incr)}`;
        setTimeout(updateCounter , 10);
      }else{
        counter.innerText = targetCount;
      }
     
  }

  updateCounter();

});
