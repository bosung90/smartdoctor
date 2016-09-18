// @flow weak
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
  constructor(props) {
    super(props)
    this.state = {
      selections: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
      }
    }
  }
  render() {
    return (
      <ScrollView style={styles.scrollView} containerStyle={styles.scrollViewContent}>
        <YesNoQuestion selection={this.state.selections[0]} question='1. Do you feel nausia/vomiting lately?' handleYes={()=>{this.handleSelection(0, 2)}}  handleNo={()=>{this.handleSelection(0, 1)}}/>
        <YesNoQuestion selection={this.state.selections[1]} question='2. Do you experience frequent heartburn?'  handleYes={()=>{this.handleSelection(1, 2)}}  handleNo={()=>{this.handleSelection(1, 1)}}/>
        <YesNoQuestion selection={this.state.selections[2]} question='3. Do you feel a lost of appetite?'  handleYes={()=>{this.handleSelection(2, 2)}}  handleNo={()=>{this.handleSelection(2, 1)}}/>
        <YesNoQuestion selection={this.state.selections[3]} question='4. Do you experience constant bloating?'  handleYes={()=>{this.handleSelection(3, 2)}}  handleNo={()=>{this.handleSelection(3, 1)}}/>
        <YesNoQuestion selection={this.state.selections[4]} question='5. Do you experience early satiety?'  handleYes={()=>{this.handleSelection(4, 2)}}  handleNo={()=>{this.handleSelection(4, 1)}}/>
        <YesNoQuestion selection={this.state.selections[5]} question='6. Do you see blood in the stool?'  handleYes={()=>{this.handleSelection(5, 2)}}  handleNo={()=>{this.handleSelection(5, 1)}}/>
        <YesNoQuestion selection={this.state.selections[6]} question='7. Do you experience excessive fatigue?'  handleYes={()=>{this.handleSelection(6, 2)}}  handleNo={()=>{this.handleSelection(6, 1)}}/>
        <YesNoQuestion selection={this.state.selections[7]} question='8. Do you experience stomach pain?'  handleYes={()=>{this.handleSelection(7, 2)}}  handleNo={()=>{this.handleSelection(7, 1)}}/>

        <TouchableOpacity style={[styles.button, {alignSelf: 'center', backgroundColor: '#E6AF45', alignItems: 'center', elevation: 6, marginTop: 40,}]} onPress={()=>{this.props.questionSubmit(this.state.selections); alert('Successfully submitted')}}>
          <Text style={{color: 'white', fontSize: 17}}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }

  handleSelection(index, selection) {
    let selections = this.state.selections
    selections[index] = selection
    this.setState({selections})
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
