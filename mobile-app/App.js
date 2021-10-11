import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './App.styles';
import ImageOption from './src/components/ImageOption';


console.log('starting')

const App = () => (
  <View style={styles.root}>
    <Text style={styles.title}>Wich of these is the "glass"?</Text>

    <View style={styles.optionsContainer}>
      {Array.from(Array(1).keys()).map(idx => (
        <ImageOption key={idx} />
      ))}
    </View>

  </View>
);

export default App
