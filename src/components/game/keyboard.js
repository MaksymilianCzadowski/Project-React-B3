import React from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components';

const Keyboard = ({
  setCurrentGuessing,
  currentGuessing,
  submit,
  wordToGuess,
}) => {
  const letters = 'AZERTYUIOPQSDFGHJKLMWXCVBN';

  const addLetter = letter => {
    if (currentGuessing.length < wordToGuess.length) {
      setCurrentGuessing(currentGuessing + letter);
    }
  };

  return (
    <Column>
      <ViewRow>
        {letters
          .slice(0, 10)
          .split('')
          .map((letter, index) => (
            <ButtonSelect key={index} onPress={() => addLetter(letter)}>
              <TextCenter key={index}>{letter}</TextCenter>
            </ButtonSelect>
          ))}
      </ViewRow>
      <ViewRow>
        {letters
          .slice(10, 19)
          .split('')
          .map((letter, index) => (
            <ButtonSelect key={index} onPress={() => addLetter(letter)}>
              <TextCenter key={index}>{letter}</TextCenter>
            </ButtonSelect>
          ))}
      </ViewRow>
      <ViewRow>
        <BigButton
          onPress={() => setCurrentGuessing(currentGuessing.slice(0, -1))}>
          <ImageButton source={require('../../assets/img/delete.png')} />
        </BigButton>
        {letters
          .slice(19)
          .split('')
          .map((letter, index) => (
            <ButtonSelect key={index} onPress={() => addLetter(letter)}>
              <TextCenter key={index}>{letter}</TextCenter>
            </ButtonSelect>
          ))}
        <BigButton onPress={() => submit()}>
          <ImageButton source={require('../../assets/img/enter.png')} />
        </BigButton>
      </ViewRow>
    </Column>
  );
};

const ButtonSelect = styled.TouchableOpacity`
  border-radius: 3px;
  background-color: #0f4c61;
  border: 1px solid white;
  width: 30px;
  height: 45px;
  justify-content: center;
`;

const ImageButton = styled.Image`
  width: 50px;
  height: 45px;
`;

const ViewRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 1px 5px 0;
`;

const TextCenter = styled.Text`
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

const BigButton = styled.TouchableOpacity`
  background-color: #0f4c61;
  width: 60px;
  height: 45px;
`;

const Column = styled.View`
  flex-direction: column;
  margin: 15px;
`;

export default Keyboard;
