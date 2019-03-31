// Code your solutions in this file
function printBadges(names) {
  for (let i=0; i < names.length; i++) {
    console.log(`Welcome ${names[i]}! You are employee #${i+1}.`)
  }
  return names
}

function tailsNeverFails() {
  let outcomes = 0
  let flip
  while (flip !== false){
    if (Math.random() >= 0.5) {
      outcomes += 1
    } else {
      return `You got ${outcomes} tails in a row!`
    }
  }
}
