import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardCaComponent } from './onboard-ca.component';

describe('OnboardCaComponent', () => {
  let component: OnboardCaComponent;
  let fixture: ComponentFixture<OnboardCaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardCaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnboardCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
