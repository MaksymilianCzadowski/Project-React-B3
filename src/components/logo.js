import React from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components';

const Logo = () => {
  return (
    <View>
      <LogoView source={require('../assets/img/tusmo-logo.png')} />
    </View>
  );
};

const LogoView = styled.Image`
  width: 100%;
  height: 110px;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export default Logo;
