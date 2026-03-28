import { computed } from '@angular/core';
import { signalStore, withState, withMethods, patchState, withComputed } from '@ngrx/signals';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface TasksState {
  taskEntities: Record<number, Task>;
}

const initialState: TasksState = {
  taskEntities: {
    1: { id: 1, title: 'Learn Angular 21', completed: false },
    2: { id: 2, title: 'Use Signal Store', completed: false },
  },
};

export const TasksStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ taskEntities }) => ({
    tasks: computed(() => Object.values(taskEntities())),
  })),
  withMethods((store) => ({
    addTask(title: string) {
      const id = Date.now();
      const newTask: Task = {
        id,
        title,
        completed: false,
      };
      patchState(store, (state) => ({
        taskEntities: { ...state.taskEntities, [id]: newTask },
      }));
    },
    toggleTask(id: number) {
      patchState(store, (state) => {
        const task = state.taskEntities[id];
        if (!task) return state;
        return {
          taskEntities: {
            ...state.taskEntities,
            [id]: { ...task, completed: !task.completed },
          },
        };
      });
    },
    removeTask(id: number) {
      patchState(store, (state) => {
        const { [id]: _, ...taskEntities } = state.taskEntities;
        return { taskEntities };
      });
    },
  }))
);
