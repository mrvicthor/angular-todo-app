import { Injectable } from '@angular/core';
import { Todo } from 'src/shared/model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  getTodos(): Todo[] {
    const todos: Todo[] = [
      { id: 1, title: 'learn Angular', completed: false },
      { id: 2, title: 'ReactJs', completed: false },
      { id: 3, title: 'Lunch break', completed: true },
    ];
    return todos;
  }
}
