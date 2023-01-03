import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Cell from './cell';

const Grid = ({
  grid,
  tries,
  currentGuessing,
  wordToGuess,
  guessingWord,
  changeValue,
  history,
}) => {
  let gridDisplay = [[], [], [], [], [], []];
  for (let i = 0; i < wordToGuess.length; i++) {
    gridDisplay[tries].push(
      <Cell
        key={i}
        letter={currentGuessing[i] ? currentGuessing[i] : guessingWord[i]}
      />,
    );
  }
  for (let i = 0; i < gridDisplay.length; i++) {
    if (i < tries) {
      for (let j = 0; j < wordToGuess.length; j++) {
        gridDisplay[i].push(<Cell key={`empty ${j}`} letter={history[i][j]} />);
      }
    } else if (i > tries) {
      for (let j = 0; j < wordToGuess.length; j++) {
        gridDisplay[i].push(<Cell key={`empty ${j}`} letter={' '} />);
      }
    }
  }
  return gridDisplay.map((row, index) => <Row key={index}>{row}</Row>);
};

const Row = styled.View`
  flex-direction: row;
`;

export default Grid2;
