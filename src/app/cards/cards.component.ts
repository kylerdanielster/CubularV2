import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: Card[];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.getCards();
  }

  getCards(): void {
    this.cardService.getCards()
      .subscribe(cards => this.cards = cards);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.cardService.addCard({ name } as Card)
      .subscribe(card => {
        this.cards.push(card);
      });
  }

  delete(card: Card): void {
    this.cards = this.cards.filter(c => c !== card);
    this.cardService.deleteCard(card).subscribe();
  }

}
