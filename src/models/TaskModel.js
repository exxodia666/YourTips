const {decorate, observable, action} = require('mobx');

class TaskModel {
  text = '';
  finished = false;
  favorite = false;
  selected = false;

  constructor({id, text}) {
    this.id = id;
    this.text = text;
  }

  toggleTask = () => {
    console.log('TOGGLE');
    this.finished = !this.finished;
  };

  toggleSelect = () => {
    console.log('TOGGLE SElect');
    this.selected = !this.selected;
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
  selected: observable,
  favorite: observable,
  toggleTask: action,
  editTask: action,
  makeTaskFavorite: action,
});
