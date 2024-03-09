import { Component, ViewChild } from '@angular/core';
import { NgContainerComponent } from './ng-container/ng-container.component';

@Component({
  selector: 'app-root',
  template: `
   <app-http></app-http>
  `,
})
export class AppComponent {
  @ViewChild(NgContainerComponent) myChild: NgContainerComponent;
  selected!: string;
  xyz() {
    console.log(this.myChild);
    this.myChild.x ='new value'
  }
}
