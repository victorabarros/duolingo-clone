import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import icon from './assets/icon.png'

const signature = "VABarros"

console.log("logging")
// console.warn("logging")
// console.error("logging")

const App = () => (
  <View style={styles.container}>
    <StatusBar style="auto" />
    <Text style={{ fontWeight: 'bold', color: 'pink' }}>
      Hello world ~ {signature}
      <Text style={{ color: 'brown' }}>second</Text>
    </Text>
    <Image
      source={icon}
      style={{ width: 50, height: 100, backgroundColor: 'red' }}
      resizeMode="contain"
    />
    <Image
      source={{ uri: "https://avatars.githubusercontent.com/u/42843223?v=4" }}
      style={{ width: 50, height: 100, backgroundColor: 'blue' }}
      resizeMode="contain"
    />
  </View>
);

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
