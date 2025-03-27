import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAuctionComponent } from './details-auction.component';

describe('DetailsAuctionComponent', () => {
  let component: DetailsAuctionComponent;
  let fixture: ComponentFixture<DetailsAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsAuctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
