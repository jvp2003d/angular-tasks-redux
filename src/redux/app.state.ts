import { TaskModel} from "./task/task.model";

export interface AppState {
  tasks: TaskModel[];
  filter: string;
}
