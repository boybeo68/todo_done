import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';
import Check from './Check';
import EffectComponents from './Effect';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      data: null,
    };
    console.log('constructor');
  }
  componentDidMount() {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTimeout(() => {
          this.setState({ data: JSON.stringify(json.movies) });
        }, 2000);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState, this.state.count);
    if (prevState.count !== this.state.count) {
    }

    console.log('componentDidUpdate App');
  }
  componentWillUnmount() {}

  render() {
    console.log('render App');
    const { count, data } = this.state;
    return (
      <View style={styles.container}>
        <Text> App </Text>
        {data ? (
          <Text>{data}</Text>
        ) : (
          <ActivityIndicator color={'red'} size={'large'} />
        )}
        <Text>{count}</Text>
        <Button
          onPress={() => {
            this.setState({ count: count + 1 });
          }}
          title={'click'}
        />
        <Button
          onPress={() => {
            const newData = JSON.parse(JSON.stringify(data));
            newData.class.name = 'Hoang';
            this.setState({ data: newData });
          }}
          title={'change data'}
        />
        {/* {count % 2 == 0 ? <Check data={data} count={count} /> : <View />} */}
        {count % 2 == 0 ? (
          <EffectComponents data={data} count={count} />
        ) : (
          <View />
        )}
      </View>
    );
  }
}
