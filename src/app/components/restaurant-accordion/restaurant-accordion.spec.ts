import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAccordion } from './restaurant-accordion';

describe('RestaurantAccordion', () => {
  let component: RestaurantAccordion;
  let fixture: ComponentFixture<RestaurantAccordion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantAccordion],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantAccordion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
