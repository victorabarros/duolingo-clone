import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';


const ImageOption = ({ image, text, isSelected, onPress }) => {
  return (
    <Pressable
      style={[styles.optionContainer, isSelected && styles.selectedOptionContainer]}
      onPress={onPress}
    >
      <Image
        source={{ uri: image }}
        style={styles.optionImage}
        resizeMode='contain'
      />
      <Text style={isSelected ? styles.selectedOptionText : styles.optionText}>{text}</Text>
    </Pressable >
  )
}

ImageOption.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
}

ImageOption.defaultProps = {
  image: 'https://avatars.githubusercontent.com/u/42843223?v=4', // TODO find for a better default image
  isSelected: false,
  onPress: () => { },
}

export default ImageOption
