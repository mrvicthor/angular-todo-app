import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
})
export class TodoInputComponent implements OnInit {
  @Input() toggleBgColor!: boolean;
  showErrorMessage = false;
  @ViewChild('inputField') inputField!: ElementRef;
  constructor(private todoService: TodoService) {}
  newTodo: FormControl<string | null> = new FormControl<string | null>(
    null,
    Validators.required
  );
  addTodo(): void {
    if (this.newTodo.value?.trim() === '') {
      this.showErrorMessage = true;
      return;
    }
    const newInput = this.newTodo.value;
    this.todoService.addTodo(newInput as string);
    this.newTodo.setValue('');
    this.inputField.nativeElement.blur();
    this.showErrorMessage = false;
  }

  ngOnInit(): void {
    console.log(this.newTodo);
  }
}
