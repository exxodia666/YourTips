import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const InputComponent = props => {
  const [text, setText] = useState('');
  const addTask = props.model().addTask;

  const add = () => {
    if (text !== '') {
      addTask(text);
    } else {
      Alert.alert('Enter task!');
    }
  };

  return (
    <View style={styles.inputComponent}>
      <TextInput
        style={styles.textInput}
        placeholder="Type your tip!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          add();
          setText('');
        }}>
        <Icon color="green" name="pluscircleo" size={40} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputComponent: {
    //backgroundColor: 'red',
    width: Dimensions.get('screen').width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    ///height: Dimensions.get('screen').height * 0.6,
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 5,
    borderColor: 'grey',
    borderBottomWidth: 1,
  },
  button: {
    margin: 5,
  },
});

export default InputComponent;
