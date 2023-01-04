import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const Cell = ({letter, wordToGuess, validated, letterToGuess}) => {
  const guessedLetter = () => {
    if (letter === ' ') {
      return '#0f4c61';
    }
    if (letterToGuess === letter) {
      return 'red';
    }
    if (wordToGuess.includes(letter)) {
      return '#f7b735';
    } else {
      return '#0f4c61';
    }
  };
  return (
    <CellView validated={validated} color={guessedLetter()}>
      <Letter>{letter}</Letter>
    </CellView>
  );
};

const CellView = styled.View`
  borderwidth: 1px;
  margin: 5px;
  background-color: #0f4c61;
  background-color: ${props => (props.validated ? props.color : '#0f4c61')};
  width: 40px;
  height: 40px;
  justify-content: center;
  border: 2px;
  border-color: white;
`;

const Letter = styled.Text`
  color: white;
  font-size: 24px;
  text-align: center;
  fontweight: bold;
`;

export default Cell;
