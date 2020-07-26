import TaskModel from './TaskModel';
//import {persist} from 'mobx-persist';
const {decorate, observable, action, computed} = require('mobx');
///import {serializable, primitive} from 'serializr';

class TaskListModel {
  items = [];
  constructor({items}) {
    this.items = items;
  }
  addTask = text => {
    this.items.push(
      new TaskModel({
        id: Math.random(),
        text: text,
      }),
    );
  };

  deleteTask = () => {
    this.items = this.items.filter(item => item.selected === false);
  };

  get showActiveTasks() {
    return this.items.filter(item => {
      return item.finished === false;
    });
  }

  get showDoneTasks() {
    return this.items.filter(item => {
      return item.finished === true;
    });
  }
  get showFavoriteTasks() {
    return this.items.filter(item => {
      return item.favorite === true;
    });
  }

  get showSelectedCount() {
    return this.items.filter(item => {
      return item.selected === true;
    }).length;
  }
}

export default decorate(TaskListModel, {
  items: [observable],
  addTask: action,
  deleteTask: action,
  showActiveTasks: computed,
  showDoneTasks: computed,
  showFavoriteTasks: computed,
  showSelectedCount: computed,
});
