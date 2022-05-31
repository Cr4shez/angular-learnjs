import {
  Component,
  ContentChild,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent implements OnInit {
  constructor() {}

  @ViewChild('navListContainer', { read: ViewContainerRef, static: true })
  private navListContainer!: ViewContainerRef;

  @ContentChild('sideNavItems', { static: true })
  private matList!: TemplateRef<unknown>;

  @ViewChild(MatSidenav, { static: true })
  private sideNav!: MatSidenav;

  ngOnInit() {
    this.navListContainer.createEmbeddedView(this.matList);
  }

  onToggleSideNav() {
    this.sideNav.toggle();
  }
}
