import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardAsComponent } from './onboard-as.component';

describe('OnboardAsComponent', () => {
  let component: OnboardAsComponent;
  let fixture: ComponentFixture<OnboardAsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardAsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
