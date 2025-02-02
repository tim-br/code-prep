const isDigit = char => char >= '0' && char <= '9';

function validParens(str) {
  const stack = [];
  let char = str.charAt(i)
  let rest = str.substring(1)
  while (char){
    if (char === "(") {
      stack.push(1);
    }
    if (char === ")") {
      const peek = stack[stack.length - 1];
      if (peek) {
        stack.pop();
      } else {
        return false;
      }
    }
    if(isDigit(char){
      
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
