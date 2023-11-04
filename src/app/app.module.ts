import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormWrapperComponent } from './components/form-wrapper/form-wrapper.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [AppComponent, FormWrapperComponent, TodoInputComponent, TodoListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
