import React from 'react';
import Routes from './src/config/routes';
import Sound from 'react-native-sound';

const App = () => {
  const sound = new Sound(require('./assets/motus-generic.mp3'), error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    sound.play();
  });
  return <Routes />;
};

export default App;
