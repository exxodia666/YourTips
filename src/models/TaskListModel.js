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
  //s  console.log('DELETE ACTION');
    this.items = this.items
      .filter(item => item.id !== id)
      .map(item => {
        if (item.id > id) {
          return {...item, id: item.id - 1};
        } else {
          return item;
        }
      });
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
