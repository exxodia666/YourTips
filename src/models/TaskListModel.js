import TaskModel from './TaskModel';
const {decorate, observable, action, computed} = require('mobx');

class TaskListModel {
  items = [];
  constructor({items}) {
    this.items = items;
  }
  addTask = text => {
    console.log('ADD');
    this.items.push(
      new TaskModel({
        id: Math.random(),
        text: text,
      }),
    );
  };

  deleteTask = id => {
    console.log('DELETE ACTION');
    this.items = this.items.filter(item => item.id !== id);
  };

  get showActiveTasks() {
    console.log('Computed');
    return this.items.filter(item => {
      return item.finished === false;
    });
  }

  get showDoneTasks() {
    console.log('Computed 2');
    return this.items.filter(item => {
      return item.finished === true;
    });
  }
  get showFavoriteTasks() {
    return this.items.filter(item => {
      return item.favorite === true;
    });
  }
}

export default decorate(TaskListModel, {
  items: observable,
  addTask: action,
  deleteTask: action,
  showActiveTasks: computed,
  showDoneTasks: computed,
  showFavoriteTasks: computed,
});
