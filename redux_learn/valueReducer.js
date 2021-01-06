import { ADD, REMOVE } from './action';

const valueReducer = (valueCount = 10, action) => {
  switch (action.type) {
    case ADD:
      return valueCount + action.incree;
    case REMOVE:
      return valueCount - action.remove;
    default:
      return valueCount;
  }
};
export default valueReducer;
