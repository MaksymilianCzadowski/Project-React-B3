import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Cell from './cell';

const Grid = ({numCells, guessingWord}) => {
  console.log('numCells', numCells);
  const cells = [];
  for (let i = 0; i < numCells; i++) {
    cells.push(<Cell key={i} letter={guessingWord[i]} />);
  }
  return <Row>{cells}</Row>;
};

const Row = styled.View`
  flex-direction: row;
`;

export default Grid;
