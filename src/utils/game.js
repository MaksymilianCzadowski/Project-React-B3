const letterFound = (wordInput, wordToGuess, guessingWord) => {
  if (wordInput.length !== wordToGuess.length) {
    alert(`World should be ${wordToGuess.length} letters long`);
    return;
  }
  for (let i = 0; i < wordInput.length; i++) {
    if (wordToGuess[i] === wordInput[i]) {
      console.log(
        `letter found on index ${i} / input: ${wordInput[i]} / wordToGuess: ${wordToGuess[i]}`,
      );
      guessingWord =
        guessingWord.substring(0, i) +
        wordInput[i] +
        guessingWord.substring(i + 1);
      console.log('guessingWord', guessingWord);
    }
  }
  foundWord(guessingWord);
};

const foundWord = (wordInput, wordToGuess) => {
  // console.log('word', word, 'wordToGuess', wordToGuess);
  if (wordInput === wordToGuess) {
    alert('You won!');
  }
};

export default {letterFound, foundWord};
