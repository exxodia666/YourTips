import TaskListModel from './TaskListModel';
import {create} from 'mobx-persist';
import {AsyncStorage} from 'react-native';

const tasks = [];
const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
});

class RootModel {
  listStore = new TaskListModel(tasks);
  constructor() {
    hydrate('list', this.listStore).then(() => {
      this.listStore.saveTasks(this.listStore.items);
    });
  }
}
export default new RootModel();
