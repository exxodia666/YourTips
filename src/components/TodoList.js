import React from 'react';
import {StyleSheet, Text, FlatList, ScrollView} from 'react-native';
import TodoStore from '../store/todoStore';

const TodoList = () => {
  const todos = TodoStore.todos;
  return (
    <ScrollView>
      {todos.map(item => {
        return <Text key={item.id}>{item.text}</Text>;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default TodoList;
