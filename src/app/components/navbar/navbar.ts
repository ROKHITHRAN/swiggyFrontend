import { Component } from '@angular/core';
import { SideDrawer } from '../side-drawer/side-drawer';

@Component({
  selector: 'app-navbar',
  imports: [SideDrawer],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  location = '';
  isDrawerOpen = false;
  drawerType: 'signin' | 'location' | null = null;
  drawerDirection: 'left' | 'right' = 'right';

  OpenDrawer(type: 'signin' | 'location') {
    this.isDrawerOpen = true;
    this.drawerType = type;
    this.drawerDirection = type === 'location' ? 'left' : 'right';
  }
  CloseDrawer() {
    this.isDrawerOpen = false;
    this.drawerType = null;
  }
}
