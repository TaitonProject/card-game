import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameFieldComponent } from './game-field.component';
import { CardDeckModule } from '../card-deck/card-deck.module';
import { CardDraggableModule } from '../../core/directives/card-draggable/card-draggable.module';

@NgModule({
  imports: [
    CommonModule,
    CardDeckModule,
    CardDraggableModule
  ],
  declarations: [GameFieldComponent],
  exports: [GameFieldComponent]
})
export class GameFieldModule { }
