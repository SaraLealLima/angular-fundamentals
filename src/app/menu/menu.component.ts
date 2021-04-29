import { Component, OnInit } from '@angular/core';
import { Wine } from '../shared/wine'
import { WINES } from '../shared/wines'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  wines: Wine[] = WINES;

  selectedWine: Wine;

  onSelect(wine: Wine) {
    this.selectedWine = wine;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
