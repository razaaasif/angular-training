import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-parent',
  template: `
    <app-ng-child>
      <div>message</div>
      <div>message</div>
      <div>message</div>
      <div>message</div>
    </app-ng-child>
  `,
})
export class NgContentparent {}
