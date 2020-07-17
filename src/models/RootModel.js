import TaskListModel from './TaskListModel';
import TaskModel from './TaskModel';

const tasks = [];
class RootModel {
  constructor() {
    this.tasks = new TaskListModel({
      items: tasks.map(item => new TaskModel(item)),
    });
  }
}
export default new RootModel();
