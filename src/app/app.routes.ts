import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { RestaurantPage } from './pages/restaurant-page/restaurant-page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'restaurant/:restId', component: RestaurantPage },
];
