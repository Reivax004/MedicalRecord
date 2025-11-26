import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Practitioner} from '../models/practitioner';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-practitioner',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './accountpractitioner.html',
  styleUrls: ['./accountpractitioner.scss']
})
export class AccountPractitioner {
  practitionerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.practitionerForm = this.fb.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      specialization: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      establishment: this.fb.group({
        name: ['', Validators.required],
        type: ['', Validators.required],
        description: [''],
        phone: [''],
        email: ['', Validators.email],
        creation_date: ['', Validators.required],
        number_employees: ['', Validators.required]
      }),
      address: this.fb.group({
        number: ['', Validators.required],
        street: ['', Validators.required],
        city: ['', Validators.required],
        zipCode: ['', Validators.required],
        country: ['', Validators.required]
      })


    });
  }

  onSubmit() {
    if (this.practitionerForm.valid) {
      const practitioner: Practitioner = this.practitionerForm.value;
      console.log('Practitioner saved:', practitioner);
      alert('Practitioner account created!');
    } else {
      alert('Please fill all required fields.');
    }
  }
}
