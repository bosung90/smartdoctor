// @flow
import Question from './Question'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handlePatient: ()=> {
    Actions.login()
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Question)
