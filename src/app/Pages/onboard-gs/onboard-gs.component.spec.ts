import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardGsComponent } from './onboard-gs.component';

describe('OnboardGsComponent', () => {
  let component: OnboardGsComponent;
  let fixture: ComponentFixture<OnboardGsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardGsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardGsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
