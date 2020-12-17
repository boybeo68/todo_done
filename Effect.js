import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';

const EffectComponents = ({ params }) => {
  const [name, setname] = useState('');
  useEffect(() => {
    console.log('Didmount Effect');
    return () => {
      console.log('will unmount effect');
    };
  }, [name]);

  return (
    <View>
      <Text>EffectComponents</Text>
      <Button
        onPress={() => {
          setname('Kaka');
        }}
        title={'change name'}
      />
    </View>
  );
};

export default EffectComponents;
