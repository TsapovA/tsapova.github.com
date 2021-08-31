import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorQuickComponent } from './donor-quick.component';

describe('DonorQuickComponent', () => {
  let component: DonorQuickComponent;
  let fixture: ComponentFixture<DonorQuickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorQuickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorQuickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
