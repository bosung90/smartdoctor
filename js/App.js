// @flow
import React, {Component} from 'react'
import {Router, Scene} from 'react-native-router-flux'
import {Provider, connect} from 'react-redux'
import configureStore from './store/configureStore'
import Login from './components/Login'
import Intro from './components/Intro'
import Question from './components/Question'

const RouterWithRedux = connect()(Router)
const store = configureStore()

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key='root' hideNavBar>
            <Scene key='intro' component={Intro} />
            <Scene key='login' component={Login} />
            <Scene key='question' component={Question} />
            <Scene key='doctor' component={Login} title='Doctor Page' />
          </Scene>
        </RouterWithRedux>
      </Provider>
    )
  }
}
