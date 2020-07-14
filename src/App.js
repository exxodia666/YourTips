import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, AsyncStorage} from 'react-native';
import InputComponent from './components/InputComponents';
import TodoList from './components/TodoList';
import RootModel from './models/RootModel';
import 'mobx-react/batchingForReactNative';
import FilterButtons from './components/FilterButtons';
import {AsyncTrunk, date} from 'mobx-sync';

export const mode = {
  all: 'all',
  done: 'done',
  active: 'active',
  favorite: 'favorite',
};

const App = () => {
  const [filterMode, setFilterMode] = useState(mode.all);
  const trunk = new AsyncTrunk(RootModel, {storage: AsyncStorage});
  const [loaded, setLoaded] = useState(false);
  
  trunk.init().then(() => {
    setLoaded(true);
  });

  const MobxContext = React.createContext(null);

  function useRootModel() {
    const Root = React.useContext(MobxContext);
    return Root;
  }
  if (loaded) {
    return (
      <SafeAreaView>
        <MobxContext.Provider value={RootModel}>
          <InputComponent model={useRootModel} />
          <FilterButtons setMode={setFilterMode} />
          <TodoList model={useRootModel} filterMode={filterMode} />
        </MobxContext.Provider>
      </SafeAreaView>
    );
  } else {
    return <Text>loading</Text>;
  }
};

const styles = StyleSheet.create({});

export default App;
