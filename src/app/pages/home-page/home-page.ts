import { Component } from '@angular/core';
import { HomeCarousel } from '../../components/home-carousel/home-carousel';
import { CardComponent } from "../../test-components/card-component/card-component";
import { ShowMore } from "../../test-components/show-more/show-more";

@Component({
  selector: 'app-home-page',
  imports: [HomeCarousel, CardComponent, ShowMore],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
