// @flow
import React, {Component} from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native'
import SDButton from '../buttons/SDButton'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>

        </View>
        <View style={{flex: 1}}>
          <View style={styles.button}>
            <TextInput style={{textAlign: 'center', fontSize: 17}} placeholderTextColor='#959595' underlineColorAndroid='transparent' placeholder='Enter Patient ID here' keyboardType="numeric"/>
          </View>
          <TouchableOpacity style={[styles.button, {backgroundColor: '#E6AF45', alignItems: 'center'}]}>
            <Text style={{color: 'white', fontSize: 17}}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  _addItem() {
    this.props.itemsRef.push({ title: 'text' })
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
    marginVertical: 30,
  }
})
