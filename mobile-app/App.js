import React, { useEffect, useState } from 'react'
import { View, Alert, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './App.styles'
import questions from './assets/data/allQuestions'
import Header from './src/components/Header'
import MultipleChoiceQuestion from './src/components/MultipleChoiceQuestion'
import OpenEndedQuestion from './src/components/OpenEndedQuestion'
import CompleteSentence from './src/components/CompleteSentence'

const Question = (props) => {
  switch (props.question.type) {
    case 'OPEN_ENDED':
      return <OpenEndedQuestion {...props} />
    case 'MULTIPLE_CHOICER':
      return <MultipleChoiceQuestion {...props} />
    case 'COMPLETE_SENTENCE':
      return <CompleteSentence {...props} />
  }
}

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [question, setQuestion] = useState(questions[questionIndex])
  const [lives, setLives] = useState(2)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    if (questionIndex >= questions.length) {
      Alert.alert("You won")
      setQuestionIndex(0)
    } else {
      setQuestion(questions[questionIndex])
    }
  }, [questionIndex])

  useEffect(() => {
    saveData()
  }, [questionIndex, lives])

  const saveData = async () => {
    await AsyncStorage.setItem("questionIndex", questionIndex.toString())
    await AsyncStorage.setItem("lives", lives.toString())
  }

  const loadData = async () => {
    const loadedQuestionIndex = await AsyncStorage.getItem("questionIndex")
    if (loadedQuestionIndex) setQuestionIndex(parseInt(loadedQuestionIndex))

    const loadedLives = await AsyncStorage.getItem("lives")
    if (loadedLives) setLives(parseInt(loadedLives))

    setHasLoaded(true)
  }

  const restartGame = () => {
    setQuestionIndex(0)
    setLives(5)
  }

  const onCorrect = () => {
    // TODO add feedback
    setQuestionIndex(questionIndex + 1)
  }

  const onWrong = () => {
    if (lives <= 0) {
      Alert.alert("Game Over", "", [{
        text: "Try Again",
        onPress: restartGame,
      }])
    } else {
      // TODO add feedback
      setLives(lives - 1)
    }
  }

  if (!hasLoaded) {
    return (
      <View style={styles.root}>
        <ActivityIndicator
          color="blue"
          size="large"
        />
      </View>
    )
  }

  return (
    <View style={styles.root}>

      <Header
        progress={questionIndex / questions.length}
        lives={lives}
      />

      <Question
        question={question}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />

    </View>
  )
}

export default App
