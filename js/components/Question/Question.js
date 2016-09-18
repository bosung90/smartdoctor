// @flow
import React, {Component} from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from 'react-native'
import YesNoQuestion from './YesNoQuestion'

export default class Question extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView} containerStyle={styles.scrollViewContent}>
        <YesNoQuestion selection={1} question='1. Do you feel nausia/vomiting lately?' />
        <YesNoQuestion selection={1} question='2. Do you experience frequent heartburn?' />
        <YesNoQuestion selection={1} question='3. Do you feel a lost of appetite?' />
        <YesNoQuestion selection={2} question='4. Do you experience constant bloating?' />
        <YesNoQuestion selection={1} question='5. Do you experience early satiety?' />
        <YesNoQuestion selection={1} question='6. Do you see blood in the stool?' />
        <YesNoQuestion selection={1} question='7. Do you experience excessive fatigue?' />
        <YesNoQuestion selection={2} question='8. Do you experience stomach pain?' />

        <TouchableOpacity style={[styles.button, {alignSelf: 'center', backgroundColor: '#E6AF45', alignItems: 'center', elevation: 6, marginTop: 40,}]} onPress={this.props.handleGetStarted}>
          <Text style={{color: 'white', fontSize: 17}}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#448FAA',
  },
  scrollViewContent: {
    ...StyleSheet.absoluteFillObject,
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
  },
})
