import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Appointment} from '../models/appointment';
import {AppointmentService} from '../services/appointments';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-medical-appointment-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointments.html',
  styleUrls: ['./appointments.scss']
})
export class Appointments {

  private apiUrl = 'http://localhost:3000/api/appointments';
  appointments: Appointment[] = [
  ];
  userId: String = "";

  constructor(private appointmentService: AppointmentService, private http: HttpClient) {}

  ngOnInit() {
    this.userId = localStorage.getItem('userId') || '';
  }

  getById(): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.apiUrl}/${this.userId}`);
  }
}
