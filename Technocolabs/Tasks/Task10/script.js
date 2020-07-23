function determineWinner(userChoice, computerChoice) {
if (userChoice === computerChoice) {
  return 'The game is a tie!';
} // closing if tie clause!!!
  
else if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
     return 'Computer Won!';
  } else {
     return 'You won!';
 } 
}

else if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'Computer won!';
  } else {
    return 'You won!';
  }
} 
else if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'Computer won!';
  } else {
    return 'You won!';
    
  }
 }
}