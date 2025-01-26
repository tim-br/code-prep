function binarySumHelper(arr, goal, currentSums, currentMax) {
  if (!arr.length) {
    return currentMax;
  }
  let first = arr.shift();

  let newCurrentSums = currentSums.map((x) => x + first);
  newCurrentSums.push(first);

  //let matchingGoalNum = newCurrentSums.filter((x) => x === goal).reduce((x, acc) => 1 + acc, 0)
  let matchingGoalNum = newCurrentSums.filter((x) => x === goal).length;
  newCurrentSums = newCurrentSums.filter((x) => x <= goal);
  return binarySumHelper(
    arr,
    goal,
    newCurrentSums,
    currentMax + matchingGoalNum,
  );
}

function binarySum(arr, goal) {
  return binarySumHelper(arr, goal, [], 0);
}

console.log(binarySum([1, 1], 2));
console.log(binarySum([1, 0, 1, 0, 1], 2));
console.log(binarySum([1, 0, 1, 0, 1], 3));
console.log(binarySum([0, 0, 0, 0, 0], 0));
