import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import InputComponent from './components/InputComponents';
import TodoList from './components/TodoList';
import {Provider} from 'mobx-react';
import store from './store/todoStore';
const App = () => {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <InputComponent />
        <TodoList />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
