import { Component, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-two-way-child',
  template: `
    <div class="container">
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Name</label>
        <input type="text" [(ngModel)]="name" />
      </div>

      <button class="btn btn-primary" (click)="sendData()">
        Submit
      </button>
    </div>
  `,
})
export class TwoChildComponent {
  @Input() name: string = null;
  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();
  sendData() {
    this.nameChange.emit(this.name);
  }
}
