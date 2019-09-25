import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ChildComponent } from './test/child.component';
import { NewComponent } from './test/new.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ChildComponent,
    NewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
