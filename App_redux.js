import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './redux/Main';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <Main {...this.props} />
      </Provider>
    );
  }
}
