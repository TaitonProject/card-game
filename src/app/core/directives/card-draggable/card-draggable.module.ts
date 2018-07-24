import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDraggableDirective } from './card-draggable.directive';
import { CardDropDirective } from './card-drop.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardDraggableDirective, CardDropDirective],
  exports: [CardDraggableDirective, CardDropDirective]
})
export class CardDraggableModule { }
