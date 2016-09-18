// @flow
import Intro from './Intro'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'

// import * as actions from './actions' // mapDispatchToProps
// import {getNav, getLogin} from '../../reducers/rootReducer'
// import {getItemsRef} from '../../store/firebaseStore'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handlePatient: ()=> {
    Actions.login()
  },
  handleDoctor: ()=> {
    Actions.doctor()
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Intro)
