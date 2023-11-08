import { Component, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/shared/model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() toggleBgColor!: boolean;
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }
}
