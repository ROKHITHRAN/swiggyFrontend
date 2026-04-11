import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-drawer',
  imports: [CommonModule],
  templateUrl: './side-drawer.html',
  styleUrl: './side-drawer.css',
})
export class SideDrawer {
  isOpen = false;

  @Input() type: 'signin' | 'location' | null = null;
  @Input() isDrawerOpen = false;
  @Input() direction: 'left' | 'right' = 'right';

  @Output() close = new EventEmitter<void>();
}
