import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      {{"Hello " + name}}
    </h2>
    <button (click)=fireEvent()>Send Event</button>

    <h2>{{"Angular" | lowercase}}</h2>
    <h2>{{"Angular" | uppercase}}</h2>
    <h2>{{"Welcome to Angular" | titlecase}}</h2>
    <h2>{{"WelcomeAngular" | slice:3:6}}</h2> <!-- index 3 to 5 -->
    <h2>{{person | json}}</h2>
    
    <!-- min number of interger digit followed by min number of decimal digit and 
          max number of decimal digit -->
    <h2>{{5.678 | number:'1.2-3'}}</h2>
    <h2>{{5.678 | number:'3.4-5'}}</h2>
    <h2>{{5.678 | number:'3.1-2'}}</h2>
    
    <h2>{{0.25 | percent}}</h2>
    <h2>{{0.25 | currency}}</h2>
    <h2>{{0.25 | currency:'GBP'}}</h2>
    <h2>{{0.25 | currency:'CAD':'code'}}</h2>
    
    <h2>{{date}}</h2>
    <h2>{{date | date}}</h2>
    <h2>{{date | date:'short'}}</h2>
    <h2>{{date | date:'shortDate'}}</h2>
    <h2>{{date | date:'shortTime'}}</h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter<string>();

  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }

  public date = new Date();
  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('Hey Angular');
  }

}
