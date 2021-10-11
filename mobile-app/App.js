import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './App.styles';
import ImageOption from './src/components/ImageOption';
import question from './assets/data/oneQuestionWithOption'

const { title, options } = question
console.log('starting')

const App = () => {
  const [selected, setSelected] = useState(undefined)

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.optionsContainer}>
        {options.map(({ id, image, text }) => (
          <ImageOption
            key={id}
            image={image}
            text={text}
            isSelected={selected === id}
            onPress={() => setSelected(id)}
          />
        ))}
      </View>

    </View>
  );
}
export default App
