import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';

const Counter = ({model}) => {
  const counter = model().showSelectedCount;
  const deleteTasks = model().deleteTask;
  return (
    <View style={styles.counter}>
      {counter > 0 ? (
        <View style={styles.row}>
          <Text style={styles.text}>Selected: {counter}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              deleteTasks();
            }}>
            <Text style={{color: 'red', fontSize: 16}}>Delete</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text>{''}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    color: 'red',
    borderColor: 'red',
    borderRadius: 7,
    borderWidth: 0.9,
    fontSize: 8,
    padding: 3,
  },
  text: {
    padding: 5,
    fontSize: 16,
    margin: 5,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  counter: {},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default observer(Counter);
