import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTES_PATHS } from './core/constants/routes-paths.const';

const routes: Routes = [
  { path: ROUTES_PATHS.main, loadChildren: './main-page/main-page.module#MainPageModule' },
  { path: ROUTES_PATHS.game, loadChildren: './game-page/game-page.module#GamePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
