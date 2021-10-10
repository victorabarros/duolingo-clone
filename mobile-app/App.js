import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  console.log("logging")
  // console.warn("logging")
  // console.error("logging")

  return (
    <View style={styles.container}>
      <Text>Hello world2</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
