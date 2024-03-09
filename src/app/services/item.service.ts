import { Injectable } from '@angular/core';
import { Card } from '../model/card.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items: Card[] = [];

  getItems() {
    return this.items;
  }

  additem(card: Card) {
    return this.items.push({name: card.name , description: card.description , url : card.url});
  }

  getCardByIndex(index: number): Card {
    return this.items[index];
  }
}
