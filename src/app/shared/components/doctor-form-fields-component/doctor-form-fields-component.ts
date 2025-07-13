import { Component, Input } from '@angular/core';
import { FormFieldComponent } from "../form-field-component/form-field-component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
   selector: 'ui-doctor-form-fields',
  standalone: true,
  imports: [FormFieldComponent, CommonModule,FormsModule],
  templateUrl: './doctor-form-fields-component.html',
  styleUrl: './doctor-form-fields-component.css'
})
export class DoctorFormFieldsComponent {
  @Input() doctorRank = '';
  @Input() doctorFirstName = '';
  @Input() doctorLastName = '';
  @Input() doctorInstitution = '';
  @Input() doctorExequatur = '';
  doctorRanks = ['General', 'Coronel', 'Mayor'];
  institutions = ['Hospital Militar', 'Policlínico Nacional'];
}
