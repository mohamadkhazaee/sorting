function mergeSort(unsortedArr) {
  const arr = [...unsortedArr];
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

function merge(leftArr, rightArr) {
  let leftIndex = 0;
  let rightIndex = 0;
  const result = [];
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  return [
    ...result,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
}

module.exports = mergeSort;
