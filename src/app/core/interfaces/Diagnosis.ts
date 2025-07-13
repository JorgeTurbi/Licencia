// src/app/shared/components/diagnosis-dialog/diagnosis.model.ts
export type DiagnosisCategory = 'General' | 'Pediatría' | 'Cardiología' | 'Traumatología' | 'Dermatología';

export interface Diagnosis {
  id: string;
  name: string;
  description: string;
  category: string;
  createdAt: string;
}


