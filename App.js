import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewStart from './components/viewStart';
import TextStart from './components/textStart';
import TextStartTo from './components/textStartTo';
import ButtonStart from './components/buttonStart';
import ImageStart from './components/imageStart';
import ImageStartTo from './components/imageStartTo';
import TextInputStart from './components/TextInputStart';
import AlertStart from './components/alertStart';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ViewStart></ViewStart>
      <TextStart></TextStart>
      <TextStartTo></TextStartTo>
      <ButtonStart></ButtonStart> 
      <ImageStart></ImageStart> 
      <ImageStartTo></ImageStartTo> 
      <TextInputStart></TextInputStart> */}
      <AlertStart></AlertStart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font:{
    fontSize: 20,
    lineHeight:30,
    color:"pink"
  }
});
