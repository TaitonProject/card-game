import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES_PATHS } from '../core/constants/routes-paths.const';

@Component({
  selector: 'gm-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less']
})
export class MainPageComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  clicked() {
    this._router.navigateByUrl(ROUTES_PATHS.game);
  }
}
