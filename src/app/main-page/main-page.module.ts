import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    MainPageRoutingModule,
    CoreModule
  ],
  declarations: [MainPageComponent]
})
export class MainPageModule { }
