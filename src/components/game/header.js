import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components';
import ImageResizer from '@bam.tech/react-native-image-resizer';

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
    <View>
      {imageUri && (
        <Image
          source={{uri: imageUri}}
          style={{width: newWidth, height: newHeight}}
        />
      )}
    </View>
  );
};

const LogoView = styled.Image`
  width: 100%;
  height: 50px;
  margin: auto;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export default Header;
