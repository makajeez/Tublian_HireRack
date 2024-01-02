import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router }  from '@angular/router'

@Component({
  selector: 'app-onboard-ca',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './onboard-ca.component.html',
  styleUrl: './onboard-ca.component.css'
})
export class OnboardCaComponent {
  caForm!: FormGroup;
  fn = '';
  ln = '';

  constructor(private fb: FormBuilder, private router: Router, private actRouter: ActivatedRoute) {
  }

  ngOnInit(){
    this.fn = window.history.state.fn
    this.ln = window.history.state.ln
    this.caForm = this.fb.group({
      email: ['', [ Validators.email, Validators.required]],
      pw: ['', [ Validators.minLength(8), Validators.required, Validators.pattern("^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$")]]
    })
  }
}
