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
  const [questionIndex, setQuestionIndex] = useState(0)
  const [question, setQuestion] = useState(questions[questionIndex])
  const [lives, setLives] = useState(5)

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
  const restartGame = () => {
    setQuestionIndex(0)
    setLives(5)
  }

  const onWrong = () => {
    if (lives <= 0) {
      Alert.alert("Game Over", "Try Again", [{
        text: "Try Again",
        onPress: restartGame,
      }])
    } else {
      Alert.alert("wrooong")
      setLives(lives - 1)
    }
  }

  return (
    <View style={styles.root}>
      <Header
        progress={questionIndex / questions.length}
        lives={lives}
      />

      <OpenEndedQuestion
        question={question}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
      {/* <MultipleChoiceQuestion
        question={question}
        onCorrect={onCorrect}
        onWrong={onWrong}
      /> */}

    </View>
  )
}

export default App
