import React, { useState } from 'react'
import { Text, View, TextInput, Image } from 'react-native'
import Button from '../Button'
import PropTypes from 'prop-types'
import styles from './styles'
import questioner from '../../../assets/questioner.jpg'

const isEqual = (string1, string2) => string1.toUpperCase().trim() === string2.toUpperCase().trim()

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState('')

  const { title, answer } = question

  const onButtonPress = () => {
    // TODO: hide keyboard

    isEqual(input, answer)
      ? onCorrect()
      : onWrong()

    setInput('')
  }

  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>

      <View style={styles.header}>
        <Image
          style={styles.questioner}
          source={questioner}
        />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{title}</Text>
        </View>
      </View>

      <TextInput
        style={styles.textInput}
        placeholder='Type in English'
        value={input}
        onChangeText={setInput}
        textAlignVertical='top'
        multiline
      />
      {/* TODO: add clear scratch button */}

      <Button onPress={onButtonPress} disabled={!input} />
    </>
  )
}

OpenEndedQuestion.propTypes = {
  question: PropTypes.shape({
    title: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  onCorrect: PropTypes.func.isRequired,
  onWrong: PropTypes.func,
}

OpenEndedQuestion.defaultProps = {
  onWrong: () => { },
}

export default OpenEndedQuestion
