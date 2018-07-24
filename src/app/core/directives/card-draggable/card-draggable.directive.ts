import { Directive, ElementRef, AfterViewInit, Renderer2, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GameService } from '../../../game-page/services/game.service';
import { Dnd } from './models/dnd.interface';
import { Card } from '../../../game-page/models/card';

@Directive({
  selector: '[gmCardDraggable]'
})
export class CardDraggableDirective implements AfterViewInit, OnChanges {

  @Input() enable = true;
  @Input() data: any;

  constructor(private _element: ElementRef, private _renderer: Renderer2, private _gameService: GameService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this._element && changes['enable']) {
      this._renderer.setAttribute(this._element.nativeElement, 'draggable', this.enable !== undefined ? this.enable.toString() : 'true');
    }
  }

  ngAfterViewInit(): void {
    this._renderer.setAttribute(this._element.nativeElement, 'draggable', this.enable !== undefined ? this.enable.toString() : 'true');
    this._renderer.listen(this._element.nativeElement, 'dragstart', this.onDragStart);
  }

  onDragStart = (event: any) => {
    if (this.enable) {
      console.log('event', event);
      this._gameService.dragCard = <Dnd<Card>>{ target: event.target, data: this.data };
      // event.dataTransfer.setData('text', '12');
      console.log('drag start!');
    }
  }
}
