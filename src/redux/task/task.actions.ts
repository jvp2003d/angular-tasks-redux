import { Action } from "@ngrx/store";
import { Task } from "./task.model";

export const TASK_ADD = "[Tasks] add";
export class TasksAddAction implements Action {
  readonly type = TASK_ADD;
  constructor(
    public payload: Task
  ) {

  }
}

export type AllActions = TasksAddAction;
