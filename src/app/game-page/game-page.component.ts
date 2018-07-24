import { Component, OnInit } from '@angular/core';
import { GameService } from './services/game.service';

@Component({
  selector: 'gm-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.less']
})
export class GamePageComponent implements OnInit {

  constructor(public gameSerivce: GameService) { }

  ngOnInit() {
    this.gameSerivce.startGame();
  }

}
