import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import InputComponent from './components/InputComponents';
import TodoList from './components/TodoList';
import RootModel from './models/RootModel';
import 'mobx-react/batchingForReactNative'
const App = () => {
  const MobxContext = React.createContext(null);
  //console.log('RootModel');
  //console.log(RootModel.tasks.addTask);
  function useRootModel() {
    const Root = React.useContext(MobxContext);
    return Root;
  }
  return (
    <SafeAreaView>
      <MobxContext.Provider value={RootModel}>
        <InputComponent model={useRootModel} />
        <TodoList model={useRootModel} />
      </MobxContext.Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
