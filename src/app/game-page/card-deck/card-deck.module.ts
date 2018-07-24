import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDeckComponent } from './card-deck.component';
import { CardComponent } from './card/card.component';
import { CardDraggableModule } from '../../core/directives/card-draggable/card-draggable.module';

@NgModule({
  imports: [
    CommonModule,
    CardDraggableModule
  ],
  declarations: [CardDeckComponent, CardComponent],
  exports: [CardDeckComponent, CardComponent]
})
export class CardDeckModule { }
