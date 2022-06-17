import { Action } from "@ngrx/store";
import { TaskModel } from "./task.model";

// Actions
export enum GlobalActions {
  // Add task action
  TASK_ADD = "[Tasks] add",
  // Delete task
  DELETE_TASK = "[Tasks] add"
}

export class TasksAddAction implements Action {
  readonly type = GlobalActions.TASK_ADD;
  constructor(
    public payload: TaskModel
  ) {

  }
}

export type AllActions = TasksAddAction;
