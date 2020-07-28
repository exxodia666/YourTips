import {decorate, observable, action} from 'mobx';

class TaskModel {
  text = '';
  finished = false;
  favorite = false;
  selected = false;

  constructor({id, text, finished = false, favorite = false, selected = false}) {
    this.id = id;
    this.text = text;
    this.finished = finished;
    this.favorite = favorite;
    this.selected = selected;
  }

  toggleTask = () => {
    this.finished = !this.finished;
  };

  toggleSelect = () => {
    this.selected = !this.selected;
  };

  makeTaskFavorite = () => {
    this.favorite = !this.favorite;
  };

  editTask = task => {
    this.text = task;
  };
}
export default decorate(TaskModel, {
  text: [observable],
  finished: [observable],
  selected: [observable],
  favorite: [observable],
  toggleTask: action,
  editTask: action,
  makeTaskFavorite: action,
});
