import { Account } from "./account";
import { Practitioner } from "./practitioner";

export interface Appointment {
  patientId: Account;
  practitionerId : Practitioner;
  name: string;
  date: Date;
  type: string;
  description: string;
}
