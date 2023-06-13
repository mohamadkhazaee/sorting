function radixSort(arr) {
  const max = Math.max(...arr);
  let divisor = 1;

  while (divisor <= max) {
    countingSort(arr, divisor);
    divisor *= 10;
  }

  return arr;
}

function countingSort(arr, divisor) {
  const countArray = new Array(10).fill(0);
  const sortedArray = [];

  for (let num of arr) {
    const digit = Math.floor((num / divisor) % 10);
    countArray[digit]++;
  }

  for (let i = 1; i < countArray.length; i++) {
    countArray[i] += countArray[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = Math.floor((arr[i] / divisor) % 10);
    sortedArray[countArray[digit] - 1] = arr[i];
    countArray[digit]--;
  }

  arr.splice(0, arr.length, ...sortedArray);
}

module.exports = radixSort;
