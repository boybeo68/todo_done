import {combineReducers} from 'redux';
import valueReducer from './valueReducer';
import todoReducer from './todoActionsReducer';
export const reducers = combineReducers({
  valueReducer,
  todoReducer,
});
