import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#58CC02",
    height: 50,
    marginVertical: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",

    // border
    borderColor: "#57A600",
    borderBottomWidth: 5,
    borderRadius: 5,
  },
  disabledContainer: {
    backgroundColor: "lightgrey",
    borderColor: "grey",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",

    // undeline
    borderBottomWidth: 1.5,
    borderColor: "white",
  },
})

export default styles
