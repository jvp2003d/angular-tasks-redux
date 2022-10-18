// Para calcular algo del estado combiando varias partes del store

import { state } from '@angular/animations';
import { createSelector} from '@ngrx/store';
import {AppState} from '../app.state';

export const selectTasks = (state: AppState) => state.tasks;
export const selectFilter = (state: AppState) => state.filter;

export const getVisibleTasks = createSelector(
  selectTasks,
  selectFilter,
  (tasks, filter) => {
    switch (filter) {
      case 'SHOW_ACTIVE':
        return tasks.filter(task => !task.completed);
      case 'SHOW_DONE':
        return tasks.filter(task => task.completed);

      default:// ALL
        return tasks;
    }
  } )
