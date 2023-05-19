import { Injectable } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  todos: Todo[];

  constructor() {
    this.todos = [
      {
        title: 'Regalo alla Nonna',
        description: 'Compra il profumo che le piace tanto',
        priority: 3
      },
      {
        title: 'compra il pane',
        priority: 1
      },
      {
        title: 'prepara la cena',
        priority: 2,
        description: 'Il purè con le patate'
      },
      {
        title: 'Regalo alla Nonna',
        description: 'Compra il profumo che le piace tanto',
        priority: 3
      },
      {
        title: 'compra il pane',
        priority: 1
      },
      {
        title: 'prepara la cena',
        priority: 2,
        description: 'Il purè con le patate'
      },
      {
        title: 'Regalo alla Nonna',
        description: 'Compra il profumo che le piace tanto',
        priority: 3
      },
      {
        title: 'compra il pane',
        priority: 1
      },
      {
        title: 'prepara la cena',
        priority: 2,
        description: 'Il purè con le patate'
      },
      {
        title: 'Regalo alla Nonna',
        description: 'Compra il profumo che le piace tanto',
        priority: 3
      },
      {
        title: 'compra il pane',
        priority: 1
      },
      {
        title: 'prepara la cena',
        priority: 2,
        description: 'Il purè con le patate'
      }
    ];
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
  }

  deleteTodo(todoToDelete: Todo){
    this.todos = this.todos.filter(todo => todo.title !== todoToDelete.title);
    console.log(this.todos);
  }
}
