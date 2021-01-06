import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { ADD, ADD_TODO, REMOVE } from './redux_learn/action';
const ChilComponent = ({ count, dispatch, todos }) => {
  return (
    <View>
      <Text>{count}</Text>
      <Text>{JSON.stringify(todos)}</Text>
      <Button
        title={'Tăng'}
        onPress={() => {
          dispatch({ type: ADD, incree: 3 });
        }}
      />
      <Button
        title={'Giảm'}
        onPress={() => {
          dispatch({ type: REMOVE, remove: 2 });
        }}
      />
      <Button
        title={'add todo'}
        onPress={() => {
          dispatch({ type: ADD_TODO, todo: 'Hong' });
        }}
      />
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    count: state.valueReducer,
    todos: state.todosReducer,
  };
};
export default connect(mapStateToProps)(ChilComponent);
