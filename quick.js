function swap(ele1, ele2) {
    let temp = ele1.style.height;
    let temp2 = ele1.style.marginTop;
    ele1.style.height = ele2.style.height;
    ele1.style.marginTop = ele2.style.marginTop;
    ele2.style.height = temp;
    ele2.style.marginTop = temp2;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function partitionLomuto(ele, l, r) {
    let i = l - 1;
    ele[r].style.background = 'cyan'; //pivot
    for (let j = l; j <= r - 1; j++) {

        ele[j].style.background = 'yellow'; //current element
    await sleep(1600/speedValue)

        if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
            i++;
            swap(ele[i], ele[j]);
            // color 
            ele[i].style.background = 'orange';
            if (i != j) ele[j].style.background = 'orange';
            // pauseChamp
        await sleep(1600/speedValue)
        }
        else {
            // color if not less than pivot
            ele[j].style.background = 'pink';
        }
    }
    i++;

await sleep(1600/speedValue)

    swap(ele[i], ele[r]);
    // color
    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';


await sleep(1600/speedValue)


    // color
    for (let k = 0; k < ele.length; k++) {
        if (ele[k].style.background != 'green')
            ele[k].style.background = '#e43f5a';
    }

    return i;
}

async function quickSort(ele, l, r) {
    if (l < r) {
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else {
        if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}
let randArr = document.getElementById('randBtn');
randArr.addEventListener("click", async (e) => {
    e.preventDefault();
    createNewArray();
    showAllElements();
})

const quickSortbtn = document.querySelector("#sort-btn");
quickSortbtn.addEventListener('click', async(e) =>{
    e.preventDefault();
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;

    await quickSort(ele, l, r);

});
