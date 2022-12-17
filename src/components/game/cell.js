import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const Cell = ({letter}) => {
  return (
    <CellView>
      <Text>{letter}</Text>
    </CellView>
  );
};

const CellView = styled.View`
  borderwidth: 1px;
`;

export default Cell;
