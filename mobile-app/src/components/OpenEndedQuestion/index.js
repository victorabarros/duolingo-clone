import React, { useEffect, useState } from 'react'
import { Text, View, Alert, TextInput, Image } from 'react-native'
import Button from '../Button'
import PropTypes from 'prop-types'
import styles from './styles'
import questioner from '../../../assets/questioner.jpg'

const OpenEndedQuestion = () => {
  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>

      <View style={styles.header}>
        <Image
          style={styles.questioner}
          source={questioner}
        />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>Sentence</Text>
        </View>
      </View>

      <TextInput style={styles.textInput} placeholder="Type in English" />

      <Button />
    </>
  )
}

export default OpenEndedQuestion
