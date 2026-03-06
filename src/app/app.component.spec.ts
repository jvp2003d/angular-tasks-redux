import { render, screen, fireEvent } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { TasksStore } from './tasks.store';
import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

describe('AppComponent', () => {
  beforeAll(() => {
    try {
      TestBed.initTestEnvironment(
        BrowserDynamicTestingModule,
        platformBrowserDynamicTesting()
      );
    } catch {
      // already initialized
    }
  });

  it('should render the title', async () => {
    await render(AppComponent, {
      providers: [provideZonelessChangeDetection()]
    });
    expect(screen.getByText('angular-tasks-redux')).toBeDefined();
  });

  it('should render initial tasks from store', async () => {
    await render(AppComponent, {
      providers: [provideZonelessChangeDetection()]
    });
    expect(screen.getByText('Learn Angular 21')).toBeDefined();
    expect(screen.getByText('Use Signal Store')).toBeDefined();
  });

  it('should add a new task', async () => {
    await render(AppComponent, {
      providers: [provideZonelessChangeDetection()]
    });

    const input = screen.getByPlaceholderText('New task title') as HTMLInputElement;
    const addButton = screen.getByText('Add Task');

    fireEvent.input(input, { target: { value: 'New Test Task' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Test Task')).toBeDefined();
  });

  it('should toggle a task', async () => {
    await render(AppComponent, {
      providers: [provideZonelessChangeDetection()]
    });

    const taskText = screen.getByText('Learn Angular 21');
    const toggleButton = screen.getAllByText('Toggle')[0];

    expect(taskText.style.textDecoration).toBe('none');

    fireEvent.click(toggleButton);
    expect(taskText.style.textDecoration).toBe('line-through');

    fireEvent.click(toggleButton);
    expect(taskText.style.textDecoration).toBe('none');
  });

  it('should remove a task', async () => {
    await render(AppComponent, {
      providers: [provideZonelessChangeDetection()]
    });

    const removeButton = screen.getAllByText('Remove')[0];
    fireEvent.click(removeButton);

    expect(screen.queryByText('Learn Angular 21')).toBeNull();
  });
});
