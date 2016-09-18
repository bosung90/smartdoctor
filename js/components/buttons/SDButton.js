import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'

export default SDButton = (props) => {
  return (
    <TouchableOpacity {...props} style={[styles.container, {...props.style}]}>
      <Text style={styles.buttonText}>{props.label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    width: 100,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'lightslategrey',
    fontSize: 20,
  }
})
