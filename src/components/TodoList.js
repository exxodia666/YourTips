import React from 'react';
import {StyleSheet, Text, FlatList, ScrollView, Alert} from 'react-native';
import {observer} from 'mobx-react';
import ListItem from './ListItem';

const TodoList = props => {
  const tasks = props.model();
  return (
    <ScrollView>
      {tasks.tasks.items.map(item => (
        <ListItem
          key={item.id}
          text={item.text}
          finished={item.finished}
          id={item.id}
          toggle = {}
          edit = {}
          delete = {}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default observer(TodoList);
