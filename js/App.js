// @flow
import React, {Component} from 'react'
import {Router, Scene} from 'react-native-router-flux'
import {Provider, connect} from 'react-redux'
import configureStore from './store/configureStore'
import Login from './components/Login'
import Intro from './components/Intro'

const RouterWithRedux = connect()(Router)
const store = configureStore()

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key='intro' component={Intro} title='Intro Page' />
          <Scene key='doctor' component={Login} title='Doctor Page' />
          <Scene key='login' component={Login} title='Login Page' />
          <Scene key='loginTwo' component={Login} title='Login Two' />
        </RouterWithRedux>
      </Provider>
    )
  }
}
