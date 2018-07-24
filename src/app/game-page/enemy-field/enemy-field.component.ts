import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../services/game.service';
import { Player } from '../models/player';
import { Observable } from 'rxjs';

@Component({
  selector: 'gm-enemy-field',
  templateUrl: './enemy-field.component.html',
  styleUrls: ['./enemy-field.component.less']
})
export class EnemyFieldComponent implements OnInit {

  player$: Observable<Player>;

  constructor(public gameService: GameService) { }

  ngOnInit() {
    this.player$ = this.gameService.enemy$;
    this.gameService.handOutCards(this.gameService.enemy);
  }

}
