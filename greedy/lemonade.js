function lemonadeHelper(changeRequired, tally){
  while(tally['10'] > 0 && changeRequired >= 10) {
    tally['10'] -= 1
    changeRequired -= 10
  }
  while(tally['5'] > 0 && changeRequired >=  5) {
    tally['5'] -= 1
    changeRequired -= 5
  }

  return changeRequired
}

function lemonade(bills){
  let currentTally = {'5': 0, '10': 0}
  let canReturn = true
  for(let i = 0; i < bills.length; i++) {
    const bill = bills[i]
    let changeRequired = 0
    if(bill === 10) {
      changeRequired = 5
      let amountLeft = lemonadeHelper(changeRequired, currentTally)
      if(amountLeft > 0) {
        canReturn = false
	break
      }
      currentTally['10'] += 1
    }
    if(bill === 20) {
      changeRequired = 15
      let amountLeft = lemonadeHelper(changeRequired, currentTally)
      if(amountLeft > 0) {
        canReturn = false
	break
      }
      currentTally['20'] += 1
    }
    if(bill === 5){
      currentTally['5'] += 1
    }
  } 

  return canReturn
}

console.log(lemonade([5,5,5]))
console.log(lemonade([5,10]))
console.log(lemonade([5,20]))
console.log(lemonade([5,5,5,20]))
console.log(lemonade([5,5,10,20]))
