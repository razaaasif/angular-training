import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  template: `
    <div [ngSwitch]="choice">
      <div *ngSwitchCase="'case1'">This is case1</div>
      <div *ngSwitchCase="'case2'">This is case2</div>
      <div *ngSwitchCase="'case3'">This is case3</div>
      <div *ngSwitchDefault>This is default</div>
    </div>
  `,
  styleUrls: ['./ng-switch.component.css'],
})
export class NgSwitchComponent implements OnInit {
  public choice: string = 'xyz';
  constructor() {
    setTimeout(() => {
      this.choice = 'case3'
    } ,1000)
  }

  ngOnInit(): void {}
}
