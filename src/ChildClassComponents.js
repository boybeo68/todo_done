import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
const { width } = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.2,
  },
});
export default class ChildClassComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ' Tung state',
      count: 0,
      check: true,
    };
  }

  tangCount = () => {
    const { count, check, name } = this.state;
    const { countchild } = this.props;
    // this.setState({ count: count + 1, name: 'Hoang', check: !check });
    this.setState({ count: count + 1 }, () => {
      //   console.log(this.state.count);
      countchild(this.state.count);
    });
  };

  render() {
    const { age } = this.props;
    const { name, count, check } = this.state;
    return (
      <View
        style={[styles.container, { backgroundColor: check ? 'pink' : 'red' }]}
      >
        {check ? <Text> {name} </Text> : null}
        <Text> {age} </Text>
        <Text> {count} </Text>
        <Button onPress={this.tangCount} title={'Tang count'} color={'red'} />
        <TouchableOpacity></TouchableOpacity>
      </View>
    );
  }
}
