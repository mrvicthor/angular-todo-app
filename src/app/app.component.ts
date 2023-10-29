import { Component } from '@angular/core';
import { Todo } from 'src/shared/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';

  todos: Todo[] = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Get better', completed: false },
    { id: 3, title: 'Continue learning', completed: false },
  ];
}
