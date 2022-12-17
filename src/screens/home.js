import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const Home = ({navigation}) => {
  const playGame = () => {
    navigation.navigate('Game');
  };

  return (
    <View>
      <ButtonSelect onPress={playGame}>
        <TextCenter>Play</TextCenter>
      </ButtonSelect>
      <ButtonSelect>
        <TextCenter>Settings</TextCenter>
      </ButtonSelect>
    </View>
  );
};

const ButtonSelect = styled.TouchableOpacity`
  background-color: white;
  padding: 12px;
  border-radius: 4px;
  margin: 10px;
`;

const TextCenter = styled.Text`
  text-align: center;
  color: #0f4c61;
`;

export default Home;
