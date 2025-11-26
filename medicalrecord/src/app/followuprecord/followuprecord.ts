import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule, FormControl} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {Practitioner} from '../models/practitioner';

@Component({
  selector: 'app-dossier-suivi',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './followuprecord.html',
  styleUrls: ['./followuprecord.scss']
})
export class FollowupRecord {

  dossierForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dossierForm = this.fb.group({
      id: ['', Validators.required],
      pathology: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: [''],
      status: ['', Validators.required],
      prescriptions: this.fb.array<FormGroup>([]),
      medical_document: this.fb.array<FormGroup>([])

    });
  }

  // GETTERS
  get prescriptions(): FormArray {
    return this.dossierForm.get('prescriptions') as FormArray;
  }

  get documentsMedicaux(): FormArray {
    return this.dossierForm.get('medical_document') as FormArray;
  }

  // --- PRESCRIPTIONS ---
  addPrescription() {
    const group = this.fb.group({
      drug_name: ['', Validators.required],
      shape: ['', Validators.required],
      quantity: ['', Validators.required],
      frequency: ['', Validators.required],
      start_date: ['', Validators.required],
      end_date: ['', Validators.required],
      status: ['', Validators.required]
    });
    this.prescriptions.push(group);
  }

  removePrescription(index: number) {
    this.prescriptions.removeAt(index);
  }

  // --- DOCUMENTS MÉDICAUX ---
  addMedicalDoc() {
    const group = this.fb.group({
      follow_up_file_Id:['', Validators.required],
      practitioner:['', Validators.required],
      type: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.documentsMedicaux.push(group);
  }

  removeMedicalDoc(index: number) {
    this.documentsMedicaux.removeAt(index);
  }

  // --- SUBMIT ---
  onSubmit() {
    if (this.dossierForm.valid) {
      const dossier: FollowupRecord = this.dossierForm.value;
      console.log("Dossier enregistré :", dossier);
      alert("Dossier de suivi enregistré !");
    } else {
      alert("Veuillez remplir tous les champs obligatoires.");
    }
  }
}
