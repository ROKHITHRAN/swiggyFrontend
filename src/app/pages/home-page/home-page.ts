import { Component } from '@angular/core';
import { HomeCarousel } from '../../components/home-carousel/home-carousel';
import { FoodCard } from '../../components/food-card/food-card';
import { ArrowCarousel } from '../../components/arrow-carousel/arrow-carousel';

@Component({
  selector: 'app-home-page',
  imports: [HomeCarousel, FoodCard, ArrowCarousel],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
