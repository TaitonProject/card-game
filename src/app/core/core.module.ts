import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmButtonComponent } from './components/gm-button/gm-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GmButtonComponent
  ],
  exports: [
    GmButtonComponent
  ]
})
export class CoreModule { }
