import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-arrow-carousel',
  imports: [],
  templateUrl: './arrow-carousel.html',
  styleUrl: './arrow-carousel.css',
})
export class ArrowCarousel {
  @Input() items: any[] = [];

  @ViewChild('container', { static: true }) container!: ElementRef;

  scrollLeft() {
    this.container.nativeElement.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  }

  scrollRight() {
    this.container.nativeElement.scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  }
}
