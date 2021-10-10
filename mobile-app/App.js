import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './App.styles'

const App = () => (
  <View style={styles.root}>
    <Text style={styles.title}>Wich of these is the "glass"?</Text>

    <View style={styles.optionsContainer}>
      {Array.from(Array(3).keys()).map(idx => (
        <View key={idx} style={styles.optionContainer}>
          <Image
            source={{ uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png" }}
            style={styles.optionImage}
            resizeMode='contain'
          />
          <Text style={styles.optionText}>Glass</Text>
        </View>
      ))}
    </View>

  </View>
);

export default App
