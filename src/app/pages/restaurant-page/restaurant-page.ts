import { Component } from '@angular/core';
import { OfferDetails } from "../../components/offer-details/offer-details";
import { ArrowCarousel } from "../../components/arrow-carousel/arrow-carousel";
import { RestaurantAccordion } from "../../components/restaurant-accordion/restaurant-accordion";

@Component({
  selector: 'app-restaurant-page',
  imports: [OfferDetails, ArrowCarousel, RestaurantAccordion],
  templateUrl: './restaurant-page.html',
  styleUrl: './restaurant-page.css',
})
export class RestaurantPage {
  
}
