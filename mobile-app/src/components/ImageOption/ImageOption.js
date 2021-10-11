import React from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';


const ImageOption = ({ image, text }) => {
  return (
    < View style={styles.optionContainer} >
      <Image
        source={{ uri: image }}
        style={styles.optionImage}
        resizeMode='contain'
      />
      <Text style={styles.optionText}>{text}</Text>
    </View >
  )
}

ImageOption.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string.isRequired,
}

ImageOption.defaultProps = {
  image: 'https://avatars.githubusercontent.com/u/42843223?v=4', // TODO find for a better default image
}

export default ImageOption
