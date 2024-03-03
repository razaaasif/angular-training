import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'output-child',
  template: `
    <button (click)="sendData()" class="btn btn-primary">
      Send Data
    </button>
  `,
  styleUrls: ['./child.component.css'],
})
export class OutputChildComponent implements OnInit {
  @Output() public nameEmitter: EventEmitter<string> =
    new EventEmitter<string>();
  @Output() public name: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  public sendData() {
    this.nameEmitter.emit('data');
    this.name.emit('Aasif');
  }
}
