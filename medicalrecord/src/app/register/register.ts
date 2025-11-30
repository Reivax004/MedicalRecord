import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const API_BASE_URL = 'http://localhost:3000';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register {

  patient = {
    SSN: '',
    lastname: '',
    firstname: '',
    birthdate: '',
    sex: '',
    phone: '',
    email: '',
    password: '',
    address: {
      number: null as number | null,
      street: '',
      postal_code: null as number | null,
      city: '',
      country: ''
    }
  };

  errorMessage = '';
  isSubmitting = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  submit(): void {
    this.errorMessage = '';
    this.isSubmitting = true;

    const payload = {
      SSN: this.patient.SSN,
      lastname: this.patient.lastname,
      firstname: this.patient.firstname,
      birthdate: this.patient.birthdate,
      sex: this.patient.sex,
      phone: this.patient.phone,
      email: this.patient.email,
      password: this.patient.password,
      address: {
        number: this.patient.address.number,
        street: this.patient.address.street,
        postal_code: this.patient.address.postal_code,
        city: this.patient.address.city,
        country: this.patient.address.country
      }
    };

    this.http.post(`${API_BASE_URL}/patient/register`, payload)
      .subscribe({
        next: () => {
          this.isSubmitting = false;
          this.router.navigate(['/login']); // adapte la route si ton login a un autre path
        },
        error: (err) => {
          this.isSubmitting = false;
          this.errorMessage = err.error?.message || 'Erreur lors de la création du compte patient.';
        }
      });
  }
}
