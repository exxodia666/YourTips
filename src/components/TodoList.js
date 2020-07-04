import React from 'react';
import {StyleSheet, Text, FlatList, ScrollView, Alert} from 'react-native';
import {observer} from 'mobx-react';
//import TodoStore from '../store/todoStore';
//import {observer, inject} from 'mobx-react';

const TodoList = props => {
  //  console.log(props);
  const tasks = props.model();
  //console.log(tasks.tasks.items);
  return (
    <ScrollView>
      {tasks.tasks.items.map(item => (
        <Text key={item.id}>{item.id + 1 + '. ' + item.text}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default observer(TodoList);
//export default inject('store')(observer(TodoList));
//export default TodoList;
