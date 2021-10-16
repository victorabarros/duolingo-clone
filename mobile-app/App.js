import React, { useState } from 'react'
import { Text, View, Alert } from 'react-native'
import styles from './App.styles'
import ImageOption from './src/components/ImageOption'
import question from './assets/data/oneQuestionWithOption'
import Button from './src/components/Button'

const questions = [question]
console.log('starting')

const App = () => {
  const [selected, setSelected] = useState(undefined)
  const [question, setQuestion] = useState(questions[0])
  const { title, options } = question


  const onButtonPress = () => {
    if (selected.correct) {
      Alert.alert("correct")
      // TODO: move p next question
    } else {
      Alert.alert("wrooong")
      // TODO: move p next question
    }
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.optionsContainer}>
        {options.map((option) => {
          const { id, text, image } = option
          return (
            <ImageOption
              key={id}
              image={image}
              text={text}
              isSelected={selected?.id === id}
              onPress={() => setSelected(option)}
            />
          )
        })}
      </View>

      <Button text="Check" onPress={onButtonPress} disabled={!selected} />

    </View>
  )
}

export default App
