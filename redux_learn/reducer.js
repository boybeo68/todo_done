import { combineReducers } from 'redux';
import valueReducer from './valueReducer';
import { todosReducer } from './todosReducer';
export const reducers = combineReducers({
  valueReducer,
  todosReducer,
});
