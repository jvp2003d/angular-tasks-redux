import { TaskModel } from "./task.model";
import { AllActions, TASK_ADD } from "./task.actions";

export function tasksReducer(oldState: TaskModel[] = [], action: AllActions): TaskModel[] {

  switch (action.type) {
    case TASK_ADD:
      const newState = [
        ...oldState, action.payload
      ]
      return newState;

    default:
      return oldState;
  }
}
