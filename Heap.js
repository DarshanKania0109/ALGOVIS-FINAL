function swap(ele1, ele2) {
    let temp = ele1.style.height;
    let temp2 = ele1.style.marginTop;
    ele1.style.height = ele2.style.height;
    ele1.style.marginTop = ele2.style.marginTop;
    ele2.style.height = temp;
    ele2.style.marginTop = temp2;
}


async function heapSort(arr, n) {

    for (var i = n / 2 - 1; i >= 0; i--) {
        await heapify(arr, n, i);
    }

    // One by one extract an element from heap
    for (var i = n - 1; i > 0; i--) {
        // Move current root to end
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        arr[0].style.background = 'cyan';
        arr[i].style.background = 'green';
        swap(arr[0], arr[i]);
        await sleep(400 / speedValue);

        // call max heapify on the reduced heap
        await heapify(arr, i, 0);
    }
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
async function heapify(arr, n, i) {
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root

    if (l < n && parseInt(arr[l].style.height) > parseInt(arr[largest].style.height)) {
        // arr[l].style.background = 'lightblue'; 
        // arr[largest].style.background = 'cyan';
        largest = l;
        swap(arr[largest], arr[l]);
        // arr[l].style.background = '#e43f5a';
    }


    // If right child is larger than largest so far
    if (r < n && parseInt(arr[r].style.height) > parseInt(arr[largest].style.height)) {
        // arr[r].style.background = 'lightgreen';
        // arr[largest].style.background = 'cyan'; 
        largest = r;
        swap(arr[largest], arr[r]);
        // arr[l].style.background = '#e43f5a'; 
    }
    if (largest != i) {
        var temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}
let randArr = document.getElementById('randBtn');
randArr.addEventListener("click", async (e) => {
    e.preventDefault();
    createNewArray();
    showAllElements();
})
const heapSortbtn = document.querySelector("#sort-btn");
heapSortbtn.addEventListener("click", async (e) => {
    e.preventDefault();
    let arr = document.querySelectorAll('.bar');
    let n = arr.length;
    await heapSort(arr, n);
    arr[0].style.background = 'green';
});
