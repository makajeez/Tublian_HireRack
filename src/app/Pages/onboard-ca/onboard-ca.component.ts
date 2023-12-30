import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { RouterModule }  from '@angular/router'

@Component({
  selector: 'app-onboard-ca',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './onboard-ca.component.html',
  styleUrl: './onboard-ca.component.css'
})
export class OnboardCaComponent {
  gsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(){
    this.gsForm = this.fb.group({
      fn: ['', [ Validators.minLength(3), Validators.required]],
      ln: ['', [ Validators.minLength(3), Validators.required ]]
    })
  }
}
