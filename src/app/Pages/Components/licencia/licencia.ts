import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CARD_COMPONENTS } from '../../../shared/components/CARD_COMPONENTS';
import { Search, Settings, AlignLeft, Plus, Send, Printer, LucideAngularModule } from 'lucide-angular';
import { DiagnosisDialogComponent } from '../../../shared/components/diagnosis-dialog/diagnosis-dialog';



@Component({
  selector: 'app-licencia',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...CARD_COMPONENTS,
    LucideAngularModule,
    DiagnosisDialogComponent
],
  templateUrl: './licencia.html',
  styleUrl: './licencia.css'
})
export class LicenciaComponent implements OnInit {
[x: string]: any;
@Input() isDiagnosisDialogOpen: boolean = false;
// isOpen: boolean = false;

  Search = Search;
  Settings = Settings;
  AlignLeft = AlignLeft;
  Plus = Plus;
  Send = Send;
  Printer = Printer;

  // Datos del formulario
  rank = '';
  institution = '';
  fullName = '';
  documentId = '';
  diagnosisId = '';
  diagnosisDescription = '';
  hospital = '';
  email = '';
  doctorId = '';
  startDate: string = '';
  endDate: string = '';
  isSubmitting = false;

  // Datos auxiliares
  ranks = ['General', 'Coronel', 'Mayor'];
  institutions = ['Hospital Militar', 'Policlínico Nacional'];
  hospitals = ['H.M. San Isidro', 'Centro Médico Cibao'];
  diagnoses = [
    { id: 1, name: 'Dolor lumbar' },
    { id: 2, name: 'Fractura' },
    { id: 3, name: 'Hipertensión' }
  ];
  doctors = [
    { id: 1, name: 'Dr. Carlos Rodríguez' },
    { id: 2, name: 'Dra. María González' }
  ];
constructor() {
  document.addEventListener('keydown', this.handleEscKey);
}
  ngOnInit(): void {
   document.removeEventListener('keydown', this.handleEscKey);
  }

ngOnDestroy() {

}

// 👇 Evita múltiples binds creando una referencia estable
handleEscKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && this.isDiagnosisDialogOpen) {
    this.closeDiagnosisDialog();
  }
};



  // Días calculados
  get calculatedDays(): number {
    if (!this.startDate || !this.endDate) return 0;
    const start = new Date(this.startDate);
    const end = new Date(this.endDate);
    const diff = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
    return diff >= 0 ? Math.floor(diff) + 1 : 0;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.isSubmitting = true;

    console.log('Datos enviados:', {
      rank: this.rank,
      institution: this.institution,
      fullName: this.fullName,
      documentId: this.documentId,
      diagnosisId: this.diagnosisId,
      diagnosisDescription: this.diagnosisDescription,
      doctorId: this.doctorId,
      hospital: this.hospital,
      email: this.email,
      startDate: this.startDate,
      endDate: this.endDate,
      days: this.calculatedDays
    });

    setTimeout(() => {
      form.resetForm();
      this.isSubmitting = false;
    }, 1500);
  }

openDiagnosisDialog() {
  this.isDiagnosisDialogOpen = true;
}

closeDiagnosisDialog() {
  this.isDiagnosisDialogOpen = false;
}
  resetForm() {
    this.rank = '';
    this.institution = '';
    this.fullName = '';
    this.documentId = '';
    this.diagnosisId = '';
    this.diagnosisDescription = '';
    this.doctorId = '';
    this.hospital = '';
    this.email = '';
    this.startDate = '';
    this.endDate = '';
  }
}
