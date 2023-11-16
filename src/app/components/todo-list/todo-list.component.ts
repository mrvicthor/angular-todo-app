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
  activeTab: string | null = null;
  tabs: string[] = ['All', 'Active', 'Completed'];
  todos: Todo[] = [];
  filter: 'All' | 'Active' | 'Completed' = 'All';
  constructor(private todoService: TodoService) {}
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

  setActive(value: string): void {
    this.activeTab = value;
  }

  filterTodos(todos: Todo[]): Todo[] {
    switch (this.filter) {
      case 'Active':
        return todos.filter((todo) => todo.completed === false);
      case 'Completed':
        return todos.filter((todo) => todo.completed === true);
      default:
        return todos;
    }
  }

  handleFilter(filter: 'All' | 'Active' | 'Completed'): void {
    this.filter = filter;
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = this.filterTodos(todos);
    });
  }

  ngOnInit(): void {
    this.setActive('All');
    this.todoService
      .getTodos()
      .subscribe((todos) => (this.todos = this.filterTodos(todos)));
  }
}
