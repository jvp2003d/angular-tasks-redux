import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [
    { id: 1, title: 'Learn Angular 21', completed: false },
    { id: 2, title: 'Use Signal Store', completed: false },
  ],
};

export const TasksStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    addTask(title: string) {
      const newTask: Task = {
        id: Date.now(),
        title,
        completed: false,
      };
      patchState(store, (state) => ({ tasks: [...state.tasks, newTask] }));
    },
    toggleTask(id: number) {
      patchState(store, (state) => ({
        tasks: state.tasks.map((t) =>
          t.id === id ? { ...t, completed: !t.completed } : t
        ),
      }));
    },
    removeTask(id: number) {
      patchState(store, (state) => ({
        tasks: state.tasks.filter((t) => t.id !== id),
      }));
    },
  }))
);
