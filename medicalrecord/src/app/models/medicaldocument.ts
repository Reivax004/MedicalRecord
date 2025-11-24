import {Practitioner} from './practitioner';

export interface MedicalDocument {
  follow_up_file_Id: number;
  practitioner: Practitioner;
  type: string;
  date: Date;
  description: string;
}
