import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/redux/task/task.model';

@Component({
  selector: 'tsk-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: TaskModel = {title:'', completed: false, date: new Date()};
  constructor() { }

  ngOnInit(): void {
  }

}
