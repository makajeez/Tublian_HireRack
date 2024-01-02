import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router }  from '@angular/router'


 
@Component({
  selector: 'app-onboard-gs',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    NgClass
  ],
  templateUrl: './onboard-gs.component.html',
  styleUrl: './onboard-gs.component.css'
})
export class OnboardGsComponent {
  gsForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(){
    this.gsForm = this.fb.group({
      fn: ['', [ Validators.minLength(3), Validators.required]],
      ln: ['', [ Validators.minLength(3), Validators.required ]]
    })
  }

  createAccount() {
    this.router.navigate(['/create-account'], {
      state: {
        fn: this.gsForm.controls['fn'].value,
        ln: this.gsForm.controls['ln'].value
      }
    })
  }
}
