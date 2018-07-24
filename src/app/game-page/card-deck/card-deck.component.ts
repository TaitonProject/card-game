import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'gm-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.less']
})
export class CardDeckComponent implements OnInit {

  @Input() cards: Array<Card>;

  @Input() enableDrag: boolean;

  constructor() { }

  ngOnInit() {
  }

}
