import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-form-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-field-component.html',
  styleUrl: './form-field-component.css'
})
export class FormFieldComponent {
  @Input() label: string = '';
  @Input() message?: string;
}
