import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-show-more',
  imports: [NgFor],
  templateUrl: './show-more.html',
  styleUrl: './show-more.css',
})
export class ShowMore {
  cities = [
  'Order Grocery delivery in Bangalore',
  'Order Grocery Delivery in Gurgaon',
  'Order Grocery Delivery in Mumbai',
  'Order Grocery delivery in Chennai',
  'Order Grocery Delivery in Delhi',
  'Order Grocery Delivery in Hyderabad',
  'Order Grocery Delivery in Mumbai',
  'Order Grocery delivery in Chennai',
  'Order Grocery Delivery in Delhi',
  'Order Grocery Delivery in Hyderabad'
];
isExpanded = false;

toggleShowMore() {
  this.isExpanded = !this.isExpanded;
}
}
