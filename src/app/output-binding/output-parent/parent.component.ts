import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'output-parent',
  template: `
    <output-child
      (nameEmitter)="xyz($event)"
      (name)="namePrint($event)"
    ></output-child>
    <!-- <div *ngIf="data">{{ data }}</div> -->
    <div *ngIf="name">{{ name }}</div>
  `,
  styleUrls: ['./parent.component.css'],
})
export class OutputParentComponent implements OnInit {
  data!: string;
  name!: string;
  constructor() {}

  ngOnInit(): void {}
  public xyz(event: string) {
    this.data = event;
    console.log('xyz method data' + event + 'data :' + this.data);
  }
  namePrint(name: string) {
    this.name = name;
  }
}
