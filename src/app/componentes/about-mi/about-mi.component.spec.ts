import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMiComponent } from './about-mi.component';

describe('AboutMiComponent', () => {
  let component: AboutMiComponent;
  let fixture: ComponentFixture<AboutMiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
