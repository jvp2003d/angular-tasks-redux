import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskModel } from 'src/redux/task/task.model';
import { getVisibleTasks } from 'src/redux/task/task.selectors';
import { AppState } from '../../redux/app.state';

@Component({
  selector: 'tsk-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: TaskModel[] = [{ id: '0', title:'', completed: true, date: new Date()}];
  constructor( private _store: Store<AppState>) {
    this.readTaskState()
   }

  ngOnInit(): void {
  }

  private readTaskState() {
    this._store.select(getVisibleTasks).subscribe((tasks) => this.tasks=tasks)
  }

}
