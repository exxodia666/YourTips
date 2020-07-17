import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View} from 'react-native';
import {mode} from '../App';

const FilterButtons = props => {
  return (
    <View style={styles.row}>
      <View style={styles.button}>
        <Button
          title="All"
          onPress={() => {
            props.setMode(mode.all);
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="green"
          title="Active"
          onPress={() => {
            props.setMode(mode.active);
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="red"
          title="Done"
          onPress={() => {
            props.setMode(mode.done);
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="purple"
          title="Favorite"
          onPress={() => {
            props.setMode(mode.favorite);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    margin: 3,
  },
});

export default FilterButtons;
