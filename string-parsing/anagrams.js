function anagramsHelper(strArr, sortedObj){
  if(!strArr.length){
    return sortedObj
  }
  let str = strArr.pop()
  let chars = str.split('').sort().join('');
  if(sortedObj[chars]){
    sortedObj[chars] = [...sortedObj[chars], str] 
  } else {
    sortedObj[chars] = [str]
  }
  return(anagramsHelper(strArr, sortedObj))
}

function anagrams(strArr){
  return anagramsHelper(strArr, {})
}

console.log(anagrams(["eat","tea","tan","ate","nat","bat"]))
