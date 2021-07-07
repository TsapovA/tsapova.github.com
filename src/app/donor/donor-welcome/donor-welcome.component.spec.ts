import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorWelcomeComponent } from './donor-welcome.component';

describe('ServiceDonorComponent', () => {
  let component: DonorWelcomeComponent;
  let fixture: ComponentFixture<DonorWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
