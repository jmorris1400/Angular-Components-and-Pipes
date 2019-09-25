import { Component, ViewChild } from '@angular/core';
import { NewComponent } from './test/new.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public name = "Angular";
  public message = "";

  @ViewChild(NewComponent) new: NewComponent;

  increment(){
    this.new.increment();
  }

  decrement(){
    this.new.decrement();
  }
}
