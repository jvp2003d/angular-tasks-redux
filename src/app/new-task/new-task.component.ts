import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/redux/app.state';
import { TasksAddAction } from 'src/redux/task/task.actions';

@Component({
  selector: 'tsk-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor( private _store: Store<AppState>) {
   }

  ngOnInit(): void {
  }

  add() {
    const action = new TasksAddAction({
     title: 'New task',
     completed: false,
     date: new Date()});
     this._store.dispatch(action);
  }


}
