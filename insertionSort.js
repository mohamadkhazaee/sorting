function insertionSort(unsortedArr) {
  const arr = [...unsortedArr];
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0 && arr[j] < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
  return arr;
}

module.exports = insertionSort;
