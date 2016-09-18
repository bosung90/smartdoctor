// @flow
import React, {Component} from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'

export default class Doctor extends Component {
  constructor(props){
    super(props)
    this.state = {count: 0}

  }
  componentDidMount() {
    this.props.itemsRef.on('value', (snap) => {
      this.setState({count: this.state.count+1})
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: 'white', width: 250, height: 60, borderRadius: 10, padding: 10, justifyContent: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Text>Patient ID: 12345</Text>
            <Text>Report {this.state.count} </Text>
          </View>
        </View>
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
})
