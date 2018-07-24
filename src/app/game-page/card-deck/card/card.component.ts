import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'gm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  @Input() enableDrag: boolean;

  constructor() { }

  ngOnInit() {
  }

}
