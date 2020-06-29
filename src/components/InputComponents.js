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
      <Text>{text}</Text>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
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
