import {persist} from 'mobx-persist';
import {decorate, observable, action} from 'mobx';
import {serializable, primitive} from 'serializr';
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
