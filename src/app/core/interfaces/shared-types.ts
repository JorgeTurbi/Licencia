export type Hospital = 'HCFFAA' | 'Dr. Ramon de Lara';

export type Rank =
  | 'General'
  | 'Coronel'
  | 'Teniente Coronel'
  | 'Mayor'
  | 'Capitán'
  | 'Primer Teniente'
  | 'Segundo Teniente'
  | 'Cadete'
  | 'Sargento Mayor'
  | 'Sargento'
  | 'Cabo'
  | 'Raso';

export type Institution = 'Ejército' | 'Armada' | 'Fuerza Aérea';

export type DiagnosisCategory =
  | 'General'
  | 'Cardiología'
  | 'Traumatología'
  | 'Neurología'
  | 'Gastroenterología'
  | 'Psiquiatría'
  | 'Otorrinolaringología'
  | 'Oftalmología';

export interface Diagnosis {
  id: string;
  name: string;
  description: string;
  category: DiagnosisCategory;
  createdAt: string;
}

export interface MedicalLeave {
  id: string;
  rank: Rank;
  fullName: string;
  institution: Institution;
  documentId: string;
  diagnosis: string;
  diagnosisId?: string;
  diagnosisDescription?: string;
  startDate: string;
  endDate: string;
  days: number;
  issuedBy: Hospital;
  issuedAt: string;
  isActive: boolean;
  email?: string;
}

export interface Personnel {
  id: string;
  documentId: string;
  rank: Rank;
  fullName: string;
  firstName: string;
  lastName: string;
  institution: Institution;
  position: string;
  department: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  dateOfBirth?: string;
  dateOfEnlistment: string;
  isActive: boolean;
  emergencyContact?: {
    name: string;
    relationship: string;
    phoneNumber: string;
  };
  medicalHistory?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface PatientInfo {
  fullName: string;
  rank: Rank;
  institution: Institution;
}

export interface PayrollEntry {
  id: string;
  personnelId: string;
  fullName: string;
  rank: Rank;
  institution: Institution;
  baseSalary: number;
  allowances: number;
  deductions: number;
  netSalary: number;
  payPeriod: string; // YYYY-MM format
  payDate: string;
  status: 'draft' | 'approved' | 'paid';
  createdAt: string;
  updatedAt: string;
}

export interface PayrollSummary {
  totalEmployees: number;
  totalBaseSalary: number;
  totalAllowances: number;
  totalDeductions: number;
  totalNetSalary: number;
  payPeriod: string;
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: 'admin' | 'hr' | 'medical' | 'user';
  isActive: boolean;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export const ranks: Rank[] = [
  'General',
  'Coronel',
  'Teniente Coronel',
  'Mayor',
  'Capitán',
  'Primer Teniente',
  'Segundo Teniente',
  'Cadete',
  'Sargento Mayor',
  'Sargento',
  'Cabo',
  'Raso',
];

export const institutions: Institution[] = ['Ejército', 'Armada', 'Fuerza Aérea'];
