import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
  <app-child [xyz]="name" [college]="collegeName"
  [rolNo]="role"
  ></app-child>
  `,
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  name: string = 'RCM';
  collegeName: string = 'RCM Intitute';
  role:number = 10
  constructor() {}
  ngOnInit(): void {}
}
