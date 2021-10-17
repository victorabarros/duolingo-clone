import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  questioner: {
    width: '30%',
    aspectRatio: 1 / 1,
  },
  sentenceContainer: {
    justifyContent: 'center',
  },
  sentence: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 5,
  },
  textInput: {
    backgroundColor: 'lightgrey',
    flex: 1,
    alignSelf: 'stretch',
    padding: 10,
    fontSize: 15,

    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
  },
})

export default styles
