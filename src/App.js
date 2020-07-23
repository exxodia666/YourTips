import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, AsyncStorage, View} from 'react-native';
import InputComponent from './components/InputComponents';
import TodoList from './components/TodoList';
import RootModel from './models/RootModel';
import 'mobx-react/batchingForReactNative';
import FilterButtons from './components/FilterButtons';
import {AsyncTrunk} from 'mobx-sync';
import Counter from './components/Counter';

export const mode = {
  all: 'all',
  done: 'done',
  active: 'active',
  favorite: 'favorite',
};

const App = () => {
  const [filterMode, setFilterMode] = useState(mode.all);
  const [loaded, setLoaded] = useState(true);
  /*
  const trunk = new AsyncTrunk(RootModel, {storage: AsyncStorage});
  trunk
    .init()
    .then(() => {
      setLoaded(true);
    })
    .catch(e => {
      console.log(e);
    });
*/
  const MobxContext = React.createContext(null);

  function useRootModel() {
    const Root = React.useContext(MobxContext);
    return Root;
  }
  if (loaded) {
    return (
      <SafeAreaView>
        <MobxContext.Provider value={RootModel}>
          <View style={styles.app}>
            <FilterButtons setMode={setFilterMode} />
            <Counter model={useRootModel} />
            <TodoList model={useRootModel} filterMode={filterMode} />
            <InputComponent model={useRootModel} />
          </View>
        </MobxContext.Provider>
      </SafeAreaView>
    );
  } else {
    return <Text>loading!</Text>;
  }
};

const styles = StyleSheet.create({
  app: {
    //flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
    //padding: 5,
    alignItems: 'center',
  },
});

export default App;
