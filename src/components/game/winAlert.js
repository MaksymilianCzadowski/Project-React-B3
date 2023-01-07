import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import styled from 'styled-components';
import Sound from 'react-native-sound';

const WinAlert = ({gameOver, wordToGuess, reset, hasWin}) => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (gameOver) {
      setModalVisible(true);
    }
  }, [gameOver]);

  useEffect(() => {
    if (hasWin) {
      const winSound = new Sound(
        require('../../../assets/letter-found.mp3'),
        error => {
          if (error) {
            console.log('failed to load the sound', error);
            return;
          }
          // for (let i = 0; i < wordToGuess.lenght; i++) {
          //   console.log('play');
          //   winSound.playAsync();
          // }
          // console.log(wordToGuess.lenght);
          // winSound.play(5);
        },
      );
    }
  }, [hasWin]);

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <ModalContent>
        <Title>{hasWin ? 'Félicitation !' : 'Désolé :('}</Title>
        <Subtitle>Le mot était {wordToGuess}</Subtitle>
        <Button
          onPress={() => {
            reset();
            setModalVisible(!modalVisible);
          }}>
          <ButtonText>Rejouer</ButtonText>
        </Button>
      </ModalContent>
    </Modal>
  );
};

const ModalContent = styled.View`
  background-color: white;
  padding: 22px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border-color: 'rgba(0, 0, 0, 0.1)';
  width: 200px;
  height: 200px;
  position: absolute;
  top: 35%;
  left: 25%;
`;

const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 12px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  margin-bottom: 12px;
`;

const Button = styled.TouchableOpacity`
  background-color: #0f4c61;
  border-radius: 20px;
  padding: 10px;
  elevation: 2;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`;

export default WinAlert;
