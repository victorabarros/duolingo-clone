import React, { useEffect, useState } from 'react'
import { Text, View, Alert } from 'react-native'
import PropTypes from 'prop-types'
import ImageOption from '../ImageOption'
import Button from '../Button'
import styles from './styles'

const Question = ({ question, onCorrect, onWrong }) => {
  const [selected, setSelected] = useState(undefined)

  const onButtonPress = () => {
    selected.correct
      ? onCorrect()
      : onWrong()

    setSelected(undefined)
  }

  const { title, options } = question

  return (
    <>
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
    </>
  )
}

Question.propTypes = {
  question: PropTypes.shape({
    title: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        correct: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,
  onCorrect: PropTypes.func.isRequired,
  onWrong: PropTypes.func,
}

Button.defaultProps = {
  onWrong: () => { },
}

export default Question
