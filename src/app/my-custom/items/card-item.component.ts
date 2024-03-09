import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'card-detail',
  template: `
    <div class="card" style="width: 15rem">
      <img [src]="card.url" class="card-img-top" [alt]="card.name" />
      <div class="card-body">
        <h5 class="card-title">{{ card.name }}</h5>
        <p class="card-text">
          {{ card.description }}
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  `,
})
export class CardDetailComponent implements OnInit {
  @Input() index: number;
  card: Card;
  constructor(public service: ItemService) {

  }
  ngOnInit(): void {
    this.card = this.service.getCardByIndex(this.index);
  }
}
