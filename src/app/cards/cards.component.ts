import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

import { CARDS } from '../mock-cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  selectedCard: Card;
  cards = CARDS;

  onSelect(card: Card): void {
    this.selectedCard = card;
  }

  constructor() { }

  ngOnInit() {
  }

}
