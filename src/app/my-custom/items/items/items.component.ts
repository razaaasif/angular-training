import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items = [];
  constructor(private service: ItemService) {}

  ngOnInit(): void {
    this.items = this.service.getItems();
  }
}
