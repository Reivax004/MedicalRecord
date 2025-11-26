import {Address} from './address';
import {MedicalRecord} from './record';


export interface Account {
  ssn: number;
  lastName: string;
  firstName: string;
  birthDate: Date;
  address: Address;
  sex: string;
  phone: number;
  email: string;
  password: string;
  general_file : MedicalRecord;
}
