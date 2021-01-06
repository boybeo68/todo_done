import {add, remove} from '../action/actionType';
const valueReducer = (valueCount = 0, action) => {
  switch (action.type) {
    case add:
      return valueCount + action.step;
    case remove:
      return valueCount + action.step - action.remove;
    default:
      return valueCount;
  }
};
export default valueReducer;
