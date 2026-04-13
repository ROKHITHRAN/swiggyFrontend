import { Component } from '@angular/core';
import { restaurantCardDetails } from '../../model/types';
import { getRatingIcon } from '../../utils/getRatingsIcon';

@Component({
  selector: 'app-food-card',
  imports: [],
  templateUrl: './food-card.html',
  styleUrl: './food-card.css',
})
export class FoodCard {
  cardDetails: restaurantCardDetails = {
    restaurantName: 'Pizza Hut',
    ratings: 5,
    imageUrl: 'assets/images/pizza-hut.avif',
    address: 'New Bus Stand',
    tags: 'Pizza',
  };
  getRatingIcon = getRatingIcon;
}
