const valueReducer = (valueCount = 10, action) => {
  switch (action.type) {
    case 'ADD':
      return valueCount + 1;
    case 'REMOVE':
      return valueCount - 1;
    default:
      return valueCount;
  }
};
export default valueReducer;
