import {MedicalDocument} from './medicaldocument';

export interface FollowupRecord {
  patientId: number;
  pathology: String;
  start_date: Date;
  end_date: Date | null;
  prescriptions: MedicalDocument[];
  status: string;
}
