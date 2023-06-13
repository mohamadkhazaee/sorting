function selectionSort(unsortedArr) {
  const arr = [...unsortedArr];

  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = i;
    let j = i + 1;
    for (j; j < arr.length; j++) {
      if (arr[smallestIndex] > arr[j]) {
        smallestIndex = j;
      }
    }
    [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]];
  }
  return arr;
}
console.log(selectionSort([6, 4, 8, 92, 0, 1]));
module.exports = selectionSort;
