export interface Prescription {
  drug_name: string;
  shape: string;
  quantity: number;
  frequence: number;
  start_date: Date;
  end_date: Date;
  status: string;
}
