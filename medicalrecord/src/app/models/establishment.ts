import {Address} from './address';

export interface Establishment {
  name: string;
  address: Address;
  type: string
  description: string
  phone: number;
  email: string;
  creation_date: Date;
  number_employees: number;
}
