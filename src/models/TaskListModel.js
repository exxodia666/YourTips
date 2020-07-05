import TaskModel from './TaskModel';
const {decorate, observable, action} = require('mobx');

class TaskListModel {
  items = [];
  constructor({items}) {
    this.items = items;
  }
  addTask = text => {
    this.items.push(
      new TaskModel({
        id: this.items.length,
        text: text,
      }),
    );
  };

  deleteTask = id => {
    this.items.filter(item => item.id !== id);
  };

  editTask = (id, text) => {
    this.items[id].text = text;
  };
}

export default decorate(TaskListModel, {
  items: observable,
  addTask: action,
  deleteTask: action,
  editTask: action,
});