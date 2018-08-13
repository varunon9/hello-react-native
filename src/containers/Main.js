import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';
import { 
  Drawer, 
  Stack, 
  Scene, 
  Router, 
  Actions, 
  ActionConst 
} from 'react-native-router-flux';

import Login from './Login';
import DrawerContent from './DrawerContent';
import Home from './Home';
import Profile from './Profile';

import MenuIcon from '../images/menu_burger.png';

const RouterWithRedux = connect()(Router);

class Main extends React.Component {
  render() {
    return (
      <RouterWithRedux>
        <Stack key="root">
          {/*<Scene key="login" component={Login} title="Login" />*/}
          <Drawer 
              hideNavBar 
              styles={styles.drawer}
              contentComponent={DrawerContent} 
              drawerImage={MenuIcon} 
              drawerWidth={300}
              type={ActionConst.REPLACE}
          >
            <Scene key="home" component={Home} title="Home" />
            <Scene key="profile" component={Profile} title="Profile" />
          </Drawer>
        </Stack>
      </RouterWithRedux>
    )
  }
}

const styles = StyleSheet.create({
  drawer: { 
    shadowColor: '#000000', 
    shadowOpacity: 0.8, 
    shadowRadius: 3
  }
});

export default Main;