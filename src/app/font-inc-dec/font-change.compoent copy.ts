import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-font-change',
  template: `
    <button class="btn btn-primary" (click)="inc()">+</button>
    <button class="btn btn-danger" (click)="dec()">-</button>
    {{ fontSize }}
  `,
})
export class FontChnagecomponent {
  @Input() fontSize: number;
  @Output() fontSizeChange: EventEmitter<number> = new EventEmitter<number>();
  inc() {
    this.fontSize++;
    this.fontSizeChange.emit(this.fontSize);
  }

  dec() {
    this.fontSize--;
    this.fontSizeChange.emit(this.fontSize);
  }
}
