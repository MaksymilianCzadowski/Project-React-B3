/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import styled from 'styled-components';

const WinAlert = ({gameOver, wordToGuess, reset }) => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (gameOver) {
      setModalVisible(true);
    }
  }, [gameOver]);

  return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ModalContent>
          <Title>Félicitation !</Title>
          <Subtitle>Le mot était {wordToGuess}</Subtitle>
          <Button onPress={() => {
            reset();
            setModalVisible(!modalVisible);
          }} >
            <ButtonText>Rejouer</ButtonText>
          </Button>
        </ModalContent>
      </Modal>
  );
};

const ModalContent = styled.View`
backgroundColor: white;
padding: 22px;
justifyContent: center;
alignItems: center;
borderRadius: 20px;
borderColor: 'rgba(0, 0, 0, 0.1)';
width: 200px;
height: 200px;
position: absolute;
top: 35%;
left: 25%;
`;

const Title = styled.Text`
  fontSize: 20px;
  marginBottom: 12px;
`;

const Subtitle = styled.Text`
  fontSize: 16px;
  marginBottom: 12px;
`;

const CenteredView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  borderRadius: 20px;
`;

const Button = styled.TouchableOpacity`
  backgroundColor: #0f4c61;
  borderRadius: 20px;
  padding: 10px;
  elevation: 2;
`;

const ButtonText = styled.Text`
  color: white;
  fontWeight: bold;
  textAlign: center;
`;

export default WinAlert;
