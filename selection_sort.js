// Selection Sort
// Time Complexity: O(n^2) - quadratic time
// Definition: The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning.
// The algorithm maintains two subarrays in a given array.
// 1. The subarray which is already sorted.
// 2. Remaining subarray which is unsorted.
// In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
};

const target = [8, 7, 9, 110, 11, 2, 35, 3, 1, 5, 4, 6];

console.log("Unsorted");
console.log(target);

console.log("Sorted");
console.log(selectionSort(target));
