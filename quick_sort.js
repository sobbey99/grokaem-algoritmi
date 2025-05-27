// Quick Sort (divide-and-conquer algorithm)
// Time Complexity: O(n log n)
// Definition:
// 1. Pick a pivot element
// 2. Partition the array into two sub-arrays:
//    - Elements less than the pivot
//    - Elements greater than the pivot
// 3. Recursively apply the same logic to the sub-arrays
// 4. Combine the sorted sub-arrays and the pivot element

const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    const pushInto = arr[i] < pivot ? leftArr : rightArr;
    pushInto.push(arr[i]);
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

const target = [8, 7, 9, 110, 11, 2, 35, 3, 1, 5, 4, 6];

console.log("Unsorted");
console.log(target);

console.log("Sorted");
console.log(quickSort(target));
