function wordWrapHelper(acc, words, maxChars) {
  if (words.length < maxChars) {
    acc.push(words);
    return acc;
  } else {
    let xWords = words.split(" ");
    let counter = 0;
    let line = "";
    while (counter < maxChars && xWords.length) {
      let firstWord = xWords[0];
      let nextWord = xWords[1];
      if (!(counter + firstWord.length > maxChars)) {
        xWords.shift();
        counter += firstWord.length;
        line += firstWord;
        if (nextWord.length <= maxChars - counter) {
          line += " ";
          counter += 1;
        }
      } else {
        break;
      }
    }
    acc.push(line);
    let joined = xWords.join(" ");
    return wordWrapHelper(acc, joined, maxChars);
  }
}

function wordWrap(words, maxChars) {
  return wordWrapHelper([], words, maxChars);
}

console.log(wordWrap("This is a test of the word wrap", 6));
console.log(wordWrap("This is a test of", 10));
console.log(wordWrap("This is a test of the word", 10));
console.log(wordWrap("This is a test of the word wrap function", 10));
