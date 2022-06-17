import { Action } from "@ngrx/store";
import { TaskModel } from "./task.model";

// Actions
export enum GlobalActions {
  // Add task action
  TASK_ADD = "[Tasks] add",
  // Delete task
  TASK_DELETE = "[Tasks] delete"
}

export class TasksAddAction implements Action {
  public readonly type = GlobalActions.TASK_ADD;

  constructor(  public payload: TaskModel
  ) {

  }
}

export class TasksDeleteAction implements Action {
  public readonly type = GlobalActions.TASK_DELETE;
  constructor(public payload: string
  ) {

  }
}

export type AllActions = TasksAddAction | TasksDeleteAction;
