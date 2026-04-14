import { Component } from '@angular/core';
// import { Restaurant } from '../../model/types';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-card-component',
  imports: [NgFor],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css',
})
export class CardComponent {
  restaurants:Restaurant[]=[
    {name:'KFC',
      Address:'Taramani, Chennai',
      ratings:4,
      imageUrl:"assets/images/KFC.avif",
      tags:"Burgers, Fast Food, Rolls & Wraps"
    },{name:'KFC',
      Address:'Taramani, Chennai',
      ratings:4,
      imageUrl:"assets/images/KFC.avif",
      tags:"Burgers, Fast Food, Rolls & Wraps"
    },{name:'KFC',
      Address:'Taramani, Chennai',
      ratings:4,
      imageUrl:"assets/images/KFC.avif",
      tags:"Burgers, Fast Food, Rolls & Wraps"
    }
  ]
}
