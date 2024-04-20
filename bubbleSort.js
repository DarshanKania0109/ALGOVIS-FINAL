let randArr=document.getElementById('randBtn');
randArr.addEventListener("click",async(e)=>{
  e.preventDefault();
  createNewArray();
  showAllElements();
})
sortButton.addEventListener("click", async (e) => {
    e.preventDefault();
    let ele = document.querySelectorAll(".bar");
  
    for(let i = 0; i < ele.length - 1; i++){
      for(let j = 0; j < ele.length - i - 1; j++){
          ele[j].style.background = 'violet';
          ele[j+1].style.background = 'yellow';
          if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
            await sleep(400/speedValue).then(() => swapTwoelements(ele[j], ele[j+1]))
          }
          ele[j].style.background = 'red';
          ele[j+1].style.background = 'red';
      }
      ele[ele.length-1-i].style.background = 'darkblue';
    }
    ele[0].style.background = 'green';
    isSorted = true;
    numbers = [];
  });

