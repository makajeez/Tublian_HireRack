import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { RouterModule }  from '@angular/router'


 
@Component({
  selector: 'app-onboard-gs',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    RouterModule,
    NgClass
  ],
  templateUrl: './onboard-gs.component.html',
  styleUrl: './onboard-gs.component.css'
})
export class OnboardGsComponent {
  gsForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(){
    this.gsForm = this.fb.group({
      fn: ['John', [ Validators.minLength(3), Validators.required]],
      ln: ['Doe', [ Validators.minLength(3), Validators.required ]]
    })
  }
}
