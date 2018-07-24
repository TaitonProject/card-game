import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gm-button',
  templateUrl: './gm-button.component.html',
  styleUrls: ['./gm-button.component.less']
})
export class GmButtonComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
