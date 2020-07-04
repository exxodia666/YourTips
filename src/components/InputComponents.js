import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View} from 'react-native';
import { set } from 'mobx';
//import { action } from 'mobx';

const InputComponent = props => {
  const [text, setText] = useState('');
  const actions = props.model().tasks.addTask;
  console.log(actions);
  const addTodo = () => {
    console.log('action')
    actions(text);
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
          addTodo();
          setText('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default InputComponent;
