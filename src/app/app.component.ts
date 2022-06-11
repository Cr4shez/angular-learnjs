import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { SidenavComponent } from './components/header/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'angular-learnjs';

  @ViewChild(SidenavComponent, { static: true })
  private sideNavComponent!: SidenavComponent;

  onMenuClick() {
    this.sideNavComponent.onToggleSideNav();
  }
}
