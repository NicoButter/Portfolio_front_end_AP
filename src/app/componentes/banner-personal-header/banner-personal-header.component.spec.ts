import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPersonalHeaderComponent } from './banner-personal-header.component';

describe('BannerPersonalHeaderComponent', () => {
  let component: BannerPersonalHeaderComponent;
  let fixture: ComponentFixture<BannerPersonalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerPersonalHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPersonalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
