import { TaskModel } from "./task.model";
import { Action } from "@ngrx/store";
import { AllActions, TASK_ADD } from "./task.actions";

export function tasksReducer(oldState: TaskModel[], action: AllActions): TaskModel[] {

  switch (action.type) {
    case TASK_ADD:
      const newState: TaskModel[] = [
        ...oldState, action.payload
      ]
      return newState;

    default:
      return oldState;
  }
}
