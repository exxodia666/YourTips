import React from 'react';
import {StyleSheet, Text, FlatList, ScrollView, Alert} from 'react-native';
import {observer} from 'mobx-react';
import ListItem from './ListItem';

const TodoList = props => {
  const tasks = props.model().tasks;
  console.log(tasks.items);
  return (
    <ScrollView>
      {tasks.items.map(item => (
        <ListItem
          key={item.id}
          text={item.text}
          finished={item.finished}
          id={item.id}
          toggle={item.toggleTask}
          edit={tasks.editTask}
          delete={tasks.deleteTask}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default observer(TodoList);
