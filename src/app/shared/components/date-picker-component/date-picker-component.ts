import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'ui-date-picker',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './date-picker-component.html',
  styleUrl: './date-picker-component.css'
})
export class DatePickerComponent {
  @Input() model: any;
}
