import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../models/player';
import { GameService } from '../services/game.service';
import { Card } from '../models/card';
import { Observable } from 'rxjs';

@Component({
  selector: 'gm-players-field',
  templateUrl: './players-field.component.html',
  styleUrls: ['./players-field.component.less']
})
export class PlayersFieldComponent implements OnInit {

  player$: Observable<Player>;

  constructor(public gameService: GameService) { }

  ngOnInit() {
    this.player$ = this.gameService.player$;
    this.gameService.handOutCards(this.gameService.player);
  }
}
