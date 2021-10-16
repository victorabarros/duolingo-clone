import React from 'react'
import { Pressable, Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const Button = ({ text, onPress, disabled, ...props }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, disabled && styles.disabledContainer]}
      disabled={disabled}
      {...props}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

Button.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  onPress: () => console.log('click'),
  disabled: false,
}

export default Button
