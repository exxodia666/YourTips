import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View} from 'react-native';
import {set} from 'mobx';
//import { action } from 'mobx';

const InputComponent = props => {
  const [text, setText] = useState('');
  const addTask = props.model().tasks.addTask;

  const add = () => {
    console.log('action');
    addTask(text);
  };

  return (
    <View>
      <TextInput
        style={{height: 40}}
        placeholder="Type your tip!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Button
        title="Add"
        onPress={() => {
          add();
          setText('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default InputComponent;
