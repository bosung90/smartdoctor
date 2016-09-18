// @flow
import Doctor from './Doctor'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import {getItemsRef} from '../../store/firebaseStore'


// import * as actions from './actions' // mapDispatchToProps
// import {getNav, getLogin} from '../../reducers/rootReducer'
// import {getItemsRef} from '../../store/firebaseStore'

const mapStateToProps = (state) => ({
  ...getItemsRef(),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handlePatient: ()=> {
  },
  handleDoctor: ()=> {
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Doctor)
