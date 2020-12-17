import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonCustom = ({ submitTodo }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button} onPress={submitTodo}>
          
      <Text style={styles.submit}>Submit</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    height: 50,
    backgroundColor: '#ffffff',
    width: 200,
    marginRight: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    color: '#666666',
    fontWeight: '600',
  },
});

export default ButtonCustom;
