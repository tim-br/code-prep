/**
 * Helper function that explores all possible contiguous subarrays to find the longest one
 * with equal numbers of 0s and 1s. For each position, it tries:
 * 1. Starting a new count from that position
 * 2. Continuing the current count
 * Then returns the maximum length found between these two options
 */
function findMaxLengthHelper(
  nums,
  currentLength,
  maxLength,
  numOfZeros,
  numOfOnes,
) {
  if (!nums.length) {
    return maxLength;
  }

  let first = nums.shift();

  if (first === 0) {
    numOfZeros += 1;
  }

  if (first === 1) {
    numOfOnes += 1;
  }

  currentLength += 1;

  if (numOfZeros === numOfOnes && currentLength > maxLength) {
    maxLength = currentLength;
  }

  if (!nums.length) {
    return maxLength;
  } else {
    const numsCopy = [...nums];
    const numsCopy2 = [...nums];
    let max1 = findMaxLengthHelper(numsCopy, 0, 0, 0, 0);
    let max2 = findMaxLengthHelper(
      numsCopy2,
      currentLength,
      maxLength,
      numOfZeros,
      numOfOnes,
    );
    return max1 > max2 ? max1 : max2;
  }
}

var findMaxLength = function (nums) {
  return findMaxLengthHelper(nums, 0, 0, 0, 0);
};

console.log(findMaxLength([0, 1, 0, 1, 1, 1] == 4));

// Basic test cases
console.log(findMaxLength([0, 1]) === 2); // Basic case with one valid subarray
console.log(findMaxLength([0, 1, 0]) === 2); // Multiple valid subarrays of same length
console.log(findMaxLength([0, 0, 0]) === 0); // No valid subarray (all zeros)
console.log(findMaxLength([1, 1, 1]) === 0); // No valid subarray (all ones)

// Empty and single element arrays
console.log(findMaxLength([]) === 0); // Empty array
console.log(findMaxLength([0]) === 0); // Single zero
console.log(findMaxLength([1]) === 0); // Single one

// Longer sequences
console.log(findMaxLength([0, 1, 0, 1]) === 4); // Entire array is valid
console.log(findMaxLength([1, 1, 0, 0, 1, 1]) === 4); // Entire array is valid
console.log(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1]) === 6); // Valid subarray in middle

// multiple valid subarrays of different lengths
console.log(findMaxLength([0, 1, 1, 0, 1, 1, 1, 0]) === 4); // Should find the longest

// Edge cases
console.log(findMaxLength([0, 0, 1, 0, 0, 0, 1, 1, 0, 1]) === 8); // Multiple possible valid subarrays
console.log(findMaxLength([1, 0, 1, 1, 1, 1, 1, 0]) === 2); // Valid subarray at start
console.log(findMaxLength([1, 1, 1, 1, 1, 0, 0]) === 4); // Valid subarray at end
console.log(findMaxLength([1, 1, 1, 1, 1, 0, 0]) === 4); // Valid subarray at end

// Complex cases
console.log(findMaxLength([1, 0, 1, 0, 1, 0, 1, 0]) === 8); // Alternating sequence
console.log(findMaxLength([1, 1, 1, 0, 0, 0, 0, 1]) === 8); // Grouped sequences
console.log(findMaxLength([0, 1, 1, 0, 1, 1, 1, 0, 0, 0]) === 10); // Multiple valid options
