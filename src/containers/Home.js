import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class Home extends React.Component {
  render () {
    return (
      <Text style={{textAlign: 'center'}}>Hello {this.props.email}</Text>
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.auth.email
});

export default connect(mapStateToProps)(Home);