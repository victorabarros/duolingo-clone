import React, { useEffect, useState } from 'react'
import { View, Alert } from 'react-native'
import styles from './App.styles'

// import question from './assets/data/oneQuestionWithOption'
// const questions = [question]
import questions from './assets/data/openEndedQuestion'
import Header from './src/components/Header'

// import MultipleChoiceQuestion from './src/components/MultipleChoiceQuestion'
import OpenEndedQuestion from './src/components/OpenEndedQuestion'

console.log("starting")

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(1)
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
      <Header progress={questionIndex / questions.length} lives={5} />

      <OpenEndedQuestion
        question={question}
        onCorrect={onCorrect}
        onWrong={() => Alert.alert("wrooong")}
      />
      {/* <MultipleChoiceQuestion
        question={question}
        onCorrect={onCorrect}
        onWrong={() => Alert.alert("wrooong")}
      /> */}

    </View>
  )
}

export default App
