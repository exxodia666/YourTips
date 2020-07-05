import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
  Alert,
  View,
  CheckBox,
  Button,
} from 'react-native';
import {observer} from 'mobx-react';
const LIstItem = props => {
  const toggleTask = () => {};
  const editTask = (id, text) => {};
  const deleteTask = id => {};
  
  return (
    <View style={styles.row}>
      <Text>{props.id}</Text>
      <CheckBox value={props.finished} onChange={() => true} />
      <Button title="Edit" onPress={() => true} />
      <Button title="Delete" onPress={() => true} />
      <Text>{props.text}</Text>
    </View>
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
