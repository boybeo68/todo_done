import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import TodoButton from './TodoButton';
import DoubleClick from './DoubleClick';
let backCount = 0;
const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [textEdit, settextEdit] = useState('');
  const handleClick = () => {
    alert('This is awesome \n Double tap succeed');
  };
  return (
    <View style={styles.todoContainer}>
      {!isEdit ? (
        <TouchableWithoutFeedback
          style={{
            position: 'absolute',
            left: 0,
            padding: 20,
            backgroundColor: 'green',
          }}
          onPress={() => {
            backCount++;
            if (backCount == 2) {
              clearTimeout(backTimer);
              setIsEdit(true);
              // alert('Clicked twice');
            } else {
              backTimer = setTimeout(() => {
                backCount = 0;
              }, 500);
            }
          }}
        >
          <Text
            style={[
              styles.todoText,
              { textDecorationLine: todo.complete ? 'line-through' : 'none' },
            ]}
          >
            {todo.title}
          </Text>
        </TouchableWithoutFeedback>
      ) : (
        <TextInput
          style={{
            width: 200,
            height: '100%',
            backgroundColor: '#f5f5f5',
            color: 'red',
          }}
          defaultValue={todo.title}
          onChangeText={(text) => {
            settextEdit(text);
          }}
          onSubmitEditing={() => {
            // alert(textEdit);
            editTodo(textEdit, todo.todoIndex);
            setIsEdit(false);
          }}
        />
      )}

      {/* <DoubleClick delay={1000} onClick={handleClick}>
        <Text
          style={[
            styles.todoText,
            { textDecorationLine: todo.complete ? 'line-through' : 'none' },
          ]}
        >
          {todo.title}
        </Text>
      </DoubleClick> */}

      <View style={styles.buttons}>
        <TodoButton
          name='Done'
          complete={todo.complete}
          onPress={() => toggleComplete(todo.todoIndex)}
        />
        <TodoButton name='Delete' onPress={() => deleteTodo(todo.todoIndex)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#ededed',
    paddingLeft: 14,
    paddingTop: 7,
    paddingBottom: 7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoText: {
    fontSize: 17,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Todo;
