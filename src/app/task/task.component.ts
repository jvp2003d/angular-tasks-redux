import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/redux/app.state';
import { TasksDeleteAction, TasksToggleAction } from 'src/redux/task/task.actions';
import { TaskModel } from 'src/redux/task/task.model';

@Component({
  selector: 'tsk-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: TaskModel = { id: '0', title:'', completed: false, date: new Date()};

  checkField: FormControl;

  constructor( private _store: Store<AppState>) {

    this.checkField = new FormControl(false);

    this.checkField.valueChanges.subscribe(
      value => {
        const action = new TasksToggleAction(this.task.id);
        this._store.dispatch(action);
      }
    );
  }
  ngOnInit(): void {
  }

  deleteTask(){
    const action = new TasksDeleteAction(this.task.id);

    this._store.dispatch(action);
  }

}
