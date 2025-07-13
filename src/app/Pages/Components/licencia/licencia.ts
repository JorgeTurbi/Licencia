import { CommonModule } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CARD_COMPONENTS } from '../../../shared/components/CARD_COMPONENTS';


@Component({
  selector: 'app-licencia',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
...CARD_COMPONENTS
],
  templateUrl: './licencia.html',
  styleUrl: './licencia.css'
})
export class LicenciaComponent {
    // Campos del formulario
  rank: string = '';
  institution: string = '';
  fullName: string = '';
  documentId: string = '';
  diagnosisId: string = '';
  hospital: string = '';
  email: string = '';

  // Opciones para los selects
  ranks = ['General', 'Coronel', 'Mayor'];
  institutions = ['Hospital Militar', 'Policlínico Nacional'];
diagnoses = [
  { id: 1, name: 'Dolor lumbar' },
  { id: 2, name: 'Fractura' },
  { id: 3, name: 'Hipertensión' },
];
  hospitals = ['H.M. San Isidro', 'Centro Médico Cibao'];

  isSubmitting = false;

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.isSubmitting = true;

    console.log('Formulario enviado:', {
      rank: this.rank,
      institution: this.institution,
      fullName: this.fullName,
      documentId: this.documentId,
      diagnosisId: this.diagnosisId,
      hospital: this.hospital,
      email: this.email,
    });


    // Simular procesamiento...
    setTimeout(() => {
      form.resetForm();
      this.isSubmitting = false;
    }, 1500);
  }

  resetForm() {
  this.rank = '';
  this.institution = '';
  this.fullName = '';
  this.documentId = '';
  this.diagnosisId = '';
  this.email = '';
  this.hospital = '';
}

}
