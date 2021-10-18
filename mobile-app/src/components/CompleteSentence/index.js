import React, { useState } from 'react'
import { Text, View, TextInput, Image } from 'react-native'
import Button from '../Button'
import PropTypes from 'prop-types'
import styles from './styles'

const CompleteSentence = ({ question, onCorrect, onWrong }) => {
  const sentence = 'una niña, una'
  const options = ['yo', 'el', 'mujer']

  return (
    <>
      <Text style={styles.title}>Complete the sentence</Text>

      <Image style={styles.image} source={{ uri: question.image }} />

      <View style={styles.body}>
        <View style={styles.sentenceContainer}>
          <Text style={[styles.text, { textDecorationLine: 'underline' }]}>{sentence}</Text>
          <View style={styles.sentenceSpot}>
          </View>
        </View>

        <View style={styles.optionsContainer}>
          {options.map(option => {
            return (
              <View style={styles.optionContainer}>
                <Text style={styles.text}>{option}</Text>
              </View>
            )
          })}

        </View>
      </View>

      <Button />
    </>
  )
}

CompleteSentence.propTypes = {
  question: PropTypes.shape({
    sentence: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        correct: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,
  onCorrect: PropTypes.func.isRequired,
  onWrong: PropTypes.func,
}

CompleteSentence.defaultProps = {
  onWrong: () => { },
}

export default CompleteSentence
