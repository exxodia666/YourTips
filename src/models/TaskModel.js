const {decorate, observable, action} = require('mobx');

class TaskModel {
  text = '';
  finished = false;
  constructor({id, text}) {
    this.id = id;
    this.text = text;
  }
  toggleTask() {
    this.finished = !this.finished;
  }
}

export default decorate(TaskModel, {
  text: observable,
  finished: observable,
  toggleTask: action,
});
