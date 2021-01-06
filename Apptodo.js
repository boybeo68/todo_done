import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Heading from './components/Heading';
import Input from './components/Input';
import Button from './components/Button';
import TodoList from './components/TodoList';
import TabBar from './components/Tabbar';
// import Button from './components/Button';
let todoIndex = 0;
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };

    this.toggleComplete = this.toggleComplete.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setType = this.setType.bind(this);
  }
  inputChange(inputValue) {
    this.setState({ inputValue });
  }
  deleteTodo(todoIndex) {
    let { todos } = this.state;
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex);
    this.setState({ todos }, () => {
      console.log('State: ', this.state);
    });
  }

  toggleComplete(todoIndex) {
    let todos = this.state.todos;
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
    });
    this.setState({ todos }, () => {
      console.log('State: ', this.state);
    });
  }
  editTodo = (newText, todoIndex) => {
    let todos = this.state.todos;
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.title = newText;
      }
    });
    console.log(todos);
    this.setState({ todos }, () => {
      console.log('State: ', this.state);
    });
  };

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) {
      return;
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++;
    const todos = [...this.state.todos, todo];
    this.setState({ todos, inputValue: '' }, () => {
      console.log('State: ', this.state);
    });
  }
  setType(type) {
    this.setState({ type });
  }
  render() {
    const { inputValue, todos, type } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps='always'
          contentContainerStyle={styles.content}
        >
          <Heading />
          <Input
            submit={this.submitTodo}
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)}
          />
          <TodoList
            type={type}
            editTodo={this.editTodo}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={todos}
          />
          <View
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              height: 100,
            }}
          >
            <TabBar type={type} setType={this.setType} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: 60,
  },
});

export default App;
