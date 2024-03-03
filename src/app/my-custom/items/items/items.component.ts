import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items = [
    {
      name: 'Item1',
      path: 'assets/images/angular.png',
      desc: 'This is the Desc1',
    },
    {
      name: 'Item2',
      path: 'assets/images/angular.png',
      desc: 'This is the Desc2',
    },
    {
      name: 'Item3',
      path: 'assets/images/angular.png',
      desc: 'This is the Desc3',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
