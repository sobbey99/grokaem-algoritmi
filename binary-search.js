// Binary Search
// Time Complexity: O(log n) - logarithmic time
// Definition: Search a sorted array by repeatedly dividing the search interval in half.
// If the value of the search key is less than the item in the middle of the array, narrow the interval to the lower half.
// Otherwise, narrow it to the upper half.
// Repeatedly check until the value is found or the interval is empty.
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 9;

console.table({
  target,
  idx: binarySearch(arr, target),
});
