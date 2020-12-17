import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, toggleComplete, type, editTodo }) => {
  const getVisibleTodos = (todos, type) => {
    switch (type) {
      case 'All':
        return todos;
      case 'Complete':
        return todos.filter((t) => t.complete);
      case 'Active':
        return todos.filter((t) => !t.complete);
    }
  };
  todos = getVisibleTodos(todos, type);
  todos = todos.map((todo, i) => {
    return (
      <Todo
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
        key={todo.todoIndex}
        todo={todo}
      />
    );
  });
  return <View>{todos}</View>;
};

export default TodoList;