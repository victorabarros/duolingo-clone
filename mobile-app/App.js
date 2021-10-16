import React, { useEffect, useState } from 'react'
import { Text, View, Alert } from 'react-native'
import styles from './App.styles'
import ImageOption from './src/components/ImageOption'
import Button from './src/components/Button'
import question from './assets/data/oneQuestionWithOption'
const questions = [question]

console.log('starting')

const App = () => {
  const [selected, setSelected] = useState(undefined)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [question, setQuestion] = useState(questions[questionIndex])

  useEffect(() => {
    if (questionIndex >= questions.length) {
      Alert.alert("You won")
      setQuestionIndex(0)
    } else {
      setQuestion(questions[questionIndex])
    }
  }, [questionIndex])

  const onButtonPress = () => {
    if (selected.correct) {
      Alert.alert("correct")
      // TODO: move p next question
      setQuestionIndex(questionIndex + 1)
    } else {
      Alert.alert("wrooong")
    }
    setSelected(undefined)
  }

  const { title, options } = question

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
