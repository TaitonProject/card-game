import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamePageRoutingModule } from './game-page-routing.module';
import { GamePageComponent } from './game-page.component';
import { EnemyFieldModule } from './enemy-field/enemy-field.module';
import { GameFieldModule } from './game-field/game-field.module';
import { PlayersFieldModule } from './players-field/players-field.module';
import { CardDraggableModule } from '../core/directives/card-draggable/card-draggable.module';

@NgModule({
  imports: [
    CommonModule,
    GamePageRoutingModule,
    EnemyFieldModule,
    GameFieldModule,
    PlayersFieldModule,
    CardDraggableModule
  ],
  declarations: [GamePageComponent]
})
export class GamePageModule { }
