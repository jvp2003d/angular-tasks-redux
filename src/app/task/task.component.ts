import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/redux/app.state';
import { TasksDeleteAction } from 'src/redux/task/task.actions';
import { TaskModel } from 'src/redux/task/task.model';

@Component({
  selector: 'tsk-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: TaskModel = { id: '0', title:'', completed: false, date: new Date()};

  constructor( private _store: Store<AppState>) {}
  ngOnInit(): void {
  }

  deleteTask(){
    const action = new TasksDeleteAction(this.task.id);

    this._store.dispatch(action);
  }

}
