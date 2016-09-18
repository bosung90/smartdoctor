// @flow
import React, {Component} from 'react'
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native'

import * as firebase from 'firebase'
// import { VictoryBar, VictoryPie } from "victory-native"

export default class Login extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          The current scene is titled {this.props.title}
        </Text>
        <Text onPress={this.props.login}>
          Attempt Login
        </Text>
        <Text onPress={this.props.logout}>
          Attempt Logout
        </Text>

        <TouchableHighlight onPress={()=>this._addItem()}><Text>Add  </Text></TouchableHighlight>

        {this.props.onLogging && <Text>Logging In</Text>}
      </View>
    )
  }

  _addItem() {
    this.props.itemsRef.push({ title: 'text' })
  }
}
