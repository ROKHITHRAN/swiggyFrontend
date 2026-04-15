import { Component } from '@angular/core';
import { OfferCardDetails } from '../../model/types';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-offer-details',
  imports: [NgFor],
  templateUrl: './offer-details.html',
  styleUrl: './offer-details.css',
})
export class OfferDetails {

  offerDetails:OfferCardDetails[]=[{
    imageUrl:"assets/images/active offer - 1.avif",
    description:"66% Off Upto ₹126",
    Code:"USE SWIGGY6"
  },{
    imageUrl:"assets/images/active offer - 1.avif",
    description:"66% Off Upto ₹126",
    Code:"USE SWIGGY6"
  },{
    imageUrl:"assets/images/active offer - 1.avif",
    description:"66% Off Upto ₹126",
    Code:"USE SWIGGY6"
  },{
    imageUrl:"assets/images/active offer - 1.avif",
    description:"66% Off Upto ₹126",
    Code:"USE SWIGGY6"
  },{
    imageUrl:"assets/images/active offer - 1.avif",
    description:"66% Off Upto ₹126",
    Code:"USE SWIGGY6"
  },{
    imageUrl:"assets/images/active offer - 1.avif",
    description:"66% Off Upto ₹126",
    Code:"USE SWIGGY6"
  },{
    imageUrl:"assets/images/active offer - 1.avif",
    description:"66% Off Upto ₹126",
    Code:"USE SWIGGY6"
  },{
    imageUrl:"assets/images/active offer - 1.avif",
    description:"66% Off Upto ₹126",
    Code:"USE SWIGGY6"
  },]
}
