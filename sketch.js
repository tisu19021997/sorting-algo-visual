let currentArray = Array.from({length: 300}, () => Math.floor(Math.random() * 40));


const swap = (array, first, second) => {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;

  return array;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(32);
  text('Bubble Sort');
}


let k = 1;
let startX = 0;
let flag = false;
const colWidth = 5;
const startY = 0;

function draw() {
  clear();

  for (let i = 0; i < currentArray.length - k; i++) {
    if (currentArray[i] < currentArray[i + 1]) {
      currentArray = swap(currentArray, i, i + 1);
      flag = true;
    }
  }

  for (let j = 0; j < currentArray.length; j++) {
    fill(255,0,0);
    rect(startX, startY, colWidth, currentArray[j] * 10);
    startX += colWidth;
  }

  k++;

  startX = 0;

  if (k >= currentArray.length) {
    k = 0;
  }
}