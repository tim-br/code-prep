function validParens(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "(") {
      stack.push(1);
    }
    if (str.charAt(i) === ")") {
      const peek = stack[stack.length - 1];
      if (peek) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return !stack.length;
}

console.log("test 1 passes ", validParens("(())"));
console.log("test 2 passes ", !validParens("(()"));
console.log("test 3 passes ", validParens("(()())"));
console.log("test 4 passes ", !validParens(")("));
console.log("test 5 passes ", !validParens(")(()"));
console.log("test 6 passes ", !validParens("(()()))"));
console.log("test 7 passes ", validParens("((()))"));
