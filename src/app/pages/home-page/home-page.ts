import { Component } from '@angular/core';
import { HomeCarousel } from '../../components/home-carousel/home-carousel';
import { FoodCard } from '../../components/food-card/food-card';
import { ArrowCarousel } from '../../components/arrow-carousel/arrow-carousel';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [HomeCarousel, FoodCard, ArrowCarousel, CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  constructor(private router: Router) {}

  items = [
    'assets/images/Burger.avif',
    'assets/images/Cake.avif',
    'assets/images/Dessert.avif',
    'assets/images/Pizza.avif',
    'assets/images/Rolls.avif',
    'assets/images/NorthIndian.avif',
    'assets/images/Tea.avif',
    'assets/images/Chinease.avif',
    'assets/images/Chinease.avif',
    'assets/images/Chinease.avif',
    'assets/images/Chinease.avif',
  ];
  navigateToRestaurant() {
    this.router.navigate(['/restaurant', 1]);
  }
}
