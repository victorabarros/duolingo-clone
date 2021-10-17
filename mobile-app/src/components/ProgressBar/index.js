import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.bg}>
      <View style={[styles.bg, styles.fg, { width: `${progress * 100}%` }]}>
        <View style={styles.highlight} />
      </View>
    </View>
  )
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired
}

export default ProgressBar
