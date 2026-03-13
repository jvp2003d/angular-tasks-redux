import { TestBed } from '@angular/core/testing';
import { TasksStore } from './tasks.store';

describe('TasksStore', () => {
  let store: InstanceType<typeof TasksStore>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksStore],
    });
    store = TestBed.inject(TasksStore);
  });

  it('should have initial state', () => {
    expect(store.tasks().length).toBe(2);
  });

  it('should add a task when title is valid', () => {
    store.addTask('New Task');
    expect(store.tasks().length).toBe(3);
    expect(store.tasks()[2].title).toBe('New Task');
  });

  it('should not add a task when title is empty', () => {
    const initialCount = store.tasks().length;
    store.addTask('');
    expect(store.tasks().length).toBe(initialCount);
  });

  it('should not add a task when title is only whitespace', () => {
    const initialCount = store.tasks().length;
    store.addTask('   ');
    expect(store.tasks().length).toBe(initialCount);
  });

  it('should trim the task title', () => {
    store.addTask('  Trimmed Task  ');
    const tasks = store.tasks();
    expect(tasks[tasks.length - 1].title).toBe('Trimmed Task');
  });
});
