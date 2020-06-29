import {decorate, observable, action} from 'mobx';
import {Alert} from 'react-native';

class Todos {
  todos = [
    {id: 0, text: 'Learn React', finished: false},
    {id: 1, text: 'Learn Mobx', finished: false},
    {id: 2, text: 'Learn Redux', finished: false},
  ];
  addTodo(input) {
    Alert.alert('Add Action');
  }
  deleteTodo(id) {
    console.log('Delete Action');
  }
  showFinished() {
    console.log('showFinished Action');
  }
  showActive() {
    console.log('Show active Action');
  }
  showAll() {
    console.log('all Action');
  }
}

decorate(Todos, {
  title: observable,
  finished: observable,
  addTodo: action,
  deleteTodo: action,
  showFinished: action,
  showActive: action,
  showAll: action,
});

const TodoStore = new Todos();

export default TodoStore;
