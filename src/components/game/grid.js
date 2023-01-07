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
  validated,
}) => {
  let gridDisplay = [[], [], [], [], [], []];
  for (let i = 0; i < wordToGuess.length; i++) {
    gridDisplay[tries].push(
      <Cell
        key={i}
        letter={
          currentGuessing[i]
            ? currentGuessing[i]
            : i === 0
            ? wordToGuess[0]
            : ' '
        }
        wordToGuess={wordToGuess}
        isGuessing={currentGuessing[i] !== '_' ? true : false}
      />,
    );
  }
  for (let i = 0; i < gridDisplay.length; i++) {
    if (i < tries) {
      for (let j = 0; j < wordToGuess.length; j++) {
        gridDisplay[i].push(
          <Cell
            key={`empty ${j}`}
            letter={history[i][j]}
            wordToGuess={wordToGuess}
            letterToGuess={wordToGuess[j]}
            validated={true}
          />,
        );
      }
    } else if (i > tries) {
      for (let j = 0; j < wordToGuess.length; j++) {
        gridDisplay[i].push(<Cell key={`empty ${j}`} letter={' '} />);
      }
    }
  }
  return (
    <CenteredView>
      {gridDisplay.map((row, index) => (
        <Row key={index}>{row}</Row>
      ))}
    </CenteredView>
  );
};

const Row = styled.View`
  flex-direction: row;
`;

const CenteredView = styled.View`
  justify-content: center;
  align-items: center;
`;

export default Grid;
