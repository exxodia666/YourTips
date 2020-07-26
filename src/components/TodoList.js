import React from 'react';
import {StyleSheet, ScrollView, Dimensions} from 'react-native';
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
  return (
    <ScrollView style={styles.all}>
      {tasks.map(item => {
        return (
          <ListItem
            key={item.id}
            text={item.text}
            finished={item.finished}
            favorite={item.favorite}
            id={item.id}
            toggle={item.toggleTask}
            toggleFav={item.makeTaskFavorite}
            toggleSelect={item.toggleSelect}
            edit={item.editTask}
            selected={item.selected}
            delete={model().tasks.deleteTask}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  all: {
    // borderWidth: 0.6,
    width: Dimensions.get('screen').width * 0.98,
    height: Dimensions.get('screen').height * 0.63,
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
