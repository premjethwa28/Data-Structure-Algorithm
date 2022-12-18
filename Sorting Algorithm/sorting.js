//Name : Prem Atul Jethwa
//Uta Id : 1001861810

//Merge Sort Algorithm
function mergeSortAlgorithm(arr, l, r) {
  if (l >= r) {
    return;
  }
  var m = l + parseInt((r - l) / 2);
  mergeSortAlgorithm(arr, l, m);
  mergeSortAlgorithm(arr, m + 1, r);
  merge(arr, l, m, r);

  outputToggle(arr);
}

function merge(arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;

  var A = new Array(n1);
  var B = new Array(n2);

  for (var i = 0; i < n1; i++) A[i] = arr[l + i];
  for (var j = 0; j < n2; j++) B[j] = arr[m + 1 + j];

  var i = 0;
  var j = 0;
  var k = l;

  while (i < n1 && j < n2) {
    if (A[i] <= B[j]) {
      arr[k] = A[i];
      i++;
    } else {
      arr[k] = B[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = A[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = B[j];
    j++;
    k++;
  }
}

//Heap Sort Algorithm
function heapSortAlgorithm(arr) {
  var n = arr.length;

  for (var i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);

  for (var i = n - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapify(arr, i, 0);
  }
}

function heapify(arr, n, i) {
  var largest = i;
  var l = 2 * i + 1;
  var r = 2 * i + 2;

  if (l < n && arr[l] > arr[largest]) largest = l;

  if (r < n && arr[r] > arr[largest]) largest = r;

  if (largest != i) {
    swap(arr, i, largest);
    heapify(arr, n, largest);
  }
  outputToggle(arr);
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//Quick Sort Algorithm
function quickSortAlgorithm(arr, low, high) {
  if (low < high) {
    var pi = partition(arr, low, high);

    quickSortAlgorithm(arr, low, pi - 1);
    quickSortAlgorithm(arr, pi + 1, high);
  }
  outputToggle(arr);
}

function partition(arr, low, high) {
  var pivot = arr[high];
  var j;
  var i = low - 1;

  for (j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}

function threeMQuickSortAlgorithm(arr, left, right) {
  var size = right - left + 1;
  if (size <= 3) {
    manualSort(arr, left, right);
  } else {
    let median = medianOf3(arr, left, right);

    var partition = qsPartition(arr, left, right, median);
    threeMQuickSortAlgorithm(arr, left, partition - 1);
    threeMQuickSortAlgorithm(arr, partition + 1, right);
  }
  outputToggle(arr);
}

function medianOf3(arr, left, right) {
  var center = Math.floor((left + right) / 2);

  if (arr[left] > arr[center]) {
    swap(arr, left, center);
  }
  if (arr[left] > arr[right]) {
    swap(arr, left, right);
  }
  if (arr[center] > arr[right]) {
    swap(arr, center, right);
  }
  swap(arr, center, right - 1);

  return arr[right - 1];
}

function manualSort(Array, left, right) {
  var size = right - left + 1;
  if (size <= 1) return;
  if (size == 2) {
    if (Array[left] > Array[right]) swap(Array, left, right);
    return;
  } else {
    if (Array[left] > Array[right - 1]) swap(Array, left, right - 1);
    if (Array[left] > Array[right]) swap(Array, left, right);
    if (Array[right - 1] > Array[right]) swap(Array, right - 1, right);
  }
}

function qsPartition(intArray, left, right, pivot) {
  var leftPtr = left;
  var rightPtr = right - 1;

  while (true) {
    while (intArray[++leftPtr] < pivot);
    while (intArray[--rightPtr] > pivot);
    if (leftPtr >= rightPtr) break;
    else swap(intArray, leftPtr, rightPtr);
  }
  swap(intArray, leftPtr, right - 1);
  return leftPtr;
}

//Insertion Sort Algorithm
function insertionSortAlgorithm(arr) {
  let n = arr.length;
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  outputToggle(arr);
}

//Selection Sort Algorithm
function selectionSortAlgorithm(arr) {
  var i, j, min;
  let n = arr.length;
  for (i = 0; i < n - 1; i++) {
    min = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    swap(arr, min, i);
  }
  outputToggle(arr);
}

//Bubble Sort Algorithm
function bubbleSortAlgorithm(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  outputToggle(arr);
}

function outputToggle(arr) {
  document.getElementById("output").style.visibility = "visible";
  document.getElementById("output-label").style.display = "block";
  document.getElementById("output").innerHTML = arr;
}
