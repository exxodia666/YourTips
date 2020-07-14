const {decorate, observable, action} = require('mobx');

class TaskModel {
  text = '';
  finished = false;
  favorite = false;

  constructor({id, text}) {
    this.id = id;
    this.text = text;
  }

  toggleTask = () => {
    console.log('TOGGLE');
    this.finished = !this.finished;
  };

  makeTaskFavorite = () => {
    this.favorite = !this.favorite;
  };

  editTask = task => {
    console.log('EDIT');
    this.text = task;
  };
}
export default decorate(TaskModel, {
  text: observable,
  finished: observable,
  favorite: observable,
  toggleTask: action,
  editTask: action,
  makeTaskFavorite: action,
});
