import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgFor } from '@angular/common';
import { ShowMore } from './show-more';

describe('ShowMore', () => {
  let component: ShowMore;
  let fixture: ComponentFixture<ShowMore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowMore],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowMore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
