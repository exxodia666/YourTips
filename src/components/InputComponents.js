import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, Button} from 'react-native';

const InputComponent = () => {
  return (
    <>
      <TextInput 
        placeholder = 'Enter tip'
      />
      <Button 
        title = 'Add'
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default InputComponent;