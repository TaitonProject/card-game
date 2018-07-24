import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';
import { GameService } from '../services/game.service';

@Component({
  selector: 'gm-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.less']
})
export class GameFieldComponent implements OnInit {

  currentCard: Card;

  constructor(public gameSerivce: GameService) { }

  ngOnInit() {
  }

}
