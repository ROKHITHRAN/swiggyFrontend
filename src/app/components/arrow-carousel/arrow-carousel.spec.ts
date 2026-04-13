import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowCarousel } from './arrow-carousel';

describe('ArrowCarousel', () => {
  let component: ArrowCarousel;
  let fixture: ComponentFixture<ArrowCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowCarousel],
    }).compileComponents();

    fixture = TestBed.createComponent(ArrowCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
