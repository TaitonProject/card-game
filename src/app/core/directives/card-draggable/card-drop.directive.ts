import { Directive, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { GameService } from '../../../game-page/services/game.service';

@Directive({
  selector: '[gmCardDrop]'
})
export class CardDropDirective implements AfterViewInit {

  constructor(private _element: ElementRef, private _renderer: Renderer2, private _gameService: GameService) { }

  ngAfterViewInit(): void {
    console.log('drop init');
    this._renderer.listen(this._element.nativeElement, 'drop', this.drop);
    this._renderer.listen(this._element.nativeElement, 'dragover', this.dragover);
  }

  drop = (event: any) => {
    console.log('drop!', event);
    event.preventDefault();
    this._gameService.dropCard = this._gameService.dragCard;
    this._gameService.makeMoveCard(this._gameService.dropCard.data);
    // event.target.appendChild(this._gameService.dragCard.target);

    // this._gameService.dragCard = undefined;
  }

  dragover = (event) => {
    event.preventDefault();
    console.log('dragover');
  }


}
