import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  template: `
   
  `,
  styles: []
})
export class NewComponent implements OnInit {

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
