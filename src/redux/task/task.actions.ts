import { Action } from "@ngrx/store";
import { TaskModel } from "./task.model";

export const TASK_ADD = "[Tasks] add";
export class TasksAddAction implements Action {
  readonly type = TASK_ADD;
  constructor(
    public payload: TaskModel
  ) {

  }
}

export type AllActions = TasksAddAction;
