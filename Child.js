import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
const ChilComponent = ({ count }) => {
  return (
    <View>
      <Text>{count}</Text>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    count: state.valueReducer,
  };
};
export default connect(mapStateToProps)(ChilComponent);
