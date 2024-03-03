import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styles: [
    `
      .width {
        width: 400px;
      }
    `,
  ],
})
export class NgIfComponent implements OnInit {
  message: string = 'a';
  constructor() {}

  ngOnInit(): void {}
}
