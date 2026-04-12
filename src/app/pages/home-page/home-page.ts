import { Component } from '@angular/core';
import { HomeCarousel } from '../../components/home-carousel/home-carousel';

@Component({
  selector: 'app-home-page',
  imports: [HomeCarousel],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
