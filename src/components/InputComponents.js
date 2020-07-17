import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View, Dimensions} from 'react-native';

const InputComponent = props => {
  const [text, setText] = useState('');
  const addTask = props.model().tasks.addTask;

  const add = () => {
    addTask(text);
  };

  return (
    <View style={styles.inputComponent}>
      <TextInput
        style={styles.textInput}
        placeholder="Type your tip!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Button
        style={styles.button}
        color="green"
        title="Add"
        onPress={() => {
          add();
          setText('');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputComponent: {
    width: Dimensions.get('screen').width * 0.9,
    ///height: Dimensions.get('screen').height * 0.6,
  },
  textInput: {
    height: 40,
    margin: 5,
    borderColor: 'grey',
    borderBottomWidth: 1,
  },
  button: {
    color: 'red',
    width: 50,
    margin: 5,
  },
});

export default InputComponent;
