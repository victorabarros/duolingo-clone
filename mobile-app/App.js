import React from 'react';
import { Text, View } from 'react-native';
import styles from './App.styles';
import ImageOption from './src/components/ImageOption';
import question from './assets/data/oneQuestionWithOption'

const { title, options } = question
console.log('starting')

const App = () => (
  <View style={styles.root}>
    <Text style={styles.title}>{title}</Text>

    <View style={styles.optionsContainer}>
      {options.map(({ id, image, text }) => (
        <ImageOption
          key={id}
          image={image}
          text={text}
        />
      ))}
    </View>

  </View>
);

export default App
