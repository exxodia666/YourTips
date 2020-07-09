import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import InputComponent from './components/InputComponents';
import TodoList from './components/TodoList';
import RootModel from './models/RootModel';
import 'mobx-react/batchingForReactNative';
import FilterButtons from './components/FilterButtons';

export const mode = {
  all: 'all',
  done: 'done',
  active: 'active',
  favorite: 'favorite',
};

const App = () => {
  const [filterMode, setFilterMode] = useState(mode.all);

  const MobxContext = React.createContext(null);

  function useRootModel() {
    const Root = React.useContext(MobxContext);
    return Root;
  }
  return (
    <SafeAreaView>
      <MobxContext.Provider value={RootModel}>
        <InputComponent model={useRootModel} />
        <FilterButtons setMode={setFilterMode} />
        <TodoList model={useRootModel} filterMode={filterMode} />
      </MobxContext.Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
