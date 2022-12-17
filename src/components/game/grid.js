import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Cell from './cell';

const Grid = ({numCells, guessingWord}) => {
  console.log('numCells', numCells);
  const cells = [];
  for (let i = 0; i < numCells; i++) {
    cells.push(<Cell key={i} letter={guessingWord[i]} />);
  }
  return <View>{cells}</View>;
};

export default Grid;
