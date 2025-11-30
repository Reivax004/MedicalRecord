import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Appointment} from '../models/appointment';
import {AppointmentService} from '../services/appointments';


@Component({
  selector: 'app-medical-appointment-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointments.html',
  styleUrls: ['./appointments.scss']
})
export class Appointments {

  appointments: Appointment[] = [
  ];

  constructor(private appointmentService: AppointmentService) {}


  ngOnInit() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.appointmentService.getById(userId)
        .subscribe((data: any) => {
          this.appointments = data;
        });
    }
  }
}
