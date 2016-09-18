// @flow
import React, {Component} from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
} from 'react-native'

const {height, width} = Dimensions.get('window')

export default YesNoQuestion = (props) => {
  return (
    <View style={{height: 100, width, marginVertical: 15}}>
      <Text style={styles.questionText}>{props.question}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 20}}>
        <TouchableOpacity style={[styles.button, props.selection == 2 && {backgroundColor: '#E6AF45'}]} onPress={props.handleYes}>
          <Text style={[styles.buttonText, props.selection == 2 && {color: 'white'}]}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, props.selection == 1 && {backgroundColor: '#E6AF45'}]} onPress={props.handleNo}>
          <Text style={[styles.buttonText, props.selection == 1 && {color: 'white'}]}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  questionText: {
    marginLeft: 20,
    color: 'white',
    fontSize: 18,
    marginBottom: 24,
  },
  button: {
    elevation: 9,
    width: 100,
    height: 55,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 19,
  },
})
