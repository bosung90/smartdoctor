// @flow
import React, {Component} from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native'
import YesNoQuestion from './YesNoQuestion'

export default class Question extends Component {
  render() {
    return (
      <View style={styles.container}>
        <YesNoQuestion selection={2} question='1. Do you feel nausia/vomiting lately?' />
        <YesNoQuestion selection={2} question='2. Do you experience frequent heartburn?' />
        <YesNoQuestion selection={2} question='3. Do you feel a lost of appetite?' />
        <YesNoQuestion selection={2} question='4. Do you experience constant bloating?' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#448FAA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 100,
    width: 250,
    height: 70,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    marginVertical: 20,
  }
})
