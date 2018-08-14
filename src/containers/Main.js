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
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RouterWithRedux 
          navigationBarStyle={styles.navBar}
          titleStyle={styles.navTitle}
          sceneStyle={styles.routerScene}
      >
        <Stack key="root">
          <Scene 
            key="login" 
            component={Login} 
            title="Login" 
            initial={this.props.scene === 'login'}
            renderBackButton={()=>(null)} // removing back button
          />
          <Drawer 
              initial={this.props.scene === 'drawer'}
              hideNavBar 
              key="drawer"
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

const mapStateToProps = (state) => {
  return {
    scene: state.scene.scene
  }
};

export default connect(mapStateToProps)(Main);

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#7a42f4'
  },

  routerScene: {
    padding: 0
  },

  navTitle: {
    color: 'white'
  }
});