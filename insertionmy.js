let randArr=document.getElementById('randBtn');
randArr.addEventListener("click",async(e)=>{
  e.preventDefault();
  createNewArray();
  showAllElements();
})
sortButton.addEventListener("click", async (e) => {
    e.preventDefault();
    let ele = document.querySelectorAll(".bar");
    ele[0].style.background = 'green';
    for(let i = 1; i < ele.length; i++){
        let j = i - 1;
        let key = ele[i].style.height;
        let key2=ele[i].style.marginTop;
        ele[i].style.background = 'blue';

        await sleep(400/speedValue);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            ele[j + 1].style.marginTop = ele[j].style.marginTop;
            j--;

            await sleep(400/speedValue);
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = key;
        ele[j + 1].style.marginTop = key2;
        ele[i].style.background = 'green';
    }
    ele[i].style.background = 'green';
    isSorted = true;
    numbers = [];
});
