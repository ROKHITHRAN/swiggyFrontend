import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-home-component',
  imports: [NgFor],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  items = ["assets/images/Burger.avif","assets/images/Cake.avif","assets/images/Dessert.avif",
    "assets/images/Pizza.avif","assets/images/Rolls.avif","assets/images/NorthIndian.avif",
  "assets/images/Tea.avif","assets/images/Chinease.avif"];
}