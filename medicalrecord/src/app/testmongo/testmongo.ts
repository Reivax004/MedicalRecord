import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from '../services/patient';

@Component({
  selector: 'app-testmongo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testmongo.html'
})
export class Testmongo implements OnInit {

  patients: any[] = [];

  constructor(private patientService: PatientService) {}

  async ngOnInit() {
    console.log("ngOnInit appelé");
    this.patients = await this.patientService.getPatients();
    console.log("patients récupérés :", this.patients);
  }

  async addTestPatient() {
    const newPatient = await this.patientService.addPatient({
      lastname: 'Doe',
      firstname: 'Jane',
      email: 'jane.doe@example.com'
    });
    console.log("Nouveau patient :", newPatient);

    this.patients.push(newPatient);
  }
}
