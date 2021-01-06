import React, { Children } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux_learn/store';

import ChilComponent from './Child';
const App = ({ count }) => {
  return (
    <Provider store={store}>
      <ChilComponent />
    </Provider>
  );
};
export default App;
