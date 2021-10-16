import React, { useEffect, useState } from 'react'
import { View, Alert } from 'react-native'
import styles from './App.styles'
import question from './assets/data/oneQuestionWithOption'
import Question from './src/components/Question'
const questions = [question]


const App = () => {
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

  const onCorrect = () => {
    Alert.alert("correct")
    setQuestionIndex(questionIndex + 1)
  }

  return (
    <View style={styles.root}>
      <Question
        question={question}
        onCorrect={onCorrect}
        onWrong={() => Alert.alert("wrooong")} />
    </View>
  )
}

export default App
