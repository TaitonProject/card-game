import { Injectable } from '@angular/core';
import { Card } from '../models/card';
import { Player } from '../models/player';
import { Dnd } from '../../core/directives/card-draggable/models/dnd.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  enemy$: BehaviorSubject<Player> = new BehaviorSubject<Player>(new Player('Egor'));
  player$: BehaviorSubject<Player> = new BehaviorSubject<Player>(new Player('Alexander'));
  currentPlayer: Player;
  allCards: Array<Card> = new Array<Card>();
  dragCard: Dnd<Card>;
  dropCard: Dnd<Card>;

  constructor() {

  }

  get enemy(): Player {
    return this.enemy$.getValue();
  }

  set enemy(enemy: Player) {
    this.enemy$.next(enemy);
  }

  get player(): Player {
    return this.player$.getValue();
  }

  set player(player: Player) {
    this.player$.next(player);
  }

  startGame() {
    this.initCards();
    this.setCurrentPlayer();
  }

  initCards() {
    for (let i = 0; i < 20; i++) {
      const card: Card = new Card('card ' + i);
      this.allCards.push(card);
    }
  }

  handOutCards(player: any) {
    player.cards = this.allCards.splice(0, 6);
  }

  setCurrentPlayer() {
    if (this.currentPlayer === this.enemy) {
      this.currentPlayer = this.player;
    } else if (this.currentPlayer === this.player) {
      this.currentPlayer = this.enemy;
    } else {
      this.currentPlayer = this.player;
    }
  }

  getCurrentPlayer(): Player {
    if (this.currentPlayer === this.enemy) {
      return this.enemy;
    } else if (this.currentPlayer === this.player) {
      return this.player;
    }
    return undefined;
  }

  makeMoveCard(card: Card) {
    const player = this.getCurrentPlayer();
    player.cards = player.cards.filter(_ => _ !== card);
    this.setCurrentPlayer();
  }
}
