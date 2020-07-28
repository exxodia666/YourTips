import TaskModel from './TaskModel';
import {persist} from 'mobx-persist';
const {decorate, observable, action, computed} = require('mobx');

class TaskListModel {
  items = [];

  saveTasks = items => {
    this.items = items.map(item => {
      return new TaskModel({
        id: item.id,
        text: item.text,
        finished: item.finished,
        favorite: item.favorite,
        selected: item.selected,
      });
    });
  };

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
  items: [persist('list'), observable],
  addTask: action,
  deleteTask: action,
  showActiveTasks: computed,
  showDoneTasks: computed,
  showFavoriteTasks: computed,
  showSelectedCount: computed,
});
