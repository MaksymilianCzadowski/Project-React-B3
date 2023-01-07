import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styled from 'styled-components';
import Grid from '../components/game/grid';
import Motus from '../utils/game';
import WinAlert from '../components/game/winAlert';
import Header from '../components/game/header';
import Keyboard from '../components/game/keyboard';

const randomWord = () => {
  return wordsList[Math.floor(Math.random() * wordsList.length)].toUpperCase();
};

const wordsList = ['hello', 'console', 'world', 'react', 'native'];
let wordToGuess = randomWord();
let guessingWord = wordToGuess[0] + wordToGuess.substring(1).replace(/./g, '_');

const Game = ({navigation}) => {
  const [currentGuessing, setCurrentGuessing] = React.useState('');
  const [tries, setTries] = React.useState(0);
  const [grid, setGrid] = React.useState([]);
  const [history, setHistory] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);

  const goHome = () => {
    console.log('goHome');
    navigation.navigate('Home');
  };

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
      <Header goHome={goHome} />
      <WinAlert gameOver={gameOver} wordToGuess={wordToGuess} reset={reset} />
      <Grid
        grid={grid}
        changeValue={setGrid}
        currentGuessing={currentGuessing}
        wordToGuess={wordToGuess}
        tries={tries}
        guessingWord={guessingWord}
        history={history}
      />
      <Keyboard
        setCurrentGuessing={setCurrentGuessing}
        currentGuessing={currentGuessing}
        submit={submit}
        wordToGuess={wordToGuess}
      />
    </ViewContent>
  );
};

const ViewContent = styled.View`
  background-color: #0f4c61;
  height: 100%;
`;

export default Game;
