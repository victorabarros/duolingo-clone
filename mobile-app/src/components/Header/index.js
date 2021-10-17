import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import ProgressBar from '../ProgressBar'

const Header = ({ progress }) => {
  return (
    <View style={styles.container}>
      <ProgressBar progress={progress} />
    </View>
  )
}

Header.propTypes = {
  progress: PropTypes.number.isRequired
}

// Header.defaultProps = {
// }

export default Header
