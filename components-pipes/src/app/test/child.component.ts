import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
   
  `,
  styles: []
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  count = 0;
  increment(){
    this.count++;
  }
  decrement(){
    this.count--;
  }

}
