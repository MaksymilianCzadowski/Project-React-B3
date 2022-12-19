import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Cell from './cell';

const Grid = ({numCells, guessingWord, input}) => {
  const cells = [];
  for (let i = 0; i < numCells; i++) {
    cells.push(<Cell key={i} letter={input[i] ? input[i] : guessingWord[i]} />);
  }
  return <Row>{cells}</Row>;

  // let cells = [[], [], [], [], [], []];

  // for (let i = 0; i < cells.length; i++) {
  //   for (let j = 0; j < numCells; j++) {
  //     cells[i][j] = <Cell key={j} letter={''} />;
  //   }
  // }

  // for (let i = 0; i < numCells; i++) {
  //   cells[tries][i] = (
  //     <Cell key={i} letter={input[i] ? input[i] : guessingWord[i]} />
  //   );
};

const Row = styled.View`
  flex-direction: row;
`;

export default Grid;
