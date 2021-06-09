import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesWelcomeComponent } from './services-welcome.component';

describe('ServicesWelcomeComponent', () => {
  let component: ServicesWelcomeComponent;
  let fixture: ComponentFixture<ServicesWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
