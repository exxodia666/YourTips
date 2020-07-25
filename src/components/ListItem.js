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
import Icon from 'react-native-vector-icons/FontAwesome';

const LIstItem = props => {
  const [menu, setMenu] = useState(false);
  const [input, setInput] = useState(false);
  const [text, setText] = useState('');
  //console.log(props);
  const toggleTask = () => {
    props.toggle();
  };
  const setFav = () => {
    props.toggleFav();
  };

  const setSelected = () => {
    console.log('init');
    props.toggleSelect();
  };

  return (
    <View
      style={
        props.selected
          ? {...styles.selected, ...styles.listItem}
          : {...styles.listItem}
      }>
      <View style={styles.checkBox}>
        <CheckBox value={props.finished} onChange={() => toggleTask()} />
      </View>
      <TouchableOpacity style={styles.text} onLongPress={() => setSelected()}>
        <Text
          style={props.finished ? styles.textLineThrough : styles.textNone}
          onLongPress={() => setMenu(!menu)}>
          {props.text}
        </Text>
      </TouchableOpacity>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => setFav()}>
          <Icon
            color="red"
            name={props.favorite ? 'heart' : 'heart-o'}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selected: {
    borderColor: 'red',
    borderWidth: 2,
  },
  checkBox: {
    //backgroundColor: 'purple',
    flex: 1,
  },
  button: {
    flex: 1,
    height: 30,
    width: 30,
    //borderRadius: 15,
    //borderWidth: 1,
    //backgroundColor: 'yellow',
  },
  text: {
    justifyContent: 'center',
    //alignItems:'center',
    flex: 7,
    //backgroundColor: 'red',
    //width: '85%',
  },

  listItem: {
    elevation: 0.5,
    borderRadius: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    flex: 10,
    margin: 6,
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
