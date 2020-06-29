import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Alert,
} from 'react-native';
import TodoStore from '../store/todoStore';

const InputComponent = () => {
  //const actions = {...TodoStore};
  const [text, setText] = useState('');
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
          TodoStore.addTodo(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default InputComponent;
