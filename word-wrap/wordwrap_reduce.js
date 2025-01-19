function wordWrap(words, maxChars) {
  let arr = words.split(" ");
  const res = arr.reduce(
    (acc, currentValue) => {
      let currentCountX = acc.currentCount;
      if (currentCountX >= maxChars) {
        currentCountX = 0;
      }
      if (currentCountX < 1) {
        acc.arr.push("");
      }
      let space = currentCountX === 0 ? "" : " ";
      let indent = currentCountX === 0 ? 0 : 1;

      if (currentValue.length + currentCountX + indent <= maxChars) {
        let lastItem = acc.arr.pop();
        lastItem += space + currentValue;
        acc.arr.push(lastItem);
        currentCountX += currentValue.length + indent;
        return { arr: acc.arr, currentCount: currentCountX, lastWord: null };
      } else {
        currentCountX = 0;
        space = currentCountX === 0 ? "" : " ";
        indent = currentCountX === 0 ? 0 : 1;

        if (currentValue && currentValue.length + indent <= maxChars) {
          acc.arr.push(space + currentValue);
          currentCountX += currentValue.length + indent;
        }
        return {
          arr: acc.arr,
          currentCount: currentCountX,
          lastWord: currentValue,
        };
      }
    },
    { arr: [], currentCount: 0, lastWord: null },
  );

  return res.arr;
}

console.log(wordWrap("This is a test of the word wrap", 6));
console.log(wordWrap("This is a test of", 10));
console.log(wordWrap("This is a test of the word", 10));
console.log(wordWrap("This is a test of the word wrap function", 10));
