import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import InputComponent from './components/InputComponents';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <SafeAreaView>
      <InputComponent />
      <TodoList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
