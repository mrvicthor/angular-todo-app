import { Injectable } from '@angular/core';
import { FilterState, Todo } from 'src/shared/model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private todoSubject = new Subject<Todo[]>();

  addTodo(todo: string): void {
    this.todos.push({
      id: Math.floor(Math.random() * 100 + 1),
      title: todo,
      completed: false,
    });
    this.updateTodoSubject();
  }
  getTodos(): Observable<Todo[]> {
    return this.todoSubject.asObservable();
  }

  toggleComplete(id: number): void {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.updateTodoSubject();
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.updateTodoSubject();
  }

  private updateTodoSubject(): void {
    this.todoSubject.next([...this.todos]);
  }

  filterTodos(filterState: FilterState): void {
    let filteredTodos: Todo[] = this.todos;

    if (filterState === FilterState.ACTIVE) {
      filteredTodos = this.todos.filter((todo) => todo.completed === false);
    } else if (filterState === FilterState.COMPLETED) {
      filteredTodos = this.todos.filter((todo) => todo.completed === true);
    }

    this.todoSubject.next(filteredTodos);
  }

  clearCompleted(): void {
    this.todos = this.todos.filter((todo) => todo.completed === false);
    this.updateTodoSubject();
  }
}
