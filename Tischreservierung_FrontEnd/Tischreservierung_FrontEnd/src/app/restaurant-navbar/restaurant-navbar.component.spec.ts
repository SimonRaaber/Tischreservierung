import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantNavbarComponent } from './restaurant-navbar.component';

describe('RestaurantNavbarComponent', () => {
  let component: RestaurantNavbarComponent;
  let fixture: ComponentFixture<RestaurantNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
