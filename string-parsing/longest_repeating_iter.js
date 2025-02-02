function mostFrequentChar(str) {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    if (!count[str.charAt(i)]) {
      count[str.charAt(i)] = 1;
    } else {
      count[str.charAt(i)] = count[str.charAt(i)] + 1;
    }
  }

  let newCount = 0;
  let returnChar = null;
  for (let key in count) {
    if (count[key] > newCount) {
      newCount = count[key];
      returnChar = key;
    }
  }

  return { mostFrequent: returnChar, mostFrequentCount: newCount };
}

function longestRepeatingHelper(
  str,
  leftIndex,
  rightIndex,
  numOfSwaps,
  maxCount,
) {
  if (rightIndex > str.length) {
    return maxCount;
  }
  let newString = str.substring(leftIndex, rightIndex);
  let { mostFrequentCount } = mostFrequentChar(newString);
  let windowSize = rightIndex - leftIndex;
  let maxWindowSize = mostFrequentCount + numOfSwaps;
  //mostFrequentCount =
  //  mostFrequentCount > maxCount ? mostFrequentCount : maxCount;
  if (windowSize > maxWindowSize) {
    leftIndex = leftIndex + 1;
  } else {
    maxCount = maxCount > windowSize ? maxCount : windowSize
    rightIndex = rightIndex + 1;
  }
  let res = longestRepeatingHelper(
    str,
    leftIndex,
    rightIndex,
    numOfSwaps,
    maxCount,
  );
  if (res > maxCount) {
    return res;
  } else {
    return maxCount;
  }
}

console.log(longestRepeatingHelper("ABAB", 0, 1, 2, 0));

console.log(longestRepeatingHelper("AAABXBCCZZCC", 0, 1, 2, 0));
console.log(longestRepeatingHelper("AAABABCCZZCC", 0, 1, 2, 0));
console.log(longestRepeatingHelper("AAABABCCZZCC", 0, 1, 4, 0));
console.log(longestRepeatingHelper("ABZBCCZZCC", 0, 1, 4, 0));
