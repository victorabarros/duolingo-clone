import React from "react"
import { View, Text } from "react-native"
import PropTypes from "prop-types"
import Icon from "react-native-vector-icons/FontAwesome"
import styles from "./styles"
import ProgressBar from "../ProgressBar"

const Header = ({ progress, lives }) => (
  <View style={styles.container}>
    <ProgressBar progress={progress} />
    <Icon
      style={styles.heart}
      name="heart"
      size={20}
      color="red"
    />
    <Text style={styles.lives}>{lives}</Text>
  </View>
)

Header.propTypes = {
  progress: PropTypes.number.isRequired,
  lives: PropTypes.number.isRequired,
}

// Header.defaultProps = {
// }

export default Header
