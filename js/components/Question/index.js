// @flow
import Question from './Question'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import {getItemsRef} from '../../store/firebaseStore'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  questionSubmit: (selections)=> {
    getItemsRef().itemsRef.push(selections)
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Question)
