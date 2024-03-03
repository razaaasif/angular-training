import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>
      Child Component:
      {{ xyz }}
    </div>

    <div>
      Child Component:
      {{ college }}
    </div>
    <div>Role No. :{{rolNo}}</div>
  `,
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() public xyz!: string;
  @Input() public college!: string;
  @Input() public rolNo!: number;
  constructor() {}

  ngOnInit(): void {}
}
