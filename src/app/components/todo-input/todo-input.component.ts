import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
})
export class TodoInputComponent {
  @Input() toggleBgColor!: boolean;
  @Input() newTodo: string = '';
  addTodo() {
    console.log('Todo added');
  }
}
