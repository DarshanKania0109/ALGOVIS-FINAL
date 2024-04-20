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
        let minIndex = i;
        ele[i].style.background = 'cyan';
        for(let j = i + 1; j < ele.length; j++){
            ele[j].style.background = 'cyan';
            if(parseInt(ele[j].style.height) < parseInt(ele[minIndex].style.height)){
                minIndex = j;
            }
            ele[j].style.background = 'yellow';
        }
        if (minIndex != i) {
            await sleep(400/speedValue).then(() => swapTwoelements(ele[i], ele[minIndex]));
        }
        ele[i].style.background = 'violet';
    }
    ele[ele.length-1].style.background = 'violet';
    isSorted = true;
    numbers = [];
});
