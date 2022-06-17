import { TaskModel } from "./task.model";
import { GlobalActions,AllActions, TasksAddAction, TasksDeleteAction } from "./task.actions";

export function tasksReducer(oldState: TaskModel[] = [], action: AllActions): TaskModel[] {

  switch (action.type) {
    case GlobalActions.TASK_ADD:
      return [
        ...oldState, (<TasksAddAction>action).payload
      ]


    case GlobalActions.TASK_DELETE:
      // return all tasks distinct to task id
      return oldState.filter( task => task.id !== (<TasksDeleteAction>action).payload);


    default:
      return oldState;
  }
}
