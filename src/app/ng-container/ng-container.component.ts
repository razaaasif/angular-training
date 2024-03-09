import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  template: `
    <ng-container *ngIf="name != null; else elseCond">{{ name }}</ng-container>
    <ng-template #elseCond>
      <div>It is null</div>
    </ng-template>

    x:{{ x }}
    y:{{ y }}
   z: {{ z }}
  `,
})
export class NgContainerComponent {
  name: string = null;
  x: string = 'x';
  y: string = 'y';
  z: string = 'z';

  constructor() {
    setTimeout(() => {
      this.name = 'RCM';
    }, 1000);
  }
}
