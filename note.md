# Duolingo clone from notJust.dev course

## class 3.3 debugging

### logging

```js
  console.log("logging")   // normal log on terminal/dev tools
  console.warn("logging")  // yellow log on terminal/dev tools and mobile
  console.error("logging") // brokes the app
```

### production mode

use **production mode** this funtionality on developer tools to check if nothing is broken

### connection

use **tunnel mode** to run remotely in different network

## class 3.6 core components

ScrollView is the same of View but with scroll.

## class 3.7 styles

final scrap

```js
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
```

## class 3.11 prop types
