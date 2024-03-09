import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-ngmodel',
  template: `
    <div class="container">
      <input type="text" class="" [(ngModel)]="xyz" />
      <p>{{ xyz }}</p>
    </div>
  `,
})
export class NgModelDemoComponent {
  xyz: string = 'RCM';
}
