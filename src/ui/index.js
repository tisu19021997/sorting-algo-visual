let currentAlgo = '';
let started = false;
let arrayToSort;

// each column element with
const colWidth = 5;
// start coordinate
const startY = 0;
let startX = 0;

// bubble sort variables
let k;
let flag;

// selection sort variables
let i = 0;
let minimum;

// sort algorithm list
let algos = [{
    label: 'Bubble Sort',
    value: 'bubble',
  },
  {
    label: 'Selection Sort',
    value: 'selection',
  },
];

function refresh(sort) {
  switch (sort) {
    case 'bubble':
      k = 1;
      flag = false;
      break;

    case 'selection':
      i = 0;
      minimum = undefined;
      break;
  }
}

function swap(array, first, second) {
  let temp = array[first];
  array[first] = array[second];
  array[second] = temp;

  return array;
}

function initRandomArray(length = 300, height = 30) {
  return Array.from({
    length,
  }, () => Math.floor(Math.random() * height));
}

function updateStartButton(button) {
  button.elt.textContent = started ? 'Stop' : 'Start';
}

function visualize(array, startX = 0, startY = 0, colWidth = 5) {
  for (let j = 0; j < array.length; j++) {
    fill(255);
    rect(startX, startY, colWidth, array[j] * 10);
    startX += colWidth;
  }
}

function setup() {
  // create sorting option buttons
  for (let algo of algos) {
    const btn = createButton(algo.label, algo.value);

    btn.mouseClicked(function () {
      const algoData = btn.value();
      refresh(algoData);
      arrayToSort = initRandomArray();
      currentAlgo = algoData;
    })
  }

  // create a control button
  const controller = createButton('Start', 'start');
  controller.mousePressed(function () {
    if (!currentAlgo) {
      alert('Please choose a sort algorithm');
      return false;
    };

    started = !started;
    updateStartButton(controller);
  })

  const cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height + 70) / 2;
  cnv.position(x, y);
}

function windowResized() {
  // resize the canvas on window resizing
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  translate(windowWidth / 2, windowHeight);
  rotate(PI);
  background(0);

  if (started) {
    // bubble sort
    if (currentAlgo === 'bubble') {
      for (let index = 0; index < arrayToSort.length - k; index++) {
        if (arrayToSort[index] < arrayToSort[index + 1]) {
          arrayToSort = swap(arrayToSort, index, index + 1);
          flag = true;
        }
      }

      visualize(arrayToSort, startX, startY, 2);

      k++;
      startX = 0;
    }

    // selection sort
    if (currentAlgo === 'selection') {
      minimum = i;

      for (let j = i + 1; j < arrayToSort.length; j++) {
        if (arrayToSort[j] < arrayToSort[minimum]) {
          minimum = j;
        }
      }

      if (i != minimum) {
        swap(arrayToSort, i, minimum);
      }

     visualize(arrayToSort, startX, startY, 2);

      i++;
      startX = 0;
    }
  }
}