import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent {
  @Input() opened!: boolean;
  @Input() navListTemplate!: TemplateRef<unknown>;
  constructor() {}
}
