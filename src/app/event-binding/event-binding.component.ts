import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
  <input (keydown.enter)="enterKeyPressed($event)" />

  `,
  styles: [
    `
      .special {
        color: red;
      }
    `,
  ],
})
export class EventBindingComponent {

  public enterKeyPressed(event: Event) {
    alert('Enter pressed');
  }
}
