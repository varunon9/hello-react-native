import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
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
          <Button
            raised
            icon={{name: 'trash-o', type: 'font-awesome', size: 20}}
            title='Home'
            buttonStyle={styles.button}
            onPress={() => {this.navigateToScene('home')}} />
          <Button
            raised
            icon={{name: 'umbrella', type: 'font-awesome', size: 20}}
            title='Profile'
            buttonStyle={styles.button}
            onPress={() => {this.navigateToScene('profile')}} />
          <Button
            raised
            icon={{name: 'user-circle', type: 'font-awesome', size: 20}}
            title='Logout'
            buttonStyle={styles.button}
            onPress={() => {this.navigateToScene('logout')}} />
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0
  },
  button: {
    backgroundColor: '#7a42f4',
    margin: 0
  }
});

const mapStateToProps = (state) => (state.scene);

/**
 * deliberately not using mapDispatchToProps
 * notice how `logout` is being used
 */ 
export default connect(mapStateToProps)(DrawerContent);