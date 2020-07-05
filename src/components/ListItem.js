import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  Alert,
  View,
  CheckBox,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {observer} from 'mobx-react';
const LIstItem = props => {
  const [menu, setMenu] = useState(false);
  const [input, setInput] = useState(false);
  const [text, setText] = useState('');

  const toggleTask = () => {
    props.toggle();
  };

  const editTask = (id, text) => {
    props.edit(id, text);
    setInput(false);
  };

  const deleteTask = id => {
    props.delete(id);
    setMenu(false);
    setInput(false);
  };

  return (
    <>
      <View style={styles.row}>
        <Button
          title={props.finished.toString()}
          onPress={() => toggleTask()}
        />
        <TouchableOpacity>
          <Text onLongPress={() => setMenu(!menu)}>
            {props.id + 1 + '.' + props.text}
          </Text>
        </TouchableOpacity>
      </View>
      {menu && (
        <View style={styles.row}>
          <Button title="Edit" onPress={() => setInput(!input)} />
          <Button title="Delete" onPress={() => deleteTask(props.id)} />
          {input && (
            <>
              <TextInput
                //style={{height: 40}}
                placeholder="Type your new tip!"
                onChangeText={text => setText(text)}
                defaultValue={text}
              />
              <Button
                title="Submit"
                onPress={() => {
                  editTask(props.id, text);
                  setText('');
                }}
              />
            </>
          )}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default observer(LIstItem);
