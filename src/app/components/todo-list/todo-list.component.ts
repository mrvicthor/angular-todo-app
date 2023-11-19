import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TodoService } from 'src/app/services/todo.service';
import { Todo, FilterState } from 'src/shared/model';
import { map, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() toggleBgColor!: boolean;
  todos: Todo[] = [];
  totalActiveTodo: number = 0;
  FilterState = FilterState;
  activeFilter: BehaviorSubject<FilterState> = new BehaviorSubject<FilterState>(
    FilterState.ALL
  );
  constructor(private todoService: TodoService) {
    this.todoService.getTodos().subscribe((todos) => (this.todos = todos));
    this.todoService
      .getTodos()
      .pipe(
        map((todos: Todo[]) => todos.filter((todo) => !todo.completed).length)
      )
      .subscribe((totalActiveTodos: number) => {
        this.totalActiveTodo = totalActiveTodos;
      });
  }
  toggleTodo(id: number): void {
    this.todoService.toggleComplete(id);
  }

  ngOnInit(): void {}
  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }

  drop(event: CdkDragDrop<Todo[]>) {
    moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  }

  clearCompletedTodo() {
    this.todoService.clearCompleted();
  }
  setActive(filterState: FilterState): void {
    this.activeFilter.next(filterState);
    this.todoService.filterTodos(filterState);
  }
}
