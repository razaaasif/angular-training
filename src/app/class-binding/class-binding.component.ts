import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: ` <p [class.special]="multiClass">class-binding works!</p> `,
  styles: [
    `
      .special {
        color: red;
        font-weight: bold;
      }
      .success {
        color: green;
        font-weight: bold;
      }
    `,
  ],
})
export class ClassBindingComponent implements OnInit {
  public isSpecial: boolean = false;
  multiClass: Array<string> =['success','special'];
  constructor() {}

  ngOnInit(): void {}
}
