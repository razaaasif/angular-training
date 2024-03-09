import { Component, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/model/card.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'add-card',
  template: `
    <div class="mb-3">
      <label for="name" class="form-label">Name of Card</label>
      <input
        type="text"
        class="form-control"
        id="name"
        [(ngModel)]="card.name"
      />

    </div>
    <div class="mb-3">
      <label for="name" class="form-label">Description of Card</label>
      <input
        type="text"
        class="form-control"
        id="name"
        [(ngModel)]="card.description"
      />
    </div>
    <div class="mb-3">
      <label for="name" class="form-label">Url of Card</label>
      <input
        type="text"
        class="form-control"
        id="name"
        [(ngModel)]="card.url"
      />

    </div>
    <button (click)="addCard()" class="btn btn-primary">Add Card</button>
  `,
})
export class AddCardComponent {
  card: Card = new Card();

  constructor(private service: ItemService) {

  }
  addCard() {
    this.service.additem(this.card);
  }
}
