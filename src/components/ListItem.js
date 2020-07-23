import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  CheckBox,
} from 'react-native';
import {observer} from 'mobx-react';

const LIstItem = props => {
  const [menu, setMenu] = useState(false);
  const [input, setInput] = useState(false);
  const [text, setText] = useState('');

  const toggleTask = () => {
    props.toggle();
  };
  const setFav = () => {
    props.toggleFav();
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
    <View style={styles.listItem}>
      <View style={styles.row}>
        <CheckBox value={props.finished} onChange={() => toggleTask()} />
        <TouchableOpacity>
          <Text
            style={
              props.finished
                ? {...styles.textLineThrough, ...styles.text}
                : {...styles.textNone, ...styles.text}
            }
            onLongPress={() => setMenu(!menu)}>
            {props.text}
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        title="*"
        color={props.favorite ? 'purple' : 'green'}
        onPress={() => setFav()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 5,
    flex: 1,
    margin: 5,
    borderWidth: 1,
  },
  text: {
    padding: 5,
  },
  textLineThrough: {
    textDecorationLine: 'line-through',
  },
  textNone: {
    textDecorationLine: 'none',
  },
  row: {
    flexDirection: 'row',
  },
});

export default observer(LIstItem);
/*{menu && (
        <View style={styles.row}>
          <Button title="Edit" onPress={() => setInput(!input)} />
          <Button
            title="Delete"
            onPress={() => {
              setMenu(false);
              deleteTask(props.id);
            }}
          />
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
                  setMenu(false);
                  setText('');
                }}
              />
            </>
          )}
        </View>
      )}*/
