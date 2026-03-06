import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksStore } from './tasks.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tasks-redux';
  readonly store = inject(TasksStore);
}
