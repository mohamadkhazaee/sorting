function insertionSort(unsortedArr) {
  const arr = [...unsortedArr];
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0 && arr[j] < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
  return arr;
}

console.log(insertionSort([8, 7, 6, 5, 2, 3, 1]));
module.exports = insertionSort;
