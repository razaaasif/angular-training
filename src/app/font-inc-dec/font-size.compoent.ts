import { Component } from '@angular/core';

@Component({
  selector: 'app-font-app',
  template: `
    <div class="container">
      <app-font-change [(fontSize)]="fontSize">

      </app-font-change>

      <div [style.font-size.px]="fontSize">Size</div>
      <div>{{ fontSize }}</div>
    </div>
  `,
})
export class FontInccomponent {
  fontSize: number = 16;
}
