import React, { useEffect, useState } from 'react'
import { Text, View, Alert } from 'react-native'
import PropTypes from 'prop-types'
import ImageOption from '../ImageOption'
import Button from '../Button'
import styles from './styles'

const MultipleChoiceQuestion = ({ question, onCorrect, onWrong }) => {
  const [selected, setSelected] = useState(undefined)

  const { title, options } = question

  const onButtonPress = () => {
    selected.correct
      ? onCorrect()
      : onWrong()

    setSelected(undefined)
  }

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

      <Button onPress={onButtonPress} disabled={!selected} />
    </>
  )
}

MultipleChoiceQuestion.propTypes = {
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

MultipleChoiceQuestion.defaultProps = {
  onWrong: () => { },
}

export default MultipleChoiceQuestion
