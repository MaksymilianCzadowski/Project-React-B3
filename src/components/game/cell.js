import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const Cell = ({letter}) => {
  return (
    <CellView>
      <Letter>{letter}</Letter>
    </CellView>
  );
};

const CellView = styled.View`
  borderwidth: 1px;
  margin: 5px;
  background-color: #0f4c61;
  width: 40px;
  height: 40px;
  justify-content: center;
`;

const Letter = styled.Text`
  color: white;
  font-size: 24px;
  text-align: center;
`;

export default Cell;
