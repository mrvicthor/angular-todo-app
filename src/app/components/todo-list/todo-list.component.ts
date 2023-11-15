import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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
  constructor(private todoService: TodoService) {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
  }
  toggleTodo(id: number): void {
    this.todoService.toggleComplete(id);
    console.log(this.todos);
  }
  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }

  drop(event: CdkDragDrop<Todo[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

  getUncompletedTodos(): number {
    return this.todos.filter((todo) => !todo.completed).length;
  }

  ngOnInit(): void {
    console.log(this.todos);
  }
}
