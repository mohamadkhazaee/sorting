function countSort(array) {
  const len = array.length;

  // Find the maximum element in the array
  let max = array[0];
  for (let i = 1; i < len; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  // Create a count array and initialize with zeros
  const count = new Array(max + 1).fill(0);

  // Count the occurrences of each element
  for (let i = 0; i < len; i++) {
    count[array[i]]++;
  }

  // Calculate the cumulative sum of counts
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  // Create a sorted array using the count array
  const sorted = new Array(len);
  for (let i = 0; i < len; i++) {
    const value = array[i];
    const index = count[value] - 1;
    sorted[index] = value;
    count[value]--;
  }

  return sorted;
}

module.exports = countSort;
