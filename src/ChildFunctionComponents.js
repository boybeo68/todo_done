import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
});
const ChildFunction = ({ name, className }) => {
  const [count, setCount] = useState(0);
  const [check, setcheck] = useState(true);
  const tangCount = (value) => {
    setCount(count + value);
    setcheck(!check);
    console.log(count);
  };
  return (
    <View>
      <Text>{name}</Text>
      <Text>{className}</Text>
      <Text>{count}</Text>
      <TouchableOpacity
        onPress={() => {
          tangCount(2);
        }}
        style={[styles.button, { backgroundColor: check ? 'red' : 'gray' }]}
      >
        <Text>Tang count function</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChildFunction;
