import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styled from 'styled-components';
import Grid from '../components/game/grid';

const wordsList = ['hello', 'console', 'world', 'react', 'native'];
const wordToGuess = wordsList[Math.floor(Math.random() * wordsList.length)];
const guessingWord = wordToGuess.split('').map(letter => '_');
const grid = [];

const Game = () => {
  const [input, setInput] = React.useState('');

  return (
    <View>
      <Grid numCells={guessingWord.length} guessingWord={wordToGuess} />
      <TextInputContainer>
        <TextInputStyled value={input} onChangeText={text => setInput(text)} />
      </TextInputContainer>
      <Text>{input}</Text>
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
