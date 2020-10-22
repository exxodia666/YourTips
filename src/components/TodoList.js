import React from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import { observer } from 'mobx-react';
import ListItem from './ListItem';
import { mode } from '../App';
import DraggableFlatList from 'react-native-draggable-flatlist';
import TaskModel from '../models/TaskModel';

const TodoList = ({ filterMode, model }) => {
  const tasks =
    filterMode === mode.all
      ? model().items //all tasks
      : filterMode === mode.active
        ? model().showActiveTasks //active tasks
        : filterMode === mode.done
          ? model().showDoneTasks ///done tasks
          : model().showFavoriteTasks; /// favorite task


  return (
    <DraggableFlatList
      data={tasks}
      renderItem={ListItem}
      keyExtractor={(item) => `draggable-item-${item.key}`}
    //onDragEnd={}
    />
  );
};

const styles = StyleSheet.create({
  all: {
    // borderWidth: 0.6,
    width: Dimensions.get('screen').width * 0.98,
    height: Dimensions.get('screen').height * 0.73,
  },
});

export default observer(TodoList);

/*
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
            delete={model().deleteTask}
          />
        );
      })}
    </ScrollView>

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
