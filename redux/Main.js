import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {connect} from 'react-redux';
import Child from './Child';
import {addTodo, remove} from './action/actionType';
//import {addCount} from './action/actionCreator';
function Main(props) {
  const [text, setText] = useState('');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{
          height: 40,
          width: 180,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        onChangeText={(text) => setText(text)}
        placeholder="Add todo"
        onSubmitEditing={() => {
          props.dispatch({type: addTodo, text: text});
        }}
        value={text}
      />
      <Text>{JSON.stringify(props.todoReducer)}</Text>
    </View>
  );
}

function mapStateToProps(state) {
  return {todoReducer: state.todoReducer};
}

export default connect(mapStateToProps)(Main);
