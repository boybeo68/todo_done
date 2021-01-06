import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> {this.props.myValue} </Text>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {myValue: state.valueReducer};
}
export default connect(mapStateToProps)(Child);
