import TaskListModel from './TaskListModel';
import TaskModel from './TaskModel';
import {autorun} from 'mobx';

const tasks = [];
class RootModel {
  constructor() {
    this.tasks = new TaskListModel({
      items: tasks.map(item => new TaskModel(item)),
    });
  }

  dispose = autorun(() => {
    console.log('TRIGGER' + this.tasks);
  });
}
export default new RootModel();
