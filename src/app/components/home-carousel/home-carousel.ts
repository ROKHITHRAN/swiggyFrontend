import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-carousel',
  imports: [NgFor],
  templateUrl: './home-carousel.html',
  styleUrl: './home-carousel.css',
})
export class HomeCarousel {
  items = [
    'assets/images/Burger.avif',
    'assets/images/Cake.avif',
    'assets/images/Dessert.avif',
    'assets/images/Pizza.avif',
    'assets/images/Rolls.avif',
    'assets/images/NorthIndian.avif',
    'assets/images/Tea.avif',
    'assets/images/Chinease.avif',
  ];
}
