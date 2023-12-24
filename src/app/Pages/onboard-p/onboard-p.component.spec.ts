import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardPComponent } from './onboard-p.component';

describe('OnboardPComponent', () => {
  let component: OnboardPComponent;
  let fixture: ComponentFixture<OnboardPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
