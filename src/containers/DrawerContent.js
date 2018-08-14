import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { logout, LOGOUT } from '../actions/AuthAction';


class DrawerContent extends React.Component {
  constructor(props) {
    super(props);
    this.navigateToScene = this.navigateToScene.bind(this);
  }

  navigateToScene(key) {
    if (key === 'logout') {
      // not using mapDispatchToProps
      this.props.dispatch(logout());
      key = 'login';
    }
    Actions[key]({});
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.navHeader}>
            <Image 
              source={
                require('../images/github-logo.png')
              } 
              style={{width: 60, height: 60}}
            />
            <Text 
                style={{marginTop: 10}}
            >
              https://github.com/varunon9/hello-react-native
            </Text>
          </View>
          <View style={styles.navMenu}>
            <Button
              raised
              icon={{name: 'home', size: 25}}
              title="Home"
              buttonStyle={styles.button}
              containerViewStyle={{width: '100%', marginLeft: 0}}
              onPress={() => {this.navigateToScene('home')}} />
            <Button
              raised
              icon={{name: 'account-circle', size: 25}}
              title="Profile"
              buttonStyle={styles.button}
              containerViewStyle={{width: '100%', marginLeft: 0}}
              onPress={() => {this.navigateToScene('profile')}} />
            <Button
              raised
              icon={{name: 'arrow-forward', size: 25}}
              title="Logout"
              buttonStyle={styles.button}
              containerViewStyle={{width: '100%', marginLeft: 0}}
              onPress={() => {this.navigateToScene('logout')}} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.auth.email
});

/**
 * deliberately not using mapDispatchToProps
 * notice how `logout` is being used
 */ 
export default connect(mapStateToProps)(DrawerContent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    textAlign: 'left'
  },

  button: {
    backgroundColor: '#7a42f4',
    marginTop: 5,
    marginBottom: 5
  },

  navHeader: {
    borderBottomWidth: 1,
    padding: 20,
    height: 140
  },

  navMenu: {
  }
});