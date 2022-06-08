import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'angular-learnjs';
  sideMenuOpened = false;

  onMenuClick() {
    this.sideMenuOpened = !this.sideMenuOpened;
  }
}
