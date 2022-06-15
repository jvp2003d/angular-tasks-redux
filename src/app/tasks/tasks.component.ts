import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { TaskModel } from '../../redux/task/task.model';

@Component({
  selector: 'tsk-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: TaskModel[] = [{title:'', completed: false, date: new Date()}];
  constructor( private _store: Store<AppState>) {
    this.readTaskState();
   }

  ngOnInit(): void {
  }

  private readTaskState() {
    this._store.select('tasks').subscribe((tasks) => this.tasks=tasks)
  }

}
