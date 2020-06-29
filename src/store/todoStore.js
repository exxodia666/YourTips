import {decorate, observable} from 'mobx';

class Todos {
  todos = [
    {id: 0, text: 'Learn React', finished: false},
    {id: 1, text: 'Learn Mobx', finished: false},
    {id: 2, text: 'Learn Redux', finished: false},
  ];
}

decorate(Todo, {
  title: observable,
  finished: observable,
});
