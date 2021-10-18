import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  image: {
    height: "25%",
    aspectRatio: 1 / 1,
    marginVertical: 10,
  },
  body: {
    flex: 1,
    paddingVertical: "5%",
    width: "100%",
  },
  sentenceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
  },
  sentenceSpot: {
    height: 40,
    minWidth: 70,
    margin: 5,
    borderBottomWidth: 1
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: "20%",
    alignItems: 'center',
    flex: 1
  },
  optionContainer: {
    borderWidth: 1,
    borderBottomWidth: 2,
    borderRadius: 5,
    minWidth: 30,
    padding: 5,
    borderColor: "lightgray",
    alignItems: 'center',
  },
})

export default styles
