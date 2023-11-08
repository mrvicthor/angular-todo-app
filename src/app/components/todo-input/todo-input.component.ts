import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
})
export class TodoInputComponent implements OnInit {
  @Input() toggleBgColor!: boolean;
  constructor(private todoService: TodoService) {}
  newTodo: FormControl<string | null> = new FormControl<string | null>(
    null,
    Validators.required
  );
  addTodo(): void {
    if (this.newTodo.value?.trim() === '') return;
    const newInput = this.newTodo.value;
    this.todoService.addTodo(newInput as string);
    console.log(this.newTodo);
    this.newTodo.setValue('');
  }

  ngOnInit(): void {
    console.log(this.newTodo);
  }
}
