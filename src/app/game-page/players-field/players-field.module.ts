import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersFieldComponent } from './players-field.component';
import { CardDeckModule } from '../card-deck/card-deck.module';

@NgModule({
  imports: [
    CommonModule,
    CardDeckModule
  ],
  declarations: [PlayersFieldComponent],
  exports: [PlayersFieldComponent]
})
export class PlayersFieldModule { }
