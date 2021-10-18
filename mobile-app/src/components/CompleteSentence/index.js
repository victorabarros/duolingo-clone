import React, { useState } from 'react'
import { Text, View, Pressable, Image } from 'react-native'
import Button from '../Button'
import PropTypes from 'prop-types'
import styles from './styles'

const Option = ({ text, isSelected, onPress }) => {
  return (
    <Pressable
      style={[styles.optionContainer, isSelected && { backgroundColor: 'lightgray' }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: (isSelected ? 'lightgray' : 'black') }]}>{text}</Text>
    </Pressable>
  )
}

const CompleteSentence = ({ question, onCorrect, onWrong }) => {
  const [selected, setSelected] = useState(undefined)

  const { image, sentence, options } = question

  const onButtonPress = () => {
    selected.correct
      ? onCorrect()
      : onWrong()

    setSelected(undefined)
  }

  return (
    <>
      <Text style={styles.title}>Complete the sentence</Text>

      <Image style={styles.image} source={{ uri: image }} />

      <View style={styles.body}>
        <View style={styles.sentenceContainer}>
          <Text style={[styles.text, { textDecorationLine: 'underline' }]}>{sentence}</Text>
          <View style={styles.sentenceSpot}>
            {selected && (
              <Option
                text={selected.text}
                onPress={() => setSelected(undefined)}
              />
            )}
          </View>
        </View>

        <View style={styles.optionsContainer}>

          {options.map(option => {
            const { id, text } = option
            return <Option
              key={id}
              text={text}
              isSelected={selected?.id === id}
              onPress={() => setSelected(option)}
            />
          })}

        </View>
      </View>

      <Button onPress={onButtonPress} disabled={!selected} />
    </>
  )
}

CompleteSentence.propTypes = {
  question: PropTypes.shape({
    image: PropTypes.string.isRequired,
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
