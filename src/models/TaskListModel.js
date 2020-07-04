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
}

export default decorate(TaskListModel, {
  items: observable,
  addTask: action,
});
/*
class TodoListModel {
    items = [];
    constructor({ items }) {
      this.items = items;
    }
  
    addTask = (text) => {
      this.items.push(new TodoModel({ id: this.items.length, text: text }));
    };
  
    //todo DeleteTask
  
    /*
    get selectedCount() {
      return this.items.filter((i) => i.isSelected).length;
    }
  }
  export default decorate(TodoListModel, {
    items: observable,
    // selectedCount: computed,
    addTask: action,
  });
  */
