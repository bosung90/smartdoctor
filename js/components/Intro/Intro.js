// @flow
import React, {Component} from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'

import SDButton from '../buttons/SDButton'

export default class Intro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SDButton label='Patient' style={{margin:10}} onPress={()=>this.props.handlePatient()}/>
        <SDButton label='Doctor' style={{margin:10}} onPress={()=>this.props.handleDoctor()}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
     ...StyleSheet.absoluteFillObject,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
