import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { FooterComponent } from './footer/footer.component';
import {  StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppReducer } from 'src/redux/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TasksComponent,
    NewTaskComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({
      maxAge:25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
