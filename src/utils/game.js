import React from 'react';
import Cell from '../components/game/cell';

const letterFound = (wordInput, wordToGuess, guessingWord) => {
  if (wordInput.length !== wordToGuess.length) {
    alert(`World should be ${wordToGuess.length} letters long`);
    return;
  }
  for (let i = 0; i < wordInput.length; i++) {
    if (wordToGuess[i] === wordInput[i]) {
      guessingWord =
        guessingWord.substring(0, i) +
        wordInput[i] +
        guessingWord.substring(i + 1);
    }
  }
  foundWord(guessingWord);
  return guessingWord;
};

const foundWord = (wordInput, wordToGuess) => {
  // console.log('word', word, 'wordToGuess', wordToGuess);
  if (wordInput === wordToGuess) {
    console.log('You won!');
  }
};

const fillGrid = (grid, numCells, guessingWord, tries, input) => {
  for (let i = 0; i < numCells; i++) {
    grid[tries].push(
      <Cell key={i} letter={input[i] ? input[i] : guessingWord[i]} />,
    );
  }
  for (let i = tries + 1; i < grid.length; i++) {
    for (let j = 0; j < numCells; j++) {
      grid[i].push(<Cell key={`empty ${j}`} letter={' '} />);
    }
  }
  return grid;
};

export default {letterFound, foundWord, fillGrid};
