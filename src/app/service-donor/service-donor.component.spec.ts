import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDonorComponent } from './service-donor.component';

describe('ServiceDonorComponent', () => {
  let component: ServiceDonorComponent;
  let fixture: ComponentFixture<ServiceDonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDonorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
