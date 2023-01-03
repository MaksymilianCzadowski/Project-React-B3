import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styled from 'styled-components';
import Grid from '../components/game/grid';
import Motus from '../utils/game';

const wordsList = ['hello', 'console', 'world', 'react', 'native'];
const wordToGuess = wordsList[Math.floor(Math.random() * wordsList.length)];
let guessingWord = wordToGuess[0] + wordToGuess.substring(1).replace(/./g, '_');

const Game = () => {
  const [currentGuessing, setCurrentGuessing] = React.useState('');
  const [tries, setTries] = React.useState(0);
  const [grid, setGrid] = React.useState([]);
  const [history, setHistory] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);

  const submit = async () => {
    if (currentGuessing.length === wordToGuess.length) {
      if (currentGuessing === wordToGuess) {
        setGameOver(true);
        return;
      }
      guessingWord = Motus.letterFound(
        currentGuessing,
        wordToGuess,
        guessingWord,
      );
      setHistory([...history, currentGuessing]);
      setGrid(...grid, guessingWord);
      setTries(tries + 1);
      setCurrentGuessing('');
    }
  };

  return (
    <View>
      <Grid
        grid={grid}
        changeValue={setGrid}
        currentGuessing={currentGuessing}
        wordToGuess={wordToGuess}
        tries={tries}
        guessingWord={guessingWord}
        history={history}
      />
      <TextInputContainer>
        <TextInputStyled
          maxLength={wordToGuess.length}
          value={currentGuessing}
          onChangeText={text => setCurrentGuessing(text)}
        />
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
