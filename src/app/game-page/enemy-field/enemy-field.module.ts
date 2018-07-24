import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnemyFieldComponent } from './enemy-field.component';
import { CardDeckModule } from '../card-deck/card-deck.module';

@NgModule({
  imports: [
    CommonModule,
    CardDeckModule
  ],
  declarations: [EnemyFieldComponent],
  exports: [EnemyFieldComponent]
})
export class EnemyFieldModule { }
