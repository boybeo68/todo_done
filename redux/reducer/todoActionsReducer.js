import {addTodo} from '../action/actionType';
const todoReducer = (value = [], action) => {
  switch (action.type) {
    case addTodo:
      console.log(action);
      return value.concat(action.text);
    default:
      return value;
  }
};
export default todoReducer;
