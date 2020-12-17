import React, { Component, PureComponent } from 'react';
import { View, Text } from 'react-native';

export default class Check extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log('componentDidMount Check');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount Check');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps.count, this.props.count);
    // if (prevState.count !== this.state.count) {
    // }

    console.log('componentDidUpdate Con');
  }
  render() {
    console.log('render Check');
    return (
      <View>
        <Text> {this.props.data.class.name} </Text>
      </View>
    );
  }
}
