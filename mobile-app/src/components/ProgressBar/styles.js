import { StyleSheet } from 'react-native'

const barHeight = 15


const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: barHeight,
    borderRadius: barHeight / 2,

    backgroundColor: 'lightgrey',
  },
  fg: {
    backgroundColor: 'orange',
  },
  highlight: {
    width: '95%',
    height: barHeight / 3,
    borderRadius: barHeight / 2,
    marginTop: barHeight / 5,

    alignSelf: 'center',

    backgroundColor: 'white',
    opacity: .2,
  },
})

export default styles
