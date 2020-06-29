import React from 'react';
import {StyleSheet, Text, FlatList, ScrollView, Alert} from 'react-native';
//import TodoStore from '../store/todoStore';
import {observer, inject} from 'mobx-react';

const TodoList = props => {
  //const todos = TodoStore.todos;
  console.log(props.store);
  return (
    <ScrollView>
      {props.store.todos.map(item => {
        return <Text key={item.id}>{item.text}</Text>;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default inject('store')(observer(TodoList));
//export default TodoList;
