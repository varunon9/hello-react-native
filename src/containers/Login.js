import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput, 
  StyleSheet,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { login } from '../actions/AuthAction';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.login = this.login.bind(this);

    // if user is already logged in, redirect to home | Not working // todo: debug
    /*if (props.email && props.authToken) {
      Actions.drawer({});
    }*/
  }
  
  handleEmail(email) {
    this.setState({ email });
  }

  handlePassword(password) {
    this.setState({ password });
  }

  login(email, password) {
    if (email && password) {
      this.props.login({ email, password });
    } else {
      this.showAlert('Error', 'Wrong email or Password');
    }
  }

  showAlert(title, message) {
    Alert.alert(title, message, [
      {
        text: 'OK'
      }
    ]);
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          textContentType="emailAddress"
          onChangeText={this.handleEmail} />
        
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          textContentType="password"
          secureTextEntry
          onChangeText={this.handlePassword} />
           
        <TouchableOpacity
          style={styles.submitButton}
          onPress={
            () => this.login(this.state.email, this.state.password)
          }>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  authToken: state.auth.authToken,
  email: state.auth.email
});

const mapDispatchToProps = (dispatch) => ({
  login: (loginDetails) => {
    login(dispatch, loginDetails);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles=StyleSheet.create({
  container: {
    paddingTop: 23
  },

  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
  },

  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },

  submitButtonText: {
    color: 'white',
    textAlign: 'center'
  }
});