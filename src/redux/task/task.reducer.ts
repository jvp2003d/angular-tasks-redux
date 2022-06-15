import { Task } from "./task.model";
import { Action } from "@ngrx/store";
import { AllActions, TASK_ADD } from "./task.actions";

export function tasksReducer(oldState: Task[], action: AllActions): Task[] {

  switch (action.type) {
    case TASK_ADD:
      const newState: Task[] = [
        ...oldState, action.payload
      ]
      return newState;

    default:
      return oldState;
  }
}
