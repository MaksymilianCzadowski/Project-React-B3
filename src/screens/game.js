import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styled from 'styled-components';
import Grid from '../components/game/grid';
import Motus from '../utils/game';

const wordsList = ['hello', 'console', 'world', 'react', 'native'];
const wordToGuess = wordsList[Math.floor(Math.random() * wordsList.length)];
let guessingWord = wordToGuess[0] + wordToGuess.substring(1).replace(/./g, '_');

const Game = () => {
  const [input, setInput] = React.useState('');
  const [grid, setGrid] = React.useState([]);
  const [tries, setTries] = React.useState(0);

  const submit = async () => {
    if (input.length === wordToGuess.length) {
      await setGrid(input);
      setTries(tries + 1);
      console.log('grid', grid);
      Motus.letterFound(input, wordToGuess, guessingWord);
      setInput('');
    }
  };

  return (
    <View>
      <Grid
        numCells={guessingWord.length}
        guessingWord={guessingWord}
        input={input}
        tries={tries}
      />
      <TextInputContainer>
        <TextInputStyled value={input} onChangeText={text => setInput(text)} />
      </TextInputContainer>
      <TouchableOpacity onPress={() => submit()}>
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
