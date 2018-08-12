import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Login from './Login';
import NavigationDrawer from './NavigationDrawer';

const RouterWithRedux = connect()(Router);

class Main extends React.Component {
  render() {
    return (
      <RouterWithRedux>
        <Scene key="root">
          <Scene key="login" component={Login} title="Login" initial />
          <Scene key="drawer" component={NavigationDrawer}>
          </Scene>
        </Scene>
      </RouterWithRedux>
    )
  }
}

export default Main;