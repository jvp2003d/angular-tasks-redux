import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/redux/app.state';
import { TasksAddAction } from 'src/redux/task/task.actions';

@Component({
  selector: 'tsk-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  textField: FormControl;
  constructor( private _store: Store<AppState>) {
    this.textField = new FormControl('', [Validators.required]);
   }

  ngOnInit(): void {
  }

  addTask() {
    const action = new TasksAddAction({
     id: Math.random().toString(),
     title: this.textField.value,
     completed: false,
     date: new Date()
    });
     this._store.dispatch(action);
     this.textField.setValue('');
  }


}
