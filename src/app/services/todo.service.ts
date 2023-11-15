import { Injectable } from '@angular/core';
import { Todo } from 'src/shared/model';
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
    this.todoSubject.next([...this.todos]);
  }
  getTodos(): Observable<Todo[]> {
    return this.todoSubject.asObservable();
  }

  toggleComplete(id: number): void {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.todoSubject.next([...this.todos]);
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.todoSubject.next([...this.todos]);
  }
}
