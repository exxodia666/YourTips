import React from 'react';
import {StyleSheet, Text, FlatList, ScrollView, View} from 'react-native';
import {observer} from 'mobx-react';
import ListItem from './ListItem';
import {mode} from '../App';

const TodoList = ({filterMode, model}) => {
  const tasks =
    filterMode === mode.all
      ? model().tasks.items //all tasks
      : filterMode === mode.active
      ? model().tasks.showActiveTasks //active tasks
      : filterMode === mode.done
      ? model().tasks.showDoneTasks ///done tasks
      : model().tasks.showFavoriteTasks; /// favorite task
console.log(tasks);
  return (
    <>
      <Text>{filterMode}</Text>
      <View style={styles.all}>
        <ScrollView>
          {tasks.map(item => (
            <ListItem
              key={item.id}
              text={item.text}
              finished={item.finished}
              favorite={item.favorite}
              id={item.id}
              toggle={item.toggleTask}
              toggleFav={item.makeTaskFavorite}
              edit={item.editTask}
              delete={model().tasks.deleteTask}
            />
          ))}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  all: {
    backgroundColor: 'yellow',
  },
  active: {
    backgroundColor: 'red',
  },
  done: {
    backgroundColor: 'green',
  },
  list: {
    backgroundColor: 'red',
  },
});
export default observer(TodoList);

/*
  return (
    <FlatList
      style={styles.list}
      data={tasks.items}
      renderItem={item => {
        return (
          <ListItem
            key={item.item.id}
            text={item.item.text}
            finished={item.item.finished}
            id={item.item.id}
            toggle={item.item.toggleTask}
            edit={item.item.editTask}
            delete={tasks.deleteTask}
          />
        );
      }}
    />
  );
  */
{
  /*<FlatList
        style={styles.list}
        data={tasks.items}
        renderItem={item => {
          return (
            <ListItem
              key={item.item.id}
              text={item.item.text}
              finished={item.item.finished}
              id={item.item.id}
              toggle={item.item.toggleTask}
              edit={item.item.editTask}
              delete={tasks.deleteTask}
            />
          );
        }}
      />*/
}
