import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styled from 'styled-components';
import Grid from '../components/game/grid';

const wordsList = ['hello', 'console', 'world', 'react', 'native'];
// const wordToGuess = wordsList[Math.floor(Math.random() * wordsList.length)];
const wordToGuess = 'console';
let guessingWord = wordToGuess[0] + wordToGuess.substring(1).replace(/./g, '_');

const Game = () => {
  const [input, setInput] = React.useState('');

  const letterFound = word => {
    if (word.length !== wordToGuess.length) {
      alert(`Worl should be ${wordToGuess.length} letters long`);
      return;
    }
    for (let i = 0; i < word.length; i++) {
      if (wordToGuess[i] === word[i]) {
        console.log(
          `letter found on index ${i} / input: ${word[i]} / wordToGuess: ${wordToGuess[i]}`,
        );
        console.log('guessingWord1', guessingWord);
        guessingWord.split().splice(i, 1, wordToGuess[i]);
        console.log('guessingWord@', guessingWord);
      }
    }
    foundWord(guessingWord);
  };

  const foundWord = word => {
    console.log('word', word, 'wordToGuess', wordToGuess);
    if (word === wordToGuess) {
      alert('You won!');
    }
  };
  return (
    <View>
      <Grid numCells={guessingWord.length} guessingWord={guessingWord} />
      <TextInputContainer>
        <TextInputStyled value={input} onChangeText={text => setInput(text)} />
      </TextInputContainer>
      <Text>{input}</Text>
      <TouchableOpacity onPress={() => letterFound(input)}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const TextInputContainer = styled.View`
  margin: 10px;
`;

const TextInputStyled = styled.TextInput`
  background-color: white;
  padding: 12px;
  border-radius: 12px;
  color: #0f4c61;
`;

export default Game;
