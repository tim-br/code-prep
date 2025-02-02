function longestRepeatingHelper(
  str,
  originalNumOfChars,
  numOfChars,
  previousChar,
  longestRepeatingCount,
) {
  if (!str.length) {
    return longestRepeatingCount;
  }
  const char = str.charAt(0);
  let rest = str.substring(1);
  if(!longestRepeatingCount[char] && char && char !== previousChar){
    longestRepeatingCount[char] = 1 
  }

  if (char === previousChar) {
    if (longestRepeatingCount[char]) {
      longestRepeatingCount[char] = longestRepeatingCount[char] + 1;
    } else {
      longestRepeatingCount[char] = 1;
    }
    longestRepeatingHelper(rest, originalNumOfChars, numOfChars, char, longestRepeatingCount)
  } else {
    if (numOfChars > 0 && previousChar) {
      longestRepeatingCount[previousChar] += 1
      longestRepeatingHelper(rest, originalNumOfChars, numOfChars - 1, previousChar, longestRepeatingCount)
	
    } else {

      longestRepeatingHelper(rest, originalNumOfChars, originalNumOfChars, char, longestRepeatingCount)
    
    }
  } 
  return longestRepeatingCount;
}

console.log(longestRepeatingHelper("ABAB", 2, 2, null, {}));
console.log(longestRepeatingHelper("AAABXBCCZZCC", 2, 2, null, {}));
console.log(longestRepeatingHelper("AAABABCCZZCC", 2, 2, null, {}));
console.log(longestRepeatingHelper("AAABABCCZZCC", 2, 2, null, {}));
console.log(longestRepeatingHelper("AAABABCCZZCC", 3, 3, null, {}));
console.log(longestRepeatingHelper("ABZBCCZZCC", 3, 3, null, {}));
