/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import Logo from '../components/logo';

const Home = ({navigation}) => {
  const playGame = () => {
    navigation.navigate('Game');
  };

  return (
    <ViewContent>
      <Logo />
      <ButtonSelect onPress={playGame}>
        <TextCenter>Play</TextCenter>
      </ButtonSelect>
      <ButtonSelect>
        <TextCenter>Settings</TextCenter>
      </ButtonSelect>
    </ViewContent>
  );
};

const ButtonSelect = styled.TouchableOpacity`
  background-color: white;
  padding: 12px;
  border-radius: 10px;
  margin: 10px;
  elevation: 10;
`;

const TextCenter = styled.Text`
  text-align: center;
  color: #0f4c61;
  font-size: 24px;
  font-weight: bold;
`;

const ViewContent = styled.View`
  backgroundColor: #0f4c61;
  height: 100%;
`;

export default Home;
