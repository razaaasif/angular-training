import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-parent',
  template: `
    <app-two-way-child [(name)]="name"></app-two-way-child>
    Parent : {{ name }}
  `,
})
export class TwoParentComponent {
  public name: string = 'RCM';

  setName(name: string) {
    this.name = name;
  }
}
