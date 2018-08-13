import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


class DrawerContent extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.scene);
    this.navigateToScene = this.navigateToScene.bind(this);
  }

  navigateToScene(key) {
    return;
    if (key === 'logout') {
      // clear data and navigate to login
      key = 'login';
    }
    Actions[key]();
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
            onPress={this.navigateToScene('home')} />
          <Button
            raised
            icon={{name: 'umbrella', type: 'font-awesome', size: 20}}
            title='Profile'
            buttonStyle={styles.button}
            onPress={this.navigateToScene('profile')} />
          <Button
            raised
            icon={{name: 'user-circle', type: 'font-awesome', size: 20}}
            title='Logout'
            buttonStyle={styles.button}
            onPress={this.navigateToScene('logout')} />
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    backgroundColor: '#E71D36'
  }
});

const mapStateToProps = (state) => (state.scene);

export default connect(mapStateToProps)(DrawerContent);