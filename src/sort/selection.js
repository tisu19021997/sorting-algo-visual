let currentArray = Array.from({
  length: 300
}, () => Math.floor(Math.random() * 40));

const swap = (array, first, second) => {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;

  return array;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}


let i = 0;
let startX = 0;
let min;
const colWidth = 5;
const startY = 0;

function draw() {
  background(0);
  translate(width - 100, height / 2);
  rotate(PI);

  min = i;

  for (let j = i + 1; j < currentArray.length; j++) {
    if (currentArray[j] < currentArray[min]) {
      min = j;
    }
  }

  if (i != min) {
    swap(currentArray, i, min);
  }

  for (let j = 0; j < currentArray.length; j++) {
    fill(255, 0, 0);
    rect(startX, startY, colWidth, currentArray[j] * 10);
    startX += colWidth;
  }

  i++;
  startX = 0;
}