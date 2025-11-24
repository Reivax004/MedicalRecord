import {Vaccine} from './vaccine';
import {Practitioner} from './practitioner';

export interface MedicalRecord {
  weight?: number;
  height?: number;
  blood_pressure: String;
  general_practitioner: Practitioner;
  vaccine: Vaccine;
  allergies: [];
}


