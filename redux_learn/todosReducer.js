import { ADD, ADD_TODO, REMOVE, REMOVE_TODO } from './action';

export const todosReducer = (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...todos, action.todo];
    // case REMOVE_TODO:
    //   return valueCount - action.remove;
    default:
      return todos;
  }
};
// export default todosReducer;
