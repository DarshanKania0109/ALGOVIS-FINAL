let elementsInput = document.getElementById("inputelement");
let numOfEle = document.getElementById("elements");
let BigDiv = document.getElementsByClassName("boxes")[0];
let sortButton = document.getElementById("sort-btn");
let numbers;
let speedInput = document.getElementById('speed')
let speedValue;

speedInput.addEventListener("change", () => {
  speedValue = speedInput.value;
  //0.25 to 2
})
let isSorted = false;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
elementsInput.addEventListener("change", () => {
  let numberOfElements;
  if (elementsInput.value) {
    numberOfElements = elementsInput.value
  }
  else {
    numberOfElements = []
  }
  numbers = numberOfElements.split(",");
  numbers = numbers.map(num => {
    let parsedNum = parseInt(num, 10);
    if (parsedNum > 50) {
      return "50";
    } else if (parsedNum < 0) {
      return "0";
    } else {
      return num;
    }
  });
  if (isSorted == true) {
    removeAllElements();
  }
  showAllElements();
});
function showAllElements() {
  for (let i = 0; i < numbers.length; i++) {
    let element = document.createElement("div");
    element.style.width = "2rem";
    element.classList.add("bar");

    element.style.marginTop = `${50 - Number(numbers[i])}vh`;
    element.style.height = `${numbers[i]}vh`;
    element.style.backgroundColor = "red";
    element.style.border = "solid black 2px";
    BigDiv.appendChild(element);
  }
}

function timeDelay() {
  setTimeout(() => {
    console.log("HAHA TIme out guysss");
  }, 5000);
}
function swapTwoelements(ele1, ele2) {
  let temp = ele1.style.height;
  ele1.style.height = ele2.style.height;
  ele2.style.height = temp;
  let temp2 = ele1.style.marginTop;
  ele1.style.marginTop = ele2.style.marginTop;
  ele2.style.marginTop = temp2;
}

function removeAllElements() {
  let ele = document.querySelectorAll(".bar");
  Array.from(ele).map((e) => {
    BigDiv.removeChild(e);
  })
}

function createNewArray(noOfBars = numOfEle.value) {
  // calling helper function to delete old bars from dom
  // deleteChild();

  // creating an barArray of random numbers 
  barArray = [];
  for (let i = 0; i < noOfBars; i++) {
    barArray.push(Math.floor(Math.random() * 50));
  }
  console.log(barArray);
  numbers = barArray;
  // const bars = document.querySelector("#sorting");

  // // create multiple element div using loop and adding class 'bar col'
  // for (let i = 0; i < noOfBars; i++) {
  //     const bar = document.createElement("div");
  //     bar.style.height = `${barArray[i]*2}px`;
  //     bar.classList.add('bar');
  //     bar.classList.add('flex-item');
  //     bar.classList.add(`barNo${i}`);
  //     bars.appendChild(bar);
  // }
}