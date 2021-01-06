import React, { Children } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux_learn/store';
import App_Todo from './App_Todo';
import ChilComponent from './Child';
const App = ({ count }) => {
  return (
    <Provider store={store}>
      <App_Todo />
    </Provider>
  );
};
export default App;
