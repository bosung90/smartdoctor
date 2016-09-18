// @flow
import Question from './Question'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  questionSubmit: ()=> {
    
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Question)
