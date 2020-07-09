import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View} from 'react-native';
import {mode} from '../App';

const FilterButtons = props => {
  return (
    <View style={styles.row}>
      <Button
        title="All"
        onPress={() => {
          props.setMode(mode.all);
        }}
      />
      <Button
        title="Active"
        onPress={() => {
          props.setMode(mode.active);
        }}
      />
      <Button
        title="Done"
        onPress={() => {
          props.setMode(mode.done);
        }}
      />
      <Button
        title="Favorite"
        onPress={() => {
          props.setMode(mode.favorite);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    padding: 5,
    //flex: 1,
    flexDirection: 'row',
    backgroundColor: 'yellow',
    justifyContent: 'space-evenly',
    // alignItems: 'center',
  },
});

export default FilterButtons;
