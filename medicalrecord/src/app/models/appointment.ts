export interface Appointment {
  patientId: number;
  practitionerId : number;
  name: string;
  date: Date;
  type: string;
  description: string;
}
