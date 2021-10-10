import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';
import icon from './assets/icon.png'
import styles from './App.styles'

const signature = "VABarros"

console.log("logging")
// console.warn("logging")
// console.error("logging")

const App = () => (
  <View style={styles.container}>
    <StatusBar style="auto" />
    <Text style={styles.text}>
      Hello world ~ {signature}
      <Text style={{ color: 'brown' }}>second</Text>
    </Text>
    <Image
      source={icon}
      style={styles.image}
      resizeMode="contain"
    />
    <Image
      source={{ uri: "https://avatars.githubusercontent.com/u/42843223?v=4" }}
      style={[styles.image, { backgroundColor: 'blue' }]}
      resizeMode="contain"
    />
  </View>
);

export default App
