import { Todo } from './../models/todo';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  todos: Todo[] = [
    {
      text:'Yapılacak 1',
      createdAt:new Date()
    },
    {
      text: 'Yapılacak 2',
      createdAt:new Date()
    }
  ];

  constructor() { }

  GetTodos(){
    return this.todos;
  }
AddTodo(obj) {
  this.todos.push(obj);
}
RemoveTodo(todo: Todo){
  const index=this.todos.indexOf(todo);
  this.todos.splice(index,1);
}
}
