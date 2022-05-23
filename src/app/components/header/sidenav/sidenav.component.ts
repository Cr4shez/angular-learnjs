import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent {
  @Input() opened!: boolean;
  constructor() {}
}
