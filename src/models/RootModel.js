import TaskListModel from './TaskListModel';
import TaskModel from './TaskModel';

const tasks = [
  {id: 0, text: 'Buy bread', finished: false},
  {id: 1, text: 'Buy milk', finished: true},
  {id: 2, text: 'Buy meat', finished: false},
];
class RootModel {
  constructor() {
    this.tasks = new TaskListModel({
      items: tasks.map(item => new TaskModel(item)),
    });
  }
}
export default new RootModel();
