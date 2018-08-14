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

import { updateProfile } from '../actions/ProfileAction';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profileDetails: props.profile
    };
    this.onNameChanged = this.onNameChanged.bind(this);
    this.onMobileChanged = this.onMobileChanged.bind(this);
    this.onGenderChanged = this.onGenderChanged.bind(this);
    this.onUpdateProfileClicked = this.onUpdateProfileClicked.bind(this);
  }

  onNameChanged(name) {
    const profileDetails = Object.assign({}, this.state.profileDetails);
    profileDetails.name = name;
    this.setState({ profileDetails })
  }

  onMobileChanged(mobile) {
    const profileDetails = Object.assign({}, this.state.profileDetails);
    profileDetails.mobile = mobile;
    this.setState({ profileDetails })
  }

  onGenderChanged(gender) {
    const profileDetails = Object.assign({}, this.state.profileDetails);
    profileDetails.gender = gender;
    this.setState({ profileDetails })
  }

  onUpdateProfileClicked() {
    this.props.updateProfile(this.state.profileDetails);
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Name"
          value={this.state.profileDetails.name}
          placeholderTextColor="#9a73ef"
          textContentType="name"
          onChangeText={this.onNameChanged} />
        
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Mobile"
          value={this.state.profileDetails.mobile}
          placeholderTextColor="#9a73ef"
          textContentType="telephoneNumber"
          onChangeText={this.onMobileChanged} />
           
        <TouchableOpacity
          style={styles.submitButton}
          onPress={
            () => this.onUpdateProfileClicked()
          }>
          <Text style={styles.submitButtonText}>Update</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile
  }
};

const mapDispatchToProps = (dispatch) => ({
  updateProfile: (profileDetails) => {
    dispatch(updateProfile(profileDetails))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

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