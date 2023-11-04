import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/shared/model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() toggleBgColor!: boolean;
  todos: Todo[] = [];
  constructor(private todoService: TodoService) {}

  getTodos(): void {
    this.todos = this.todoService.getTodos();
  }

  ngOnInit(): void {
    this.getTodos();
    console.log(this.todos);
  }
}
