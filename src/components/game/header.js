import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components';
import ImageResizer from '@bam.tech/react-native-image-resizer';
import {SafeAreaView} from 'react-native-safe-area-context';

const Header = () => {
  const [imageUri, setImageUri] = useState(null);

  const imageUrl = '../../assets/img/tusmo-logo.png';
  const newWidth = 100;
  const newHeight = 50;

  useEffect(() => {
    ImageResizer.createResizedImage(imageUrl, newWidth, newHeight, 'PNG', 100)
      .then(response => {
        const {uri} = response;
        setImageUri(uri);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <HeaderDiv>
      <ViewDiv>
        <HomeButt>{/* ici mettre le logo de home */}</HomeButt>
        <LogoView
          resizeMode="cover"
          source={require('../../assets/img/tusmo-logo.png')}
        />
      </ViewDiv>
    </HeaderDiv>
  );
};

const LogoView = styled.Image`
  width: 100%;
  height: 100%;
`;
const ViewDiv = styled.View`
  width: 260px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HomeButt = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: absolute;
  left: -50px;
  border-radius: 10px;
  top: 20px;
`;
const HeaderDiv = styled.View`
  width: 100%;
  height: 100px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export default Header;
