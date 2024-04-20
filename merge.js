async function merge(ele, low, mid, high) {
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left1 = new Array(n1);
    let left2 = new Array(n1);
    let right1 = new Array(n2);
    let right2 = new Array(n2);
    for (let i = 0; i < n1; i++) {
        await sleep(400 / speedValue);
        ele[low + i].style.background = 'orange';
        left1[i] = ele[low + i].style.height;
        left2[i] = ele[low + i].style.marginTop;
    }
    for (let i = 0; i < n2; i++) {
        await sleep(400 / speedValue);
        ele[mid + 1 + i].style.background = 'cyan';
        right1[i] = ele[mid + 1 + i].style.height;
        right2[i] = ele[mid + 1 + i].style.marginTop;
    }
    await sleep(400 / speedValue);
    let i = 0, j = 0, k = low;
    while (i < n1 && j < n2) {
        await sleep(400 / speedValue);
        
        if (parseInt(left1[i]) <= parseInt(right1[j])) {
            if ((n1 + n2) === ele.length) {
                ele[k].style.background = 'green';
            }
            else {
                ele[k].style.background = 'lightgreen';
            }
            
            ele[k].style.height = left1[i];
            ele[k].style.marginTop = left2[i];
            i++;
            k++;
        }
        else {
            if ((n1 + n2) === ele.length) {
                ele[k].style.background = 'green';
            }
            else {
                ele[k].style.background = 'lightgreen';
            }
            ele[k].style.height = right1[j];
            ele[k].style.marginTop = right2[j];
            j++;
            k++;
        }
    }
    while (i < n1) {
        await sleep(400 / speedValue);
        if ((n1 + n2) === ele.length) {
            ele[k].style.background = 'green';
        }
        else {
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = left1[i];
        ele[k].style.marginTop = left2[i];
        i++;
        k++;
    }
    while (j < n2) {
        await sleep(400 / speedValue);
        if ((n1 + n2) === ele.length) {
            ele[k].style.background = 'green';
        }
        else {
            ele[k].style.background = 'lightgreen';
        }
        ele[k].style.height = right1[j];
        ele[k].style.marginTop = right2[j];
        j++;
        k++;
    }
}

async function mergeSort(ele, l, r) {
    if (l >= r) {
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
}
let randArr = document.getElementById('randBtn');
randArr.addEventListener("click",async(e)=>{
    e.preventDefault();
    createNewArray();
    showAllElements();
  })
sortButton.addEventListener('click', async (e)=> {
    e.preventDefault();
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    await mergeSort(ele, l, r);
});
