import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

const Login = ({navigation}) => {
  const [input, setInput] = React.useState({email: '', password: ''});

  const logMeIn = () => {
    if (input.email === 'Maks' && input.password === 'azerty') {
      navigation.navigate('Home');
    } else {
      alert('Invalid Credentials');
    }
  };

  const logGuest = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <View>
        <TextInputContainer>
          <TextInputStyled
            value={input.email}
            onChangeText={text => setInput({...input, email: text})}
          />
        </TextInputContainer>
        <TextInputContainer>
          <TextInputStyled
            value={input.password}
            onChangeText={text => setInput({...input, password: text})}
            secureTextEntry={true}
          />
        </TextInputContainer>
        <LoginButton onPress={logMeIn}>
          <TextCenter>Login</TextCenter>
        </LoginButton>
        <TouchableOpacity onPress={logGuest}>
          <TextCenter>Play as guest</TextCenter>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const LoginButton = styled.TouchableOpacity`
  background-color: white;
  padding: 12px;
  border-radius: 4px;
  margin: 10px;
`;

const TextCenter = styled.Text`
  text-align: center;
  color: #0f4c61;
`;

const TextInputContainer = styled.View`
  margin: 10px;
`;

const TextInputStyled = styled.TextInput`
  background-color: white;
  padding: 12px;
  border-radius: 12px;
  color: #0f4c61;
`;

export default Login;
