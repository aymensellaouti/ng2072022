import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { LoggerService } from '../../services/logger.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  constructor(
    private logger: LoggerService
  ) { }

  // Logger lal liste des todos
  logTodos(): void {
    this.logger.log(this.todos);
  }
  // récupérer la liste des todos
  getTodos(): Todo[] {
    return this.todos;
  }
  //ajouter un Todo
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
  //delete todo
  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
