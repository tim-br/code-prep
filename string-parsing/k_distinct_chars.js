function distinctCharsNum(str) {
  let chars = {}

  for(let i = 0; i < str.length; i++) {
    let char = str.charAt(i)
    chars[char] = true
  }

  return Object.keys(chars).length
}

function distinctCharsHelper(str, leftIndex, rightIndex, count, k, charsObj) {
  if(rightIndex > str.length){
    //console.log("returning ", count)
    return count
  }
  //let subString = str.substring(leftIndex, rightIndex) 
  let finalCount =  0 
  //console.log("chars obj ", charsObj)
  let charsNum = Object.keys(charsObj).length
  if(charsNum <= k) {
    if(charsObj[str[rightIndex]]){
      charsObj[str[rightIndex]] += 1 
    } else {
      if(!(charsObj[str[rightIndex]])  && str[rightIndex] ){
        charsObj[str[rightIndex]] = 1 
      }
    }
    //console.log("increasing right idex")
    rightIndex += 1
    //let newCount = subString.length > count ? subString.length : count;
  } else {
    if(charsObj[str[leftIndex]] > 0){
      charsObj[str[leftIndex]] -= 1 
      if(charsObj[str[leftIndex]] === 0) {
        delete charsObj[str[leftIndex]] 
      }
    } 
    //console.log("increasing left index")
    leftIndex += 1
  }

  //console.log("chars obj ", charsObj)

  //console.log("indexes ", leftIndex , " ", rightIndex)
  let windowLength = rightIndex - leftIndex - 1
  //console.log(windowLength)
  return distinctCharsHelper(str, leftIndex, rightIndex, Math.max(windowLength, count), k, charsObj)
}

function distinctChars(str, k) {
  return distinctCharsHelper(str, 0, 0, 0, k, {})
}

console.log(distinctChars("ecebaaaaca", 2))
console.log(distinctChars("ecebaaaaca", 3))
console.log(distinctChars("ecebabaaaca", 3))
console.log("should return 3 : ", distinctChars("ecebabaaaca", 1))
console.log("should return 2 : ", distinctChars("eccebabaca", 1))
