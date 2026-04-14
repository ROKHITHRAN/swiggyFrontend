import { Component } from '@angular/core';
import { restaurantCardDetails } from '../../model/types';
import { getRatingIcon } from '../../utils/getRatingsIcon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-card',
  imports: [],
  templateUrl: './food-card.html',
  styleUrl: './food-card.css',
})
export class FoodCard {
  cardDetails: restaurantCardDetails = {
    restaurantId: 1,
    restaurantName: 'Pizza Hut',
    ratings: 5,
    imageUrl: 'assets/images/pizza-hut.avif',
    address: 'New Bus Stand',
    tags: 'Pizza',
  };
  getRatingIcon = getRatingIcon;
}
