function quickSort(unsortedArr) {
  const arr = [...unsortedArr];

  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivotEl = arr[pivotIndex];
  const greater = [];
  const less = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    if (arr[i] > pivotEl) {
      greater.push(arr[i]);
    } else {
      less.push(arr[i]);
    }
  }

  return [...quickSort(less), pivotEl, ...quickSort(greater)];
}

module.exports = quickSort;
