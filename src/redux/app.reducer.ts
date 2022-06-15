import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { tasksReducer } from "./task/task.reducer";

export const AppReducer: ActionReducerMap<object> = {
  tasks: tasksReducer,
}
