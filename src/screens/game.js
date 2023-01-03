/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styled from 'styled-components';
import Grid from '../components/game/grid';
import Motus from '../utils/game';
import WinAlert from '../components/game/winAlert';

const randomWord = () => {
  return wordsList[Math.floor(Math.random() * wordsList.length)];
};

const wordsList = ['hello', 'console', 'world', 'react', 'native'];
let wordToGuess = randomWord().toUpperCase();
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

  const reset = () => {
    console.log('reset');
    setTries(0);
    setGrid([]);
    setHistory([]);
    setGameOver(false);
    setCurrentGuessing('');
    wordToGuess = randomWord();
    guessingWord = wordToGuess[0] + wordToGuess.substring(1).replace(/./g, '_');
  };

  return (
    <ViewContent>
      <WinAlert gameOver={gameOver} wordToGuess={wordToGuess} newGame={reset} />
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
          onChangeText={text => setCurrentGuessing(text.toUpperCase())}
        />
      </TextInputContainer>
      <TouchableOpacity onPress={() => submit()}>
        <Text>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => reset()}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </ViewContent>
  );
};

const TextInputContainer = styled.View`
  margin: 10px;
`;

const TextInputStyled = styled.TextInput`
  backgroundColor: white;
  padding: 12px;
  border-radius: 12px;
  color: #0f4c61;
`;

const ViewContent = styled.View`
  backgroundColor: #0f4c61;
`;

export default Game;
