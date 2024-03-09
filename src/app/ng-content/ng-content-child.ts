import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-child',
  template: `
    <div>Child start</div>
    <ng-content> </ng-content>
    <div>Child end</div>
  `,
})
export class NgContentChild {}
